 import React from "react";
 import { storiesOf } from "@storybook/react";

 import Text from "../components/Text/Text";

 const stories = storiesOf('App Test', module);

 stories.add('App', () => {
  return (
  //@ts-ignore 
  <Text
    element="H" 
    gradient={{to: 'right', colors: ['red', 'blue']}} 
    content="This is a <<<Basic home>>> test and <<<scripting>>> language" 
    />

  )
 });