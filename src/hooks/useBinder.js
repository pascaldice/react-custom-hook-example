import { useCallback } from "react";
import { useState } from "react";

const useBinder = (initialValues = {}) => {
    const [state, setState] = useState(initialValues),
        setBinder = useCallback(
            (name, value) => {
                setState({ ...state, [name]: value });
            },
            [state]
        ),
        onChangeRegistring = useCallback(
            ({ target }) => {
                setBinder(target.name, target.value);
            },
            [setBinder]
        );

    return {
        bindState: (name, additional = {}) => {
            const props = {
                name: name,
                value: state[name] || "",
                onChange: onChangeRegistring,
                ...additional,
                // ...(twoway
                //     ? {
                //           onChange: onChangeRegistring,
                //       }
                //     : { readOnly: true }),
            };
            return props;
        },
        bindValue: (name, additional = {}) => {
            const props = {
                name: name,
                value: state[name] || "",
                readOnly: true,
                ...additional,
            };
            return props;
        },
        state,
        setBinder: setBinder,
    };
};
export default useBinder;
