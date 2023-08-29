import { FC } from "react";
import { View } from "react-native";
import { PanGestureHandler, PanGestureHandlerGestureEvent  } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface IDragAndDrop {
    children: JSX.Element | JSX.Element[]
}

const DragAndDrop: FC<IDragAndDrop> = ({children}) => {

    const x = useSharedValue(0);
    const y = useSharedValue(0);

    const drag = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart: (event) => {
            console.log('onStart', event.translationX, event.translationY);
        },
        onActive: (event) => {
            console.log('onActive', event.translationX, event.translationY);
            x.value = event.translationX;
            y.value = event.translationY;
        },
        onEnd: (event) => {
            console.log('onEnd', event.translationX, event.translationY);
        },
    })

    return (
        <PanGestureHandler onGestureEvent={drag}>
            <Animated.View
                style={[
                    useAnimatedStyle(() => {
                        return {
                            transform: [
                                { translateX:  x.value},
                                { translateY:  y.value},
                            ]
                        }
                    })
                ]}
            >
                {children}
            </Animated.View>
        </PanGestureHandler>
    );
};

export default DragAndDrop;
