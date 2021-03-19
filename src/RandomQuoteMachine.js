import React from "react";


export default class RandomQuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomIndex: 0
        };
        this.generateIndex = this.generateIndex.bind(this);
    }

    componentDidMount() {
        this.generateIndex();
    }
    generateIndex() {
        this.setState({
            randomIndex: Math.floor(Math.random() * 50)
        });
    }

    render() {
        const quotes = [
            {
                "quote": "Find what you love and let it kill you.",
                "author": "Charles Bukowski"
            },
            {
                "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
                "author": "Albert Einstein"
            },
            {
                "quote": "With the new day comes new strength and new thoughts.",
                "author": "Eleanor Roosevelt"
            },
            {
                "quote": "We are all failures. At least the best of us are.",
                "author": "J.M. Barrie"
            },
            {
                "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
                "author": "Mahatma Gandhi"
            },
            {
                "quote": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
                "author": "George Bernard Shaw"
            },
            {
                "quote": "Tough times never last, but tough people do.",
                "author": "Dr. Robert Schuller"
            },
            {
                "quote": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
                "author": "Paulo Coelho"
            },
            {
                "quote": "You cannot swim for new horizons until you have courage to lose sight of the shore.",
                "author": "William Faulkner"
            },
            {
                "quote": "The best revenge is massive success.",
                "author": "Frank Sinatra"
            },
            {
                "quote": "Well done is better than well said.",
                "author": "Benjamin Franklin"
            },
            {
                "quote": "Without hard work, nothing grows but weeds.",
                "author": "Gordon B. Hinckley"
            },
            {
                "quote": "I have no special talents. I am only passionately curious.",
                "author": "Albert Einstein"
            },
            {
                "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
                "author": "Stephen Hawking"
            },
            {
                "quote": "Everybody has talent, but ability takes hard work.",
                "author": "Michael Jordan"
            },
            {
                "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
                "author": "Mahatma Gandhi"
            },
            {
                "quote": "You can see a lot by just looking.",
                "author": "Yogi Berra"
            },
            {
                "quote": "The scariest moment is always just before you start.",
                "author": "Stephen King"
            },
            {
                "quote": "I have not failed. I've just found 10,000 ways that won't work.",
                "author": "Thomas A. Edison"
            },
            {
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
            },
            {
                "quote": "The most common way people give up their power is by thinking they don't have any.",
                "author": "Alice Walker"
            },
            {
                "quote": "The harder the conflict, the more glorious the triumph.",
                "author": "Thomas Paine"
            },
            {
                "quote": "What you do speaks so loudly that I cannot hear what you say.",
                "author": "Ralph Waldo Emerson"
            },
            {
                "quote": "The most difficult thing is the decision to act. The rest is merely tenacity.",
                "author": "Amelia Earhart"
            },
            {
                "quote": "Whether you think you can or think you can't, you're right.",
                "author": "Henry Ford"
            },
            {
                "quote": "Have no fear of perfection - you'll never reach it.",
                "author": "Salvador Dalí"
            },
            {
                "quote": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
                "author": "Albert Einstein"
            },
            {
                "quote": "We only see what we know.",
                "author": "Goethe"
            },
            {
                "quote": "We may encounter many defeats, but we must not be defeated.",
                "author": "Maya Angelou"
            },
            {
                "quote": "Today's accomplishments were yesterday's impossibilities.",
                "author": "Robert H. Schuller"
            },
            {
                "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
                "author": "Thomas A. Edison"
            },
            {
                "quote": "You can, you should, and if you're brave enough to start, you will.",
                "author": "Stephen King"
            },
            {
                "quote": "The only limit to our realization of tomorrow, will be our doubts of today.",
                "author": "Franklin D. Roosevelt"
            },
            {
                "quote": "It is never too late to be what you might have been.",
                "author": "Mary Anne Evans"
            },
            {
                "quote": "You don't have to be great to start, but you have to start to be great.",
                "author": "Zig Ziglar"
            },
            {
                "quote": "If you don't risk anything, you risk even more.",
                "author": "Erica Jong"
            },
            {
                "quote": "Even if you're on the right track, you'll get run over if you just sit there.",
                "author": "Will Rogers"
            },
            {
                "quote": "The best way to predict the future is to invent it.",
                "author": "Alan Kay"
            },
            {
                "quote": "If you reveal your secrets to the wind, you should not blame the wind for revealing them to the trees.",
                "author": "Kahlil Gibran"
            },
            {
                "quote": "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
                "author": "Johann Wolfgang von Goethe"
            },
            {
                "quote": "If you have everything under control, you're not moving fast enough.",
                "author": "Mario Andretti"
            },
            {
                "quote": "There are far, far better things ahead than any we leave behind.",
                "author": "C.S. Lewis"
            },
            {
                "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
                "author": "Marie Curie"
            },
            {
                "quote": "You only live once, but if you do it right, once is enough.",
                "author": "Mae West"
            },
            {
                "quote": "Don't wish it was easier, wish you were better.",
                "author": "Jim Rohn"
            },
            {
                "quote": "The people who are crazy enough to think they can change the world are the ones who do.",
                "author": "Steve Jobs"
            },
            {
                "quote": "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma—which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
                "author": "Steve Jobs"
            },
            {
                "quote": "Sometimes life is going to hit you in the head with a brick. Don’t lose faith.",
                "author": "Steve Jobs"
            },
            {
                "quote": "It always seems impossible until it's done.",
                "author": "Nelson Mandela"
            },
            {
                "quote": "Nothing will work unless you do.",
                "author": "Maya Angelou"
            }
        ];
        const quote = quotes[this.state.randomIndex].quote;
        const author = quotes[this.state.randomIndex].author;
        const tweet = encodeURIComponent(quote + " -" + author);
        return (
            <div className="d-flex flex-column">
                <p id="text">{quote}</p>
                <p id="author">- {author}</p>
                <div className="d-flex align-items-center justify-content-between">
                    <a href={"https://twitter.com/intent/tweet?text=" + tweet} target="_top" className="btn btn-primary " id="tweet-quote"><i class="fab fa-twitter"></i></a>
                    <button id="new-quote" className="btn btn-primary " onClick={this.generateIndex}>New quote</button>

                </div>
            </div>
        );
    }
}

//ReactDOM.render(<RandomQuoteMachine />, document.getElementById("quote-box"));
