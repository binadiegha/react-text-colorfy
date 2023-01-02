<img src="https://user-images.githubusercontent.com/19647826/210170328-f007d18b-3b04-4339-b74b-3e115ff9fb80.png" width="500" height="auto" />

# React-text-colorfy

A simple and easy to use react component that helps you add gradient or color to text in your react project.

## 🔍 Overview
We have observed that most developers would like to speed up the process of applying color or a gradient to specific text or a string of sentences during development. There is a lot of CSS code needed. especially if your app's colors vary between distinct locations.
This is why I created ***react-text-colorfy***, a straightforward component-based solution that enables developers to add colors or gradients to headings and other text components / tags.

## 🛠️ Installation
Adding ***react-text-colorfy*** to your project requires just a few lines of code. tho, it is not worthy that this library have a few dev dependencies: react and styled-components.

to use this package, ensure you have npm installed on your computer. if you dont already have Nodejs installed, head to <a src="https:/https://nodejs.org/en//" target="_blank"> https://nodejs.org/en/ </a> and download Nodejs to your computer.

After setup, Run:

```
npm install react-text-colorfy
```
...and that's it. you are ready to use ***react-text-colorfy*** in your project.

## 👨🏽‍💻 Usage
To use ***react-text-colorfy's*** `text` component in your react project, import the package:

```javascript
import Text from 'react-text-colorfy'
```
Now you can use the ***react-text-colorfy*** `Text` component in your application.

*Code example*
```javascript
<Text 
  element="heading"
  color="rgb(64, 227, 212)"
  ...
/>
```
##### *Result*
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210222702-0b70b42c-949f-438d-b9fa-59ec7b668fd3.png">



## 📚 Documentation
This section outlines the usage of the accepted props


### content
The `content` prop accept the text to be passed into the component. it accepts a string with the text intended to be colored enclosed in tripple angle bracket ( `<<<` )

#### syntax
the major syntax to note is the `<<<` and `>>>` syntax. text enclosed in the triple-angle-brackets are the target text that change in color.

*Code example*
```javascript
<Text 
  content='this is <<< Colored >>> and this is <<< Colored too >>>. Hurray!'
  ...
/>
```

### color
The `color` prop accepts any CSS color value or name passed as a `string`: HEX, rgb, color name, etc are all accepted. see the <a href="https://www.w3schools.com/css/css3_colors.asp" target="_blank"> CSS color reference </a>  for more insight on css colors. defaults to the project's primary color.

*Code example*
```javascript
  <Text 
    color="orange"
    ...
  />
```

##### *Result*
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210222834-d41a5f04-ac91-40de-8e18-0b16aa3cfa4d.png">


### gradient
The gradient `prop` accepts an `object` with two `required` properties. `to` and `colors`.
The `to` key takes any CSS gradient Direction or angle property. See the <a href="https://www.w3schools.com/css/css3_gradients.asp" target="_blank"> CSS gradient reference </a> for more insight.
The second required property with the `key` of `colors` takes in an `array` of gradient colors as it's value.

*Code example*
```javascript
const myGradient = {
  to: 'bottom left',
  colors: ['rgb(64, 227, 212)', 'red', '#45af5b']
 }
  <Text 
    gradient={myGradient}
    ...
  />
```

##### *Result*
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210223038-894d0adc-0aed-4810-841f-97818006f0b3.png">


### size
The size `prop` takes in any CSS font-size property. see the <a href="https://www.w3schools.com/cssref/pr_font_font-size.php" target="_blank" >CSS font-size reference</a> here. it defaults to the default font size.

*Code example*
```javascript
  <Text 
    size="20px"
  />
```
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210223160-27f343b5-93c9-44cf-b18e-7c4a231cdd87.png">

  
### element
The element `prop` takes a `string`. This string determines the tag that holds the string. It can be a heading, sub-heading or a paragraph tag.

**Prop values and meaning**
| Prop name |   HTML tag  |   
|:---       |:---         |
|heading &#124; H | `<h1>` |
|subHeading &#124; S | `<h2>` |
|paragraph &#124; P | `<p>` |
  
*HeadingCode example*
```javascript
  <Text 
    element="heading"
  />
```
##### *Heading result*
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210223288-794fdafa-478d-41b8-82d1-53858521dbb3.png">

*Subheading Code example*
```javascript
  <Text 
    element="subHeading"
  />
```
##### *Subheading result*
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210223430-caf88047-2b23-43ef-a018-127f1451ec90.png">

*Paragraph Code example*
```javascript
  <Text 
    element="paragraph"
  />
```
##### *Paragraph result*
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/19647826/210223541-a2bda68b-809f-4eb8-b724-1fc4b1bcdaa3.png">

  

## 📥 Contributing 
When making a contribution to this repository, kindly open an issue to first explain the change you want to make. This could be a bug report or a feature request. You are welcome to work with a maintainer to create a pull request after they have prioritized your problem. You are welcome to concurrently open an issue and pull request if your modification is straightforward or small.

Please be aware that we have a code of conduct, and that you must abide by it at all times when dealing with the project.

### Running react-text-colorfy locally
the project have already be setup to run locally, We use Storybook to run locally.
After pulling the project, Run:
  ```
  npm install
  ```
  
  Then, Run
  
  ```
  npm run storybook
  ```
  
  
  ## 📝 Licence
  MIT © Jones B gabriel  ·  GitHub <a href="https://github.com/binadiegha" >@Binadiegha / Jones B Gabriel</a>
