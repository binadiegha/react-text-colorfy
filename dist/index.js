'use strict';

var React = require('react');
var styled = require('styled-components');

const Heading = styled.h1 `
  font-size: ${props => { var _a; return (_a = props.size) !== null && _a !== void 0 ? _a : '64px'; }};
  font-weight: 600;
  line-height: 86px;
  letting: -3px;
  color: ${props => props.baseColor};
  span{
    color: ${props => props.accentColor};
    ${props => props.gradient ? `background: linear-gradient(to ${props.gradient.to}, ${props.gradient.colors.map(color => { return color; })});` : ''}
    ${props => props.gradient ? '-webkit-background-clip: text;' : ''}
    ${props => props.gradient ? '-webkit-text-fill-color: transparent;' : ''}
  }
`;
const Subheading = styled.h2 `
  font-size:${props => { var _a; return (_a = props.size) !== null && _a !== void 0 ? _a : '46px'; }};
  font-weight: 600;
  line-height: 56px;
  letting: -3px;
  color: ${props => props.baseColor};
  span{
    color: ${props => props.accentColor};
    ${props => props.gradient ? `background: linear-gradient(to ${props.gradient.to}, ${props.gradient.colors.map(color => { return color; })});` : ''}
    ${props => props.gradient ? '-webkit-background-clip: text;' : ''}
    ${props => props.gradient ? '-webkit-text-fill-color: transparent;' : ''}
  }
`;
const Paragraph = styled.div `
  font-size: ${props => { var _a; return (_a = props.size) !== null && _a !== void 0 ? _a : '21px'; }};
  font-weight: 400;
  line-height: 31px;
  color: ${props => props.baseColor};
  span{
    color: ${props => props.accentColor};
    ${props => props.gradient ? `background: linear-gradient(to ${props.gradient.to}, ${props.gradient.colors.map(color => { return color; })});` : ''}
    ${props => props.gradient ? '-webkit-background-clip: text;' : ''}
    ${props => props.gradient ? '-webkit-text-fill-color: transparent;' : ''}
  }
`;

const Text = (props) => {
    const types = ['heading', 'H', 'S', 'P', 'subHeading', 'paragraph'];
    const { element, content, size, color, gradient } = props;
    if (gradient !== undefined) {
        if ((typeof gradient !== "object") || (!gradient.to && !gradient.colors))
            throw new Error('Expected Object with "to" property with type of "String" and "colors" with type of array');
    }
    if (!types.includes(element))
        throw new Error(`type name of ${element} is invalid, please use one of the following : [${types.map(item => item)}]`);
    if (gradient && color)
        throw new Error(' Can not use gradient and color in the same componet, please use just one or split text into multiple components to use different styles');
    const processedText = content ? content.replace(/<<</ig, '<span>').replace(/>>>/ig, '</span>') : undefined;
    // convert string content to html
    const contentConverter = () => {
        if (processedText)
            return { __html: processedText };
    };
    // end of conversion
    const HeadingMain = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(Heading, { accentColor: color !== null && color !== void 0 ? color : undefined, gradient: gradient !== null && gradient !== void 0 ? gradient : undefined, size: size !== null && size !== void 0 ? size : undefined, dangerouslySetInnerHTML: contentConverter() })));
    };
    const SubHeadingMain = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(Subheading, { accentColor: color !== null && color !== void 0 ? color : undefined, gradient: gradient !== null && gradient !== void 0 ? gradient : undefined, size: size !== null && size !== void 0 ? size : undefined, dangerouslySetInnerHTML: contentConverter() })));
    };
    const ParagraphMain = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(Paragraph, { accentColor: color !== null && color !== void 0 ? color : undefined, gradient: gradient !== null && gradient !== void 0 ? gradient : undefined, size: size !== null && size !== void 0 ? size : undefined, dangerouslySetInnerHTML: contentConverter() })));
    };
    // types object
    const myTypes = {
        heading: React.createElement(HeadingMain, null),
        paragraph: React.createElement(ParagraphMain, null),
        subHeading: React.createElement(SubHeadingMain, null),
        H: React.createElement(HeadingMain, null),
        P: React.createElement(ParagraphMain, null),
        S: React.createElement(SubHeadingMain, null)
    };
    for (const [key, value] of Object.entries(myTypes)) {
        if (element === key)
            return value;
    }
    if (!element)
        return myTypes.paragraph;
};

// export * from './components/Text'

module.exports = Text;
