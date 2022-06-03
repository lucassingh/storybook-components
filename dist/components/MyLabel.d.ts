/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * Is this the principal props to this component
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * If want to be capitalized letters
     */
    allCaps?: boolean;
    /**
     * Choose color of your label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Choose color font
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
