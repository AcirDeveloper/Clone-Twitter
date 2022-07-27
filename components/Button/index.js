function Button({ children, onClick }) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>{`
                button {
                    background: var(--color-dark);
                    border: 0;
                    color: var(--color-white);
                    cursor: pointer;
                    border-radius: 9999px;
                    font-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity 0.3 ease;
                    display: flex;
                    align-items: center;
                }

                button > :global(svg) {
                    margin-right: 8px;
                }
                button:hover {
                    opacity: 0.8;
                }
            `}</style>
        </>
    );
}

export default Button;
