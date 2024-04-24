import { useEffect, useRef } from 'react';

export function useDidMountEffect(callback = () => { }, dependencies = []) {

    const didMount = useRef(0);

    useEffect(() => {
        if (didMount.current) {
            callback()
            console.log("Not first effect !")
        } else {
            didMount.current = true;
            console.log("First effect !")
        }
    }, dependencies);
}