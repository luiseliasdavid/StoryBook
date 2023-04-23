import './MyLabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
/**
 *this the value for this label
 */
 label: string;
 /** 
  *font size for your laben 
  */
 size: 'normal'|'h1'|'h2'|'h3' ;
 /**
  * capitalize 
  */
 allCaps?: boolean;
 /**
  * color text 
  */
 color?: 'primary'|'secondary'|'tertiary';
 /**
  * font color
  */
 fontColor?:string
} 
/**
 * Label UI component for user interaction
 */


export const MyLabel = ({
    label  ='no label',
    size   ='normal',
    allCaps=false,
    color  ='primary',
    fontColor
}:MyLabelProps) => {
    const classNames = [color, size]
  return (
    <span className={`label ${size} text-${color}`}
    style={{color:fontColor}}
    >
        {allCaps? label.toLocaleUpperCase() : label}
    </span>
  )
}
