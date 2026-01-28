import { useEffect } from 'react';

const TestPage = () => {
    useEffect(() => {
        console.log('✅ TestPage mounted successfully!');
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0a0a0a',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            fontFamily: 'system-ui'
        }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#00f7ff' }}>
                ✅ React está funcionando!
            </h1>
            <p style={{ fontSize: '20px', marginBottom: '40px', color: '#999' }}>
                Se você está vendo esta página, o React está renderizando corretamente.
            </p>
            <div style={{
                backgroundColor: '#1a1a1a',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #333',
                maxWidth: '600px'
            }}>
                <h2 style={{ color: '#bd00ff', marginBottom: '15px' }}>Status do Sistema:</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✅ React renderizando</li>
                    <li style={{ marginBottom: '10px' }}>✅ CSS carregado</li>
                    <li style={{ marginBottom: '10px' }}>✅ JavaScript executando</li>
                    <li style={{ marginBottom: '10px' }}>✅ Vite dev server ativo</li>
                </ul>
            </div>
            <p style={{ marginTop: '40px', color: '#666', fontSize: '14px' }}>
                Abra o Console (F12) para ver os logs de debug
            </p>
        </div>
    );
};

export default TestPage;
