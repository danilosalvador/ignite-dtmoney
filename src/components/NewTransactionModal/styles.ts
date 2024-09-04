import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0; /* top:0; left:0; right:0; bottom:0 */

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.75);

    animation: overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes overlayShow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    padding: 2.5rem 3rem;
    border-radius: 6px;

    background-color: ${props => props.theme["gray-800"]};

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border: 0;
            border-radius: 6px;

            padding: 1rem;

            background-color: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["red-300"]};

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            cursor: pointer;

            height: 58px;

            padding: 0 1.25rem;
            margin-top: 1.5rem;

            border: 0;
            border-radius: 6px;

            font-weight: bold;

            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};

            transition: background-color 0.2s;

            &:hover {
                background-color: ${props => props.theme["green-700"]};
            }
        }
    }

    animation: contentShow 0.2s cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes contentShow {
        from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    cursor: pointer;

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: 0;
    background-color: transparent;
    color: ${props => props.theme["gray-500"]};

    line-height: 0;
`
