// @interfaces
import { ThumbsI } from '~/interfaces'

export const ThumbsDown: React.FC<ThumbsI> = ({
    background = false,
    onClickHandler,
    selected,
}): JSX.Element => {
    return (
        <div
            className={`thumbs__container ${
                background ? 'yellow-bg' : 'transparent-bg'
            } ${selected ? 'thumbs__active' : ''}`}
            onClick={() => onClickHandler('thumbsDown')}
        >
            <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <title>0D3137C2-9DDC-4124-9A31-801057B1DD1F</title>
                <desc>Created with sketchtool.</desc>
                <g
                    id="Mobile"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g
                        id="Mobile---Home"
                        transform="translate(-157.000000, -334.000000)"
                        fill="#FFFFFF"
                    >
                        <g id="Hero">
                            <g
                                id="Main-Panel"
                                transform="translate(12.000000, 66.000000)"
                            >
                                <g
                                    id="Thumbs-Down"
                                    transform="translate(102.000000, 260.000000)"
                                >
                                    <g
                                        id="thumbs-up"
                                        transform="translate(51.000000, 16.000000) rotate(180.000000) translate(-51.000000, -16.000000) translate(43.000000, 8.000000)"
                                    >
                                        <path
                                            d="M3.39556013,7.10739144 C5.33333333,4.40864038 6.02085655,3.63942071 5.90611697,2.07721333 C5.79137739,0.51500595 6.11959658,0.0854529391 6.90037428,0.00853097137 C7.68115197,-0.0683909963 9.14716722,0.334368969 9.4045313,2.89137618 C9.51561384,3.99766965 8.6804377,6.17568491 8.6804377,6.17568491 L14.524385,6.17870993 C15.3517899,6.17870993 16,6.51362299 16,7.58102333 C16,8.58100891 14.8311191,8.88178245 14.8311191,8.88178245 C15.294609,9.07913941 15.5888675,9.51884816 15.5789835,9.99931171 C15.5817853,10.6772178 15.0051157,11.2300919 14.2880489,11.2369775 C14.7785556,11.4233202 15.0587481,11.9138367 14.9545442,12.4037714 C14.8656004,12.9909767 14.3848923,13.4562488 13.7660067,13.5541438 C14.1712706,13.8251939 14.3388465,14.3164633 14.1774235,14.7602629 C13.915031,15.3462528 13.2224794,15.9923109 11.6668667,15.9923109 L4.39987429,15.9923109 C3.9673802,16.0440571 3.5477081,15.8310308 3.35441845,15.4616357 L3.35441845,7.43409373 C3.35140752,7.32388776 3.36526471,7.21384907 3.39556013,7.10739144 Z M0,6.59140925 L2.8428902,6.59140925 L2.8428902,15.9905823 L0,15.9905823 L0,6.59140925 Z"
                                            id="Rectangle_9_copy"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}
