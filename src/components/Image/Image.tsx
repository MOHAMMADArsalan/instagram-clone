import React from "react"
import { Image as RNImage } from 'react-native';

import { ImagePropsType } from './types';

export const Image = ({ source }: ImagePropsType) => {
    return (
        <RNImage source={source}/>
    )
}