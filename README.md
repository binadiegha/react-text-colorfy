<img src="https://user-images.githubusercontent.com/19647826/210170328-f007d18b-3b04-4339-b74b-3e115ff9fb80.png" width="500" height="auto" />

# React-text-colorfy

## 🔍 Overview
It has come to our notice that adding color or gradient to seclected text to string of sentences during development is a process most developers would like to shorten. it requires a lot of css code. especially when the colors in different areas of your app is different. 
this is why I came up with ***react-text-colorfy*** a simple component based solution that allows devs create headings and other text components / tags.

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
  color="rgb(0,255,0)"
  ...
/>
```
### Props usage
This section outlines the usage of the accepted props

#### color
The `color` prop accepts any CSS color value or name passed as a `string`: HEX, rgb, color name, etc are all accepted. see the <a href="https://www.w3schools.com/css/css3_colors.asp" target="_alt" >CSS color reference </a>  for more insight on css colors.

*Code example*
```javascript
  <Text 
    color="rgb(0,255,0)"
    ...
  />
```

#### gradient
The gradient `prop` accepts an `object` with two `required` properties. `to` and `colors`.
The `to` key takes any CSS gradient Direction or angle property. See the <a href="https://www.w3schools.com/css/css3_gradients.asp" target="_blank"> CSS gradient reference </a> for more insight.
The second required property with the `key` of `colors` takes in an `array` of gradient colors as it's value.

*Code example*
```javascript
const myGradient = {
  to: 'bottom left',
  colors: ['yellow', 'rgb(0,255,0)', '#45af5b']
 }
  <Text 
    gradient={myGradient}
    ...
  />
```
