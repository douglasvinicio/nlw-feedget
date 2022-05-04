import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

export const feedbackTypes = {
    BUG: { 
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'Image of a bug'
        }
    },

    IDEA: { 
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Image of a lamp'
        }
    },

    OTHER: { 
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Image of a cloud of thinking'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto sm:w-auto xs:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
           
            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType} 
                onFeedbackRestarRequest={handleRestartFeedback}
                />
            )            
            }

            <footer className="text-xs text-neutral-400">
                Made with ♥ by 
                <a className="underline underline-offset-2" href="https://www.linkedin.com/in/douglasvinicio/"> Douglas</a> and 
                <a className="underline underline-offset-2" href="https://rocketseat.com"> RocketSeat</a>
            </footer>
        </div>
    )
}

/* Object.entries(feedbackTypes) => It returns an array of array/objects => 
[
    ['BUG', {...}], 
    ['IDEA', {...}],
    ['OTHER', {...}],
]
*/