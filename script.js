const poems = {
    myapology: {
        title: "My Apology",
        text: `I sit on my bed, remembering all that had come to be done,
I wish I could close my eyes and forget, but all I can do is run,
Maybe it was me, maybe I was the villain of the story,
But all I can say now is, I miss you and I’m sorry;

I still wish that when I’d asked, you’d have chased me,
I never really wanted to change, but you made me,
Now all I hear you telling your friends is I’m crazy,
Maybe in the world we live in, we just weren’t meant to be;

I don’t want to wake up, I want to stay in this dream,
I want to enjoy your smile, your laugh, your lips,
I want to hold you close always, even if we’re freezing in ice,
I wish you could say sorry, but maybe I’m the one to apologize;
`
    },
    acedia: {
        title: "Acedia",
        text: `A paradise relived in my head, as the days passed,
Now I live stranded, in a field of obsolete desolation,
The pain-carrying crying breeze brushing my neck,
Where I once felt the warmth and passion of a life,
Now reduced to a thorny incarnation of regrets,
Call me once more, someone, anyone,
Hold out your hand for this soul, once upon a time held his own light,
Once still was moving forward with all he thought he had,
But with time came the brazen and cold realization,
No one and nothing, not even his hope and joy was at his beck,
"Join me" the shadow across the river whispered, the boy's throat to a knife,
All the trauma gone through, finally revealing its effects,
Just a lonely one, hearing the church bells in his own casket with no one,
Countless thoughts spam, as the chasm of time keeps moving,
Struggling to breathe, struggling to think each morning,
But still cannot shed a tear, still cannot move forward despite having no way back,
It gets tiring, he wants to talk about it, he wants his heart on the display rack,
No longer afraid of judgement just looking for a way out,
A worldly escape, a haven, none really accommodating, nowhere for him to pout
He stares into the screen, then all of a sudden, no warning prior,
A cold relaxing stream finally flows down his face,
Both comforting and exposing, flooding pictures in his mind,
None giving him a reason to get up, none giving him a reason to move on,
At the same time, none letting him let go, none letting him give up,
"Save me" a new voice in the abyss now whimpers,
A conviction? A regret? His inner child? His real self? Whomever they were,
Finally giving the boy, the strength to move, standing between the abyss and lifeless darkness,
He takes a step, eyes closed, letting his own tragic, ill fate lead him to fall or lead him to drown.
`
    },
    mybirthdaywish: {
        title: "My Birthday Wish",
        text: `A promise made, nearly two years past,
On my special day, back when we were still intact,
Now my heart has never really felt relaxed,
Since you left me waiting in the dust;

All I felt was pain, even tried to fill my heart with disdain,
But all I saw was you, couldn’t forget you despite the pain,
You said “Together forever”, that you and I would be like a chain,
But in the end, we snapped, all for reasons I could never ascertain;

Written in my own records, my all-time birthday wish,
I wish you were still here, maybe that would bring me a stitch,
To save my own sanity, to save myself from being trapped in this glitch,
Then maybe, just maybe, I wouldn’t still be struggling to escape this ditch;

Time’s still going, I’m still trying to forget you,
Sometimes I try to wonder, if all we had was true,
In this life or the next, our promise is still in due,
In this life or the next, I’d never pick anyone over you.
`
    }
};

const cards = document.querySelectorAll("#poem-list article");
const poemTitle = document.querySelector("#poem-title");
const poemText = document.querySelector("#poem-text");

cards.forEach(function (card){
    card.addEventListener("click", function(){
        const poem = poems[card.dataset.poem];
        poemTitle.textContent = poem.title;
        poemText.textContent = poem.text;
        document.querySelector("#reading-room").scrollIntoView({behaviour: "smooth"});
    });
});