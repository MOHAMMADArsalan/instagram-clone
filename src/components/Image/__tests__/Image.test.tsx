import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Image } from '../';
import { imageUrl } from '../../../mocks/data';


describe('Image', () => {
    let renderImage: any;
    beforeEach(() => {
        renderImage = renderer.create(<Image source={{ uri: imageUrl }} />);
    })

    it('should match the snapshots', () => {
        expect(renderImage.toJSON()).toMatchSnapshot();
    })

    it('should has image source', () => {
        expect(renderImage.root.props.source).toEqual({ uri: imageUrl })
    })
})