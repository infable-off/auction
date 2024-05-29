import {Component} from "react";

class ErrorBoundary extends Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;

        if (error) {
            return (

                <div>

                    <p style='color: red'>ERROR ERROR</p>
                    <p>{error.message}</p>
                </div>
            );
        // if (error) {
        //     return 'ОШИБКА';
        // }
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
