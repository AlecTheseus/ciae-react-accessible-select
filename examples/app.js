import React from 'react';
import ReactDOM from 'react-dom';
import ReactAccessibleSelect from '../src/index';
import '../src/scss/_ReactSelectAccessible.scss';


// == Basic Example =========================================================================================================================

const examples = [
    { value: '', label: '--select--' },
    { value: 'new-york', label: 'New York' },
    { value: 'hong-kong', label: 'Hong Kong' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'tokyo', label: 'Tokyo', disabled: true },
];

class Basic extends React.Component {
    handleOnChange (opt) {
        console.log(opt.value);
    }
    render() {
        return (
            <div style={{ width: '300px' }}>
                <ReactAccessibleSelect
                    name='destination-selector' // isRequired
                    label='Please select your destination' // isRequired
                    placeholder="select..."
                    options={examples} // isRequired
                    onChange={opt => this.handleOnChange(opt)}
                />
            </div>
        );
    }
}

const basicElement = document.getElementById('basic');
ReactDOM.render(<Basic />, basicElement);

// == Language Link Example =========================================================================================================================


const links = [
    {
      label: 'English',
      value: '#English',
      lang: 'en',
    },
    {
        label: 'Français',
        value: '#Français',
        lang: 'fr',
    },
    {
      label: '简体中文',
      value: '#Chinese',
      lang: 'zh-cn',
      langDes: 'eng-zh',
    },
    {
      label: '日本語',
      value: '#Japanese',
      lang: 'ja',
      langDes: 'eng-ja',
    },
];

class Link extends React.Component {
    handleOnChange (opt) {
        window.location.href = opt.value;
    }
    render() {
        return (
            <div style={{ width: '300px' }}>
                <ReactAccessibleSelect
                    name='language-selector' // isRequired
                    label='Please select your destination' // isRequired
                    hideLabel // hide label using css
                    placeholder="select..."
                    options={links} // isRequired
                    initOption={{ value: '#Français' }} // default selected option - or links[1]
                    onChange={opt => this.handleOnChange(opt)}
                    optionAttr={opt => ({
                        'aria-describedby': `${opt.langDes || ''} language-selector-select-des`,
                        lang: opt.lang,
                    })}
                />
                <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
                    {/* To indicate that is a LINK */}
                    <label id="language-selector-select-des">link</label>
                    {/* For unsupported languages */}
                    <label lang="en" id="eng-ja">Japanese</label>
                    <label lang="en" id="eng-zh">Chinese</label>
                </div>
            </div>
        );
    }
}

const linkElement = document.getElementById('link');
ReactDOM.render(<Link />, linkElement);