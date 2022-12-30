import styled from "styled-components";
import { Gredient } from './interfaces';

type Props = {
  accentColor?: string;
  size?: string;
  baseColor?: string;
  gradient?: Gredient;
}

export const Heading = styled.h1<Props>`
  font-size: ${ props => props.size ?? '64px' };
  font-weight: 600;
  line-height: 86px;
  letting: -3px;
  color: ${ props => props.baseColor };
  span{
    color: ${ props => props.accentColor};
    ${ props => props.gradient ? `background: linear-gradient(to ${props.gradient.to}, ${props.gradient.colors.map( color => {return color})});` : ''}
    ${ props => props.gradient ? '-webkit-background-clip: text;' : ''}
    ${ props => props.gradient ? '-webkit-text-fill-color: transparent;' : ''}
  }
`;

export const Subheading = styled.h2<Props>`
  font-size:${ props => props.size ?? '46px' };
  font-weight: 600;
  line-height: 56px;
  letting: -3px;
  color: ${ props => props.baseColor };
  span{
    color: ${ props => props.accentColor};
    ${ props => props.gradient ? `background: linear-gradient(to ${props.gradient.to}, ${props.gradient.colors.map( color => {return color})});` : ''}
    ${ props => props.gradient ? '-webkit-background-clip: text;' : ''}
    ${ props => props.gradient ? '-webkit-text-fill-color: transparent;' : ''}
  }
`;

export const Paragraph = styled.div<Props>`
  font-size: ${ props => props.size ?? '21px' };
  font-weight: 400;
  line-height: 31px;
  color: ${ props => props.baseColor };
  span{
    color: ${ props => props.accentColor};
    ${ props => props.gradient ? `background: linear-gradient(to ${props.gradient.to}, ${props.gradient.colors.map( color => {return color})});` : ''}
    ${ props => props.gradient ? '-webkit-background-clip: text;' : ''}
    ${ props => props.gradient ? '-webkit-text-fill-color: transparent;' : ''}
  }
`;