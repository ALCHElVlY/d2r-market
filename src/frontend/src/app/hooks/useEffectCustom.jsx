// Built-in imports
import { useEffect, useRef } from 'react';

/**
 * Custom React **useEffect** hook to correct the latest bug introduced in React 18
 * that causes components to double mount.
 * @param {*} effect
 */
export const useEffectCustom = (effect) => {
    const destroyFunc = useRef();
    const calledOnce = useRef(false);
    const renderAfterCalled = useRef(false);

    if (calledOnce.current) {
        renderAfterCalled.current = true;
    }

    useEffect(() => {
        if (calledOnce.current) {
            return;
        }

        calledOnce.current = true;
        destroyFunc.current = effect();

        return () => {
            if (!renderAfterCalled.current) {
                return;
            }

            if (destroyFunc.current) {
                destroyFunc.current();
            }
        };
    }, [effect]);
};