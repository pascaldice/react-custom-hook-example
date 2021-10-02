import { useState } from "react";

const useBinder = (initialValues = {}) => {
    const [state, setState] = useState(initialValues),
        // setBinder = useCallback(
        //     (name, value) => {
        //         setState({ ...state, [name]: value });
        //     },
        //     [state]
        // ),
        // onChangeRegistring = useCallback(
        //     ({ target }) => {
        //         setBinder(target.name, target.value);
        //     },
        //     [setBinder]
        // );
        // setBinder = (name, value) => {
        //     setState({ ...state, [name]: value });
        // },
        onChangeRegistring = ({ target }) => {
            setState({ ...state, [target.name]: target.value });
            // setBinder(target.name, target.value);
        };

    return {
        bindState: (name, additional = {}) => {
            const props = {
                name: name,
                value: state[name] || "",
                onChange: onChangeRegistring,
                ...additional,
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
        setBinder: (added = {}) => {
            setState({ ...state, ...added });
        },
    };
};
export default useBinder;
