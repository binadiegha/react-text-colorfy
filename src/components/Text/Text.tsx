import React, { FC } from 'react';
import { Heading, Subheading, Paragraph } from './text.style';
import { Gredient } from './interfaces';


type element = "heading" | "H" | "S" | "P" | "subHeading" | "paragraph";

const Text = (props : { element: element; content: string; size?: string; color?: string; gradient?: Gredient;  } ) => {
  const types = ['heading', 'H', 'S', 'P', 'subHeading', 'paragraph'];
  const {element, content, size, color, gradient} = props;
  if((typeof gradient !== "object") || (!gradient.to && !gradient.colors)) throw new Error('Expected Object with "to" property with type of "String" and "colors" with type of array')
  if(!types.includes(element)) throw new Error(`type name of ${element} is invalid, please use one of the following : [${types.map(item => item)}]` )
  if( gradient && color) throw new Error(' Can not use gradient and color in the same componet, please use just one or split text into multiple components to use different styles')

  const processedText = content ? content.replace(/<<</ig, '<span>').replace(/>>>/ig, '</span>') : undefined
  // convert string content to html
  const contentConverter = () => {
    if(processedText) return{__html: processedText}
  }
  // end of conversion

  const HeadingMain = ()  => {
    
    return(
      <>
        <Heading accentColor={color ?? undefined} gradient={ gradient ?? undefined } size={size ?? undefined} dangerouslySetInnerHTML={contentConverter()}>
        </Heading>
     </>
    )
  }

  const SubHeadingMain = () => {
    return(
      <>
        <Subheading accentColor={color ?? undefined} gradient={ gradient ?? undefined }  size={size ?? undefined} dangerouslySetInnerHTML={contentConverter()}>
        </Subheading>
     </>
    )
  }

  const ParagraphMain = () => {
    return(
      <>
        <Paragraph  accentColor={color ?? undefined} gradient={ gradient ?? undefined }  size={size ?? undefined} dangerouslySetInnerHTML={contentConverter()}>
        </Paragraph>
     </>
    )
   
  }

  // types object
  const myTypes = {
    heading : <HeadingMain />,
    paragraph: <ParagraphMain />,
    subHeading: <SubHeadingMain />,
    H : <HeadingMain />,
    P: <ParagraphMain />,
    S: <SubHeadingMain />
  }


  for (const [key, value] of Object.entries(myTypes)){
      if(element === key) return value ;
  }
  if(!element) return myTypes.paragraph
}

export default Text