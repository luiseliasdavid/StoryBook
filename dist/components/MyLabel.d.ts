/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     *this the value for this label
     */
    label: string;
    /**
     *font size for your laben
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * capitalize
     */
    allCaps?: boolean;
    /**
     * color text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * font color
     */
    fontColor?: string;
}
/**
 * Label UI component for user interaction
 */
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
