/* eslint-disable jsx-a11y/aria-proptypes */
import React from 'react';
import PropTypes from 'prop-types';

class ReactAccessibleSelect extends React.Component {
  constructor(props) {
    super(props);
    const newOptions = props.options.map((option, index) => ({
      ...option,
      id: index,
    }));
    let initOption;
    if (props.initEmpty) {
      initOption = {};
    } else if (props.initOption.value) {
      initOption = newOptions.filter(opt => opt.value === props.initOption.value)[0] || {};
    } else {
      initOption = newOptions[0];
    }
    this.state = {
      isActive: false,
      options: newOptions,
      selected: initOption,
      focused: initOption,
    };
    this.optionRefs = [];
    this.keysSoFar = '';
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  checkOptId = (option) => {
    // make sure the option contains id to keep accessibility working
    if (!(option.id >= 0)) {
      option = this.state.options.filter(opt => opt.value === option.value)[0];
    }
    return option;
  }

  scrollToFocus = () => {
    const element = this.optionRefs && this.optionRefs[this.state.focused.id];
    if (this.optionBox && element) {
      if (this.optionBox.scrollHeight > this.optionBox.clientHeight) {
        const scrollBottom =
                this.optionBox.clientHeight + this.optionBox.scrollTop;
        const elementBottom = element.offsetTop + element.offsetHeight;
        if (elementBottom > scrollBottom) {
          this.optionBox.scrollTop =
                    elementBottom - this.optionBox.clientHeight;
        } else if (element.offsetTop < this.optionBox.scrollTop) {
          this.optionBox.scrollTop = element.offsetTop;
        }
      }
    }
  };

  moveUpItems = () => {
    const prevItemIndex = this.state.focused.id === undefined ? 0 : this.state.focused.id - 1;
    if (prevItemIndex >= 0) {
      this.handleFocusChange(this.state.options[prevItemIndex]);
    }
  };

  moveDownItems = () => {
    const nextItemIndex = this.state.focused.id === undefined ? 0 : this.state.focused.id + 1;
    if (nextItemIndex < this.state.options.length) {
      this.handleFocusChange(this.state.options[nextItemIndex]);
    }
  };

  focusFirstItem = () => {
    this.handleFocusChange(this.state.options[0]);
  };

  focusLastItem = () => {
    this.handleFocusChange(
      this.state.options[this.state.options.length - 1],
    );
  };

  toggleList = (isActive, callback) => {
    if (!isActive) {
      this.setState({ focused: this.state.selected });
    }
    this.setState({ isActive }, () => {
      if (this.state.isActive) {
        this.optionBox.focus();
      }
      if (callback) {
        callback();
      }
    });
  };

  handleFocusChange = (option) => {
    option = this.checkOptId(option);
    this.setState({ focused: option }, () => {
      this.scrollToFocus();
    });
  };

  handleSelectChange = (option) => {
    if (option.disabled) return;
    if (this.state.selected.value !== option.value) {
      option = this.checkOptId(option);
      this.setState({
        selected: option,
        focused: option,
      }, () => {
        this.toggleList(false);
        this.props.onChange && this.props.onChange(option);
      });
    } else {
      this.toggleList(false);
    }
  };

  handleOptionOnFocus = option => (event) => {
    option = this.checkOptId(option);
    this.setState({ focused: option });
  };

  handleOptionOnBlur = (event) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      this.setState({
        isActive: false,
        focused: this.state.selected,
      });
    }
  };

  handleButtonOnClick = (event) => {
    event.stopPropagation();
    this.toggleList(!this.state.isActive);
  };

  handleButtonOnKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.toggleList(true);
    }
  };

  clearKeysSoFarAfterDelay = () => {
    if (this.keyClear) {
      clearTimeout(this.keyClear);
      this.keyClear = null;
    }
    this.keyClear = setTimeout(() => {
      this.keysSoFar = '';
      this.keyClear = null;
    }, 500);
  };

  findMatchInRange = (list, startIndex, endIndex) => {
    // Find the first item starting with the keysSoFar substring, searching in
    // the specified range of items
    for (let n = startIndex; n < endIndex; n += 1) {
      const label = list[n].innerText;
      if (label && label.toUpperCase().indexOf(this.keysSoFar.toUpperCase()) === 0) {
        return list[n];
      }
    }
    return null;
  };

  findItemToFocus = (key) => {
    const itemList = this.optionRefs;
    let resultOption = {};
    let nextMatch;

    if (!this.keysSoFar) {
      for (let i = 0; i < itemList.length; i += 1) {
        if (Number(itemList[i].getAttribute('data-ras-id')) === this.state.focused.id) {
          this.searchIndex = i;
        }
      }
    }

    this.keysSoFar += key;
    this.clearKeysSoFarAfterDelay();

    if (this.state.focused.id === undefined) {
      nextMatch = this.findMatchInRange(
        itemList,
        0,
        itemList.length,
      );
    } else {
      nextMatch = this.findMatchInRange(
        itemList,
        this.searchIndex + 1,
        itemList.length,
      );
      if (!nextMatch) {
        nextMatch = this.findMatchInRange(
          itemList,
          0,
          this.searchIndex,
        );
      }
    }
    if (nextMatch) {
      resultOption = this.state.options.filter(opt => opt.id === Number(nextMatch.getAttribute('data-ras-id')))[0];
    }
    return resultOption;
  };

  handleListOnKeyDown = (event) => {
    let itemToFocus;
    if (this.state.isActive) {
      if (event.key !== 'Tab') {
        event.preventDefault();
      }
      switch (event.key) {
        case 'PageUp':
        case 'ArrowUp':
          this.moveUpItems();
          break;
        case 'PageDown':
        case 'ArrowDown':
          this.moveDownItems();
          break;
        case 'Escape':
          this.toggleList(false);
          this.selectBox.focus();
          break;
        case 'Home':
          this.focusFirstItem();
          break;
        case 'End':
          this.focusLastItem();
          break;
        case 'Backspace':
        case 'Delete':
        case 'Enter':
          if (this.state.focused.disabled) return;
          this.handleSelectChange(this.state.focused);
          this.selectBox.focus();
          break;
        case 'Tab':
          this.handleSelectChange(this.state.focused);
          break;
        default:
          itemToFocus = this.findItemToFocus(event.key);
          if (itemToFocus.id >= 0) {
            this.handleFocusChange(itemToFocus);
          }
          break;
      }
    }
    if (this.props.onListKeyDown) {
      this.props.onListKeyDown(event, this.state.focused);
    }
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isActive: false });
    }
  };

  renderOption = (option) => {
    const handleOnClick = (e) => {
      e.preventDefault();
      this.handleSelectChange(option);
    };
    return (
      <li
        id={`${this.props.name}-option-${option.id}`}
        data-ras-id={option.id}
        key={option.id}
        role="option"
        ref={(input) => { this.optionRefs[option.id] = input; }}
        disabled={option.disabled ? 'disabled' : null}
        aria-disabled={option.disabled ? true : null}
        aria-selected={this.state.selected.value === option.value}
        className={`ras-li ${this.state.focused.value === option.value ? 'ras-focused' : ''} ${this.state.selected.value === option.value ? 'ras-selected' : ''}`}
        onFocus={this.handleOptionOnFocus(option)}
        onBlur={this.handleOptionOnBlur}
        onClick={handleOnClick}
        onMouseOver={this.handleOptionOnFocus(option)}
        {...this.props.optionAttr(option)}
      >
        {this.props.customOption ? this.props.customOption(option) : option.label}
      </li>
    );
  };

  render() {
    const { label, hideLabel, name, placeholder, className, customButton } = this.props;
    const { isActive, focused, selected } = this.state;
    const idLabel = `${name}-label`;
    const buttonContent = customButton ? customButton(this) : selected.label;
    return (
      <div className={`react-accessible-select ${className} ${isActive ? 'ras-active' : ''}`}>
        <label id={idLabel} htmlFor={`${name}-button`} className={`ras-label ${hideLabel ? 'ras-label-hide' : ''}`} >{label}</label>
        <div
          id={`${name}-wrapper`}
          className="ras-main"
          ref={wrapperRef => (this.wrapperRef = wrapperRef)}
        >
          <button
            id={`${name}-button`}
            aria-haspopup="listbox"
            aria-labelledby={`${idLabel} ${name}-button`}
            aria-expanded={isActive}
            ref={selectBox => (this.selectBox = selectBox)}
            onKeyDown={this.handleButtonOnKeyDown}
            onClick={this.handleButtonOnClick}
            className={`ras-button ${selected.value ? 'ras-value' : 'ras-placeholder'}`}
            {...this.props.buttonAttr(this)}
          >
            {selected.value ? buttonContent : placeholder}
            <span className="ras-arrow" />
          </button>
          <ul
            className="ras-ul"
            id={`${name}-list`}
            role="listbox"
            tabIndex="0"
            aria-labelledby={idLabel}
            aria-activedescendant={focused.id === undefined ? null : `${name}-option-${focused.id}`}
            aria-hidden={!isActive}
            ref={optionBox => (this.optionBox = optionBox)}
            onKeyDown={this.handleListOnKeyDown}
          >
            {this.state.options.map(option =>
              this.renderOption(option),
            )}
          </ul>
        </div>
      </div>
    );
  }
}

ReactAccessibleSelect.defaultProps = {
  label: null,
  hideLabel: false,
  placeholder: null,
  options: [],
  name: 'ras',
  className: '',
  initOption: {},
  initEmpty: false,
  customOption: null,
  customButton: null,
  optionAttr: () => {},
  buttonAttr: () => {},
  onChange: null,
  onListKeyDown: null,
};

ReactAccessibleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onListKeyDown: PropTypes.func,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.node,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  initOption: PropTypes.object,
  initEmpty: PropTypes.bool,
  customOption: PropTypes.func,
  customButton: PropTypes.func,
  optionAttr: PropTypes.func,
  buttonAttr: PropTypes.func,
};

export default ReactAccessibleSelect;
