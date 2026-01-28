import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '40px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    minHeight: '100vh',
                    fontFamily: 'monospace'
                }}>
                    <h1 style={{ color: '#ff0055' }}>⚠️ Erro Detectado</h1>
                    <h2>Algo deu errado no portfolio</h2>
                    <details style={{
                        whiteSpace: 'pre-wrap',
                        backgroundColor: '#1a1a1a',
                        padding: '20px',
                        borderRadius: '8px',
                        marginTop: '20px',
                        border: '1px solid #333'
                    }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '10px', color: '#00f7ff' }}>
                            Ver detalhes do erro
                        </summary>
                        <p style={{ color: '#ff6b6b' }}>
                            <strong>Erro:</strong> {this.state.error && this.state.error.toString()}
                        </p>
                        <p style={{ color: '#ffd93d' }}>
                            <strong>Stack Trace:</strong>
                        </p>
                        <pre style={{ fontSize: '12px', overflow: 'auto' }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '20px',
                            padding: '12px 24px',
                            backgroundColor: '#00f7ff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        Recarregar Página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
