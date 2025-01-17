// Obiekt przechowujący informacje o dialogach
const dialogues = [
  {
    id: 1, characterId: "Nav", text: "Hey! Hey! what's going on?! why you're screaming? you'll wake up everyone!",
    options: [
      { text: "I... I don't know. Who are you?", nextDialogueId: 2 },
     
    ]
  },
  {
    id: 2, characterId: "Nav", text: "Don't play this game with me old man. For a whole day i had to endure your gimmics. Now, Is there any reason you just woke up whole pilgimage?",
    options: [
      { text: "Holy Mari what games?! Who are you?! Where am I!?", nextDialogueId:3}
    ]
  },
  {
    id: 3, characterId: "Nav", text: "Hmm... Wait a moment... You are... Scared? Damn, You're not joking? You can't remember shit?",
    options: [
      { text: "Mari, the last thing i remember are my college years...", nextDialogueId:4}
    ]
  }, {
    id: 4, characterId: "Nav", text: "heh... College huh? Interesting... Alright old man, ask",
    options: [
      { text: "Who are you?", nextDialogueId:41 },
      { text: "Who am I?", nextDialogueId:42 }
    ]
  }, {
    id: 41, characterId: "Nav", text: "I won't tell you my name, All you need to know is that I'm a Navigator. I lead pilgrimages between the cities. You are a part of one right one.",
    options: [
      { text: "Pilgrimages?", nextDialogueId: 411},
      { text: "Navigator?", nextDialogueId: 412},
      { text: "Mhm... I have other question...", nextDialogueId: 413}
    ]
  },
  {
    id: 413, characterId: "Nav", text: "Go on, ask.",
    options: [
      { text: "Who are you?", nextDialogueId:41 },
      { text: "Who am I?", nextDialogueId:42 }
    ]
  },
  {
    id: 411, characterId: "Nav", text: "Yes, pilgrimages. You can say they are glorified caravans. Land between cities is not safe like in your times. There are no roads, no cars, no trains... bands of bandits roam around countryside, and they are a tip of an iceberg",
    options: [
      { text: "Navigator?", nextDialogueId: 412},
      { text: "Mhm... I have other question...", nextDialogueId: 413}
    ]
  },
  {
    id: 412, characterId: "Nav", text: "You can say it's a job, or rather vocation. people like me spend a lot of time learning about safe routes, migrations, outposts, politics... Yeah, a lot of people depend on us. and well times are not helping...",
    options: [
      { text: "Pilgrimages?", nextDialogueId: 411},
      { text: "Mhm... I have other question...", nextDialogueId: 413}
    ]
  },

  {
    id: 42, characterId: "Nav", text: "That's a milion VH question... From what I know your name is Igu, you're not traveling alone and you are Xenopaceologists... And i think you are a Golden child.",
    options: [
      { text: "Xenopaceologists... I've heard that before...", nextDialogueId: 421 },
      { text: "Not alone? And who's here with me?", nextDialogueId: 422 },
      { text: "Golden child?(leads to dialogue end)", nextDialogueId: 5 }
    ]
  },
  {
    id: 421, characterId: "Nav", text: "That's good, it means your memory is not all-gone. Xenopaceologists deals with ksekse... at least i think. people of your profession are extremely rare nowadays.",
    options: [
      { text: "Not alone? And who's here with me?", nextDialogueId: 422},
      { text: "Golden child? (leads to dialogue end)", nextDialogueId: 5}
    ]
  },
  {
    id: 5, characterId: "Nav", text: "Yeah, a Golden child. although the term is slightly offensive. Your kind of people from what i know were a last generation before... well world ended. Kids of the richest of the rich. Most of them are wandering the cities talking to themselves nowadays. Your mentioning of college assured me... I don't know how to say it Igu but... You are over 500 years old",
    options: [
      { text: "500 YEARS?", nextDialogueId: 51 }
    ]
  },
  {
    id: 422, characterId: "Nav", text: "Three people joined with you. Well... people are an overstatement. It seems like you have a Ksekse on your own. she's called Gehi i think. ehh... those monsters really put on pretty faces... Then there is this huge slap of meat. never told his name, offered to join as a guard... He basically enlisted you without asking. at last we have Paca. Compared to your other companions he seems normal... just another Euskincan merchant. Nonetheless, it may be that he owes you something.",
    options: [
      { text: "Xenopaceologists... I've heard that before...", nextDialogueId: 421 },
      { text: "Golden child?(leads to dialogue end)", nextDialogueId: 5 }
    ]
  },
  {
    id: 51, characterId: "Nav", text: "Yes 500, but don't scream gods damn. People are trying to sleep...",
    options: [
      { text: "My gods... what I'm gonna do now...", nextDialogueId: 52 }
    ]
  },
  {
    id: 52, characterId: "Nav", text: "First of all, you'll stop screaming. Second of all, go to sleep, you'll need it tomorrow...",
    options: [
      { text: "What do you mean I'll need it tomorrow?", nextDialogueId: 53 }
    ]
  },
  {
    id: 53, characterId: "Nav", text: "Well, We're packing camp at dawn and walked untill midnight in sub zero temperature",
    options: [
      { text: "ehh... Sure, but what then? where are we even going?", nextDialogueId: 54 }
    ]
  },
  {
    id: 54, characterId: "Nav", text: "To a shithole called Thorn. Well at least you are. If i were you i'd talked with your people. remember, Guard, Gehi, Paca.",
    options: [
      { text: "Yeah, I'll talk to them... How long untill we'll reach this... Torn?", nextDialogueId: 55 }
    ]
  }, {
    id: 55, characterId: "Nav", text: "We left earlier today... so couple of days. Now if you excuse me I need to go. I have to calm people down after your performance. Sleep well.",
    options: [
      { text: "Sorry for that... Goodnight", nextDialogueId: null, action:goToTent }
    ]
  },


  {
    id: "Guard_intro", characterId: "Guard", text: "Guard, a Person that apparently played a huge role in your pilgrimage enlistment is minding his own business.",
    options: [
      { text: "Hello", nextDialogueId: "Guard2"}
    ]
  },
  {
    id: "Guard2", characterId: "Guard", text: "Huge man turns towards you.",
    options: [
      { text: "Can we talk?", nextDialogueId: "guard3"}
    ]
  },

  {
    id: "Guard3", characterId: "Guard", text: "I guess we can... What do you want?",
    options: [
      { text: "Sorry but... Who are you?", nextDialogueId: "guard4"}
    ]
  },
  {
    id: "Guard4", characterId: "Guard", text: "Hmm... so you really forgot? Pitty... To think i save your ass for nothing then",
    options: [
      { text: "For nothing?", nextDialogueId: "guard41"},
      { text: "you saved me??", nextDialogueId: "guard42"},
    ]
  },
  {
    id: "Guard41", characterId: "Guard", text: "I saved Igu deKerente. A renowned Xenopaceologist. Who are you without centuries of knowledge? Just another drooling idiot",
    options: [
      { text: "Excuse me?", nextDialogueId: "guard411"}
    ]
  },

  {
    id: "Guard411", characterId: "Guard", text: "You heard me right. you should thank me for forshadowing tho. Most of your kind of people really are just drooling idiots, holding to any bits of old world stuck in their heads...",
    options: [
      { text: "What do you mean by that?", nextDialogueId: "guard412"}
    ]
  },
  {
    id: "Guard412", characterId: "Guard", text: "There used to be something called internet. you had it streamed straight into your brain. those less fortunate than you re watches everything they saved, time and time again. since your kind doesn't age at all... they could do it for eternity. frying their brains out",
    options: [
      { text: "...", nextDialogueId: "guard413"}
    ]
  }, 
  {
    id: "Guard413", characterId: "Guard", text: "but maybe it's not too late to save your life... Maybe they'll fix you there... maybe they'll fix your memory and pay me... or maybe not. who knows what leeches can really do.",
    options: [
      { text: "...leeches", nextDialogueId: "guard414"}
    ]
  },
  {
    id: "Guard414", characterId: "Guard", text: "ehh... don't get me started on that. you'll get it soon enough.",
    options: [
      { text: "right... you said you saved me...", nextDialogueId: "guard42"}
    ]
  },
  {
    id: "Guard42", characterId: "Guard", text: "Yes, i saved you big time.",
    options: [
      { text: "How come?", nextDialogueId: "guard421"}
    ]
  }, 
  {
    id: "Guard421", characterId: "Guard", text: "How can i explain it to you... well, let's say Euskincan empire abolished all institution you worked at. Manhunt will follow soon",
    options: [
      { text: "Euskincan empire?", nextDialogueId: "guard422"},
    ]
  },
  {
    id: "Guard422", characterId: "Guard", text: "Te only centralized country left on this god forsaken continent, that just so happens to hate Ksekses and anything even moderately related to them. You worked in a industry dedicated to maintaining them. but don't ask me about it, talk with your pet if you want to learn more...",
    options: [
      { text: "yeah i'll will... but how did you know who i am?", nextDialogueId: "guard423"}
    ]
  },
  {
    id: "Guard423", characterId: "Guard", text: "Despite you screaming your name out loud while i was dragging you to a storage...i had my sources.",
    options: [
      { text: "right... ", nextDialogueId: "guard424"}
    ]
  },
  {
    id: "Guard424", characterId: "Guard", text: "before you ask and piss me off. No I'm not selling you. i'm getting paid from your organisation to get you to Thorn safely.",
    options: [
      { text: "... how am i even supposed to answer that?", nextDialogueId: "guard425"}
    ]
  },
  {
    id: "Guard425", characterId: "Guard", text: "You're not. now i would be gratefull if you could stop distracting me. i'm working as a Guard, not as a basic knowledge provider",
    options: [
      { text: "Jerk...", nextDialogueId: null, action:goToTent}
    ]
  },

  {
    id: "Gehi_intro", characterId: "Gehi", text: "There is Gehi. dressed only in light jacket and long-sleeve shirt, while you have layers and layers of clothing. You are still cold, yet she seems comfortable. collar on her neck blinks with LED lights. then you notice her eyes... these are not human eyes.",
    options: [
      { text: "Gehi... can we talk?", nextDialogueId: "Gehi2" },
     
    ]
  },
  {
    id:  "Gehi2", characterId: "Gehi", text: "She... Hums. Without words. Yet you are able to understand her somehow... it's a language... not from this world. Alas, even if you understand, you can't translate her words.",
    options: [
      { text: "I can't understand you", nextDialogueId: "Gehi21"},
      { text: "What the hell are you...", nextDialogueId:"Gehi3"}
    ]
  },
  {
    id:  "Gehi21", characterId: "Gehi", text: "Igu forgot again?",
    options: [
      { text: "So you know our language...", nextDialogueId:"Gehi211"},
      { text: "What do you mean again?", nextDialogueId: "Gehi212"},
    ]
  },
  {
    id:  "Gehi211", characterId: "Gehi", text: "Yes. me learned. hard task. Igu picked me for it.",
    options: [
      { text: "Yeah... but what do you mean again?", nextDialogueId: "Gehi212"}
    ]
  },
  {
    id:  "Gehi212", characterId: "Gehi", text: "Happened before. me think Igu forget when bad things happen. may be wrong... If Igu forgot order can me say something?",
    options: [
      { text: "Yeah, sure. what's on your mind?", nextDialogueId: "Gehi4"}
    ]
  },
  {
    id:  "Gehi4", characterId: "Gehi", text: "Me thinks spirits angry at Igu. Spirits want to take Igu.",
    options: [
      { text: "Order still stands, don't talk about it. there are no spirits. What are you anyway?", nextDialogueId:"Gehi3"},
      { text: "... go on", nextDialogueId:"Gehi41"}
    ]
  },
  {
    id:  "Gehi41", characterId: "Gehi", text: "Spirits angry at Igu. Want to take what's theirs.",
    options: [
      { text: "What are spirits?", nextDialogueId:"Gehi411"},
      { text: "Why they are angry at me?", nextDialogueId:"Gehi412"},
      { text: "What do they want from me?", nextDialogueId:"Gehi413"},
      { text: "I've heard enough. what are you anyway?", nextDialogueId:"Gehi3"}
      
    ]
  },
  {
    id:  "Gehi411", characterId: "Gehi", text: "Spirits gods. every living thing have spirit. spirits wonder the world after death. They love all ksekse. Ksekse love spirits. They make ksekse stronger, challenge ksekse to improve. Earth a test. ",
    options: [
      { text: "Why they are angry at me?", nextDialogueId:"Gehi412"},
      { text: "What do they want from me?", nextDialogueId:"Gehi413"},
      { text: "I've heard enough. what are you anyway?", nextDialogueId:"Gehi3"}
    ]
  },
  {
    id:  "Gehi412", characterId: "Gehi", text: "Igu enslaved hundreds of ksekse. spirits are waiting for igu. they will punish. But spirits good, won't punish igu for too long.",
    options: [
      { text: "Hey hold your horses what do you mean I enslaved hudreds?", nextDialogueId:"Gehi4122"},
      { text: "What do they want from me?", nextDialogueId:"Gehi413"},
      { text: "I've heard enough. what are you anyway?", nextDialogueId:"Gehi3"}
    ]
  },
  {
    id:  "Gehi4122", characterId: "Gehi", text: "Yes. Igu make poison. we take poison, get weak. emotionless. no anger against humans. me feel little emotions. Igu make different poison for Gehi. Me takes it or collar goes boom. oh. my poison ending soon. igu need to make more.",
    options: [
      { text: "What are spirits", nextDialogueId:"Gehi411"},
      { text: "What do they want from me?", nextDialogueId:"Gehi413"},
      { text: "I've heard enough. what are you anyway?", nextDialogueId:"Gehi413"}
    ]
  },
  {
    id:  "Gehi413", characterId: "Gehi", text: "Igu live too long. Against the nature. Igu spirit want to be free. Igu living too long traps spirit.",
    options: [
      { text: "What are spirits", nextDialogueId:"Gehi411"},
      { text: "Why they are angry at me?", nextDialogueId:"Gehi412"},
      { text: "I've heard enough. what are you anyway?", nextDialogueId:"Gehi3"}
    ]
  },
  
  {
    id:  "Gehi3", characterId: "Gehi", text: "Me Ksekse. Humans calls us that.",
    options: [
      { text: "Alright... let's enter this rabbit hole... what are Ksekses exactly?", nextDialogueId: "Gehi31"}
    ]
  },
  {
    id:  "Gehi31", characterId: "Gehi", text: "Ksekse native to Venus. Humans used steel mountains to fly there. humans conquered venus. Enslaved most ksekses, took us here",
    options: [
      { text: "You look nearly like human", nextDialogueId: "Gehi311"}
    ]
  },
  {
    id:  "Gehi311", characterId: "Gehi", text: "Ksekse addapts. lot of humans to hunt. every new ksekse looks more like humans. but not all ksekse. some similar to other animals",
    options: [
      { text: "you hunt people?", nextDialogueId: "Gehi3111"},
      { text: "you turn into humans?", nextDialogueId: "Gehi3112"}
    ]
  },
  {
    id:  "Gehi3111", characterId: "Gehi", text: "Yes. not poisoned ksekses hates humans. lots of us not poisoned. spirits show us the way to best pray. usually human. ",
    options: [
      { text: "you turn into humans?", nextDialogueId: "Gehi3112"}
    ]
  },
  {
    id:  "Gehi3112", characterId: "Gehi", text: "yes, ksekse change into humans. ages ago ksekse looked like lizzards. we consume strongest pray. we change into pray a little bit. then small ksekse does the same. elders look differently.",
    options: [

      { text: "how is this possible... how do you even tell a difference after some point?", nextDialogueId: "Gehi31121"}
    ]
  },
  {
    id:  "Gehi31121", characterId: "Gehi", text: "Difference huge, ksekse better in every way. you're not gonna stop us all. we will return home",
    options: [

      { text: "...What?", nextDialogueId: "Gehi31122"}
    ]
  },
  {
    id:  "Gehi31122", characterId: "Gehi", text: "Not important. Igu should go. Talking to Gehi for long looks bad. Humans hate Gehi. They will soon hate Igu.",
    options: [

      { text: "Yeah... I think i should go... Gods what have we done...", nextDialogueId: null, action: goToTent}
    ]
  },



  {
    id: "Paca_intro", characterId: "Paca", text: "Paca was trying hard to avoid you. But after some back and forth you manage to catch him.",
    options: [
      { text: "Hello Paca... It's hard to get a hold of you, you know?", nextDialogueId: "Paca2" }
      
    ]
  },
  {
    id: "Paca2", characterId: "Paca", text: "Ah! Mister deKerente! Yeah, i'm kinda busy, i was talking with...",
    options: [
      { text: "Cut this bullshit Paca. Why are you avoiding me?", nextDialogueId:"Paca3" },
    ]
  },  {
    id: "Paca3", characterId: "Paca", text: "Avoiding? that's such a strong word... I'm mot avoiding you good sir, i merely... walk in a different direction than you to avo... I mean prevent further conflicts",
    options: [
      { text: "Yeah? that just led you to another one", nextDialogueId:"Paca4" },
    ]
  },
  {
    id: "Paca4", characterId: "Paca", text: "...So it seems... But i told you before, i know i failed, buut! I have connections in Thorn. i traded with those people many times. they owe me a few favours. ",
    options: [
      { text: "mhmm... and remind me what you failed at?", nextDialogueId:"Paca5" },
      { text: "mhmm... and you're going with me because...?", nextDialogueId:"Paca6" }
    ]
  },
  {
    id: "Paca6", characterId: "Paca", text: "... your big friend threatened me... and i owe you...",
    options: [
      { text: "you owe me... for?", nextDialogueId:"Paca61" },
    ]
  },
  {
    id: "Paca61", characterId: "Paca", text: "... giving me assylum... because i slightly deviated from contracts with wrong people...",
    options: [
      { text: "mhmm... and remind me what you failed at?", nextDialogueId:"Paca5" }
    ]
  },
  {
    id: "Paca5", characterId: "Paca", text: "Jesus Christ man, stop talking like that. you know yourself how hard it is to smugg... i mean siletly transfer goods nowadays. you know how hard euskincas stomp at anything with a logo on it.",
    options: [
      { text: "I just want to make sure you know how serious this situation is", nextDialogueId:"Paca51" }
    ]
  },
  {
    id: "Paca51", characterId: "Paca", text: "yeah i know. i know you don't have any spares and all this Golden child, augments and javiero stuff. i know alright? things just didn't went as planned, that's it...",
    options: [
      { text: "What went wrong", nextDialogueId:"Paca52" }
    ]
  },
  {
    id: "Paca52", characterId: "Paca", text: "I already told you. toll stop, random search at the border. I have to bribe those bastards just to stay alive. greedy fuckers took a javi visions, two javi visions you understand? not to mention my whole cart... no wonder people are starving. none of that food will get on their tables now! ",
    options: [
      { text: "Javi vision... wasn't that...?", nextDialogueId:"Paca521" },
      { text: "I hope your contacts are good... you really need those now", nextDialogueId:"Paca522" },
    ]
  },
  {
    id: "Paca521", characterId: "Paca", text: "Yes, the Augmented reality googles with Javiero on it. for those too poor to afford lences. at least i think that's the case. you people couldn't live without Javi hmmm? so called AI Assistant so powerful that it single handedly change the global economy",
    options: [
      { text: "yeah, you don't say. like if you were there to witness it...", nextDialogueId:"Paca5211" },
    ]
  },
  {
    id: "Paca5211", characterId: "Paca", text: "Oh shut up, for weeks i had to endure your lectures about pre apocalypse world. half of a time you were talking with javi. that was some real shizo stuff. don't do it next to normal people please...",
    options: [
      { text: "I hope your contacts are good... you really need those now", nextDialogueId:"Paca522" },
    ]
  },



  {
    id: "Paca522", characterId: "Paca", text: "oh, they are the best, you'll see. now if you excuse me, i still see some opportunities to make some money... at the opposite side of pilgrimage...",
    options: [
      { text: "Right... good luck", nextDialogueId:"Paca523" }
  
    ]
  },
  {
    id: "Paca522", characterId: "Paca", text: "",
    options: [
      { text: "Damn, i should be an actor...", nextDialogueId: null, action:goToTent}
  
    ]
  },

  {
    id: "Nav1", characterId: "Nav", text: "At last, you can set your tent while seeing your destination. being that close to an actual human city brings hope. while it's not in the best shape, city for sure is inhabited. you decide to climb a hilltop nextby to get a better view. and you're not alone...",
    options: [
      { text: "Good evening Navigator. So that's it mh? that's Thorn?", nextDialogueId: "Nav2"}
    ]
  },
  {
    id: "Nav2", characterId: "Nav", text: "Evening... yes, that's it. Tomorrow you and few others depart... How are you? were you able to figure out anything?",
    options: [
      { text: "... no matter how i look at it it feels like i learned nothing?", nextDialogueId: "Nav3"}
    ]
  },
  {
    id: "Nav3", characterId: "Nav", text: "yeah... i don't envy you. But everything is not yet lost. You see that tower? that's a leech.",
    options: [
      { text: "what's a leech?", nextDialogueId: "Nav4"}
    ]
  },
  {
    id: "Nav4", characterId: "Nav", text: "Remnants of some corporation. not sure which one. normally i wouldn't took send there anyone, even a dying person but in your case... yeah, death becomes a reasonable alternative...",
    options: [
      { text: "Are they that bad?", nextDialogueId: "Nav5"}
    ]
  },
  {
    id: "Nav4", characterId: "Nav", text: "Oh believe me, they are THAT bad. compared to them your... friend with a collar is a saint. believe me or not, but looking at what's left of them... i think they are the reason world ended",
    options: [
      { text: "C'mon, they can't be that bad. why end the world thak makes you money", nextDialogueId: "Nav5"}
    ]
  },
  {
    id: "Nav5", characterId: "Nav", text: "I've seen whole villages starving while so called CEO's grow so fat you could roll them. I've seen atrocities they are willing to commit... on humans. you see a city of slaves dear igu. And ksekses? you can't even imagine what they do to them. looking at it i feel that ksekse's wrath and hatred is justified...",
    options: [
      { text: "...", nextDialogueId: "Nav6"}
    ]
  },
  {
    id: "Nav6", characterId: "Nav", text: "...But i am sure they will take care of you. Sorry for... saying all of that.",
    options: [
      { text: "No problem...", nextDialogueId: "Nav_outro"}
    ]
  },
  
  
  {
    id: "Nav_outro", characterId: "Nav", text: "Navigator nods, stand next to you in silence while looking at the city. After a while he goes back to a camp, leaving you with your own thoughts",
    options: [
      { text: "...What a hellish world we made for ourselves...", nextDialogueId: null, action: endGame }
    ]
  }
];

// Obiekt przechowujący informacje o postaciach
const characters = [
  { id: "Nav", name: "Navigator", avatar: "assets/visual/NavAv.png", hasInteracted: false },
  { id: "Gehi", name: "Gehi", avatar: "assets/visual/GehiAv.png", hasInteracted: false },
  { id: "Paca", name: "Paca", avatar: "assets/visual/PacaAv.png", hasInteracted: false },
  { id: "Guard", name: "Guard", avatar: "assets/visual/GuardAv.png", hasInteracted: false }
];

// Obiekt przechowujący informacje o lokacjach
const locations = [
  { id: 1, background: "assets/visual/tent.webp" },
  { id: 2, background: "assets/visual/road1.webp" },
  { id: 3, background: "assets/visual/road2.webp" },
  { id: 4, background: "assets/visual/road3.webp" },
  { id: 5, background: "assets/visual/road4.webp" }
];

// Ukryty licznik dni
let days = 1; // Dzień zaczyna się od 1

// Cache elementów DOM dla zwiększenia wydajności
const dialogueBox = document.getElementById("dialogue");
const optionsContainer = document.getElementById("options");
const situationElement = document.getElementById("situation");
const avatarElement = document.querySelector("#Avatar img");
const backgroundLayer = document.getElementById("backgroundLayer");

// Funkcja wyświetlająca wiadomość dnia w dialogue box
function displayDayMessage() {
  const messages = {
    1: "",
    2: "You couldn't sleep that night. who could blame you? No one. You dress up, and leave your tent. Navigator wasn't lying about temperature, it's freezing out there. Few people help you with disassembling your tent, and march begins. After an hour of walking in mountains your legs are begging for a break. at least you don't have to carry your tent for some reason. After another hour you just have to stop. Fortunately, you're not the only one. For a whole morning you've been walking uphill. Navigator, although reluctant, agrees for a break. Although thankfull you decide to act. you decide to...",
    3: "After a whole day of climbing uphill you finally begin to descend. Road ahead is well maintain, just steep enough to ease march without a risk of falling down. tempo is good, even with sorrow muscles you feel that this day will be easier. While walking you again decide to gather some information. this time you decide to...",
    4: "The road just became a lot harder. Not because of a blizzard, not because of snow easily reaching your knees. The view brings terror to your heart. Enormous field of solar pannels lies ahead. they are all broken. Moments later you walk through a forrest of shattered black glass, concrete poles and rusty steel rods. those fields used to be essential for civilisation... Is their state an allegory of humanity itself? Shouts brings you back to reality, the blizzard is getting more intense. fortunately there are a hideout nearby. made of series of enormous panels that still holds on. while waiting for a weather to get better you at last decide to...",
    5: "The destination is near..."
  };

  dialogueBox.textContent = messages[days] || "A day like no other..."; // Domyślna wiadomość, jeśli brak dla danego dnia
}

// Funkcja obsługująca wydarzenia na podstawie dnia
function handleDayEvents() {
  displayDayMessage();
  if (days === 1) startDialogue(1);
  else if (days === 5) startDialogue("Nav1");
}

// Funkcja przenosząca gracza do lokacji 1 i wyświetlająca guzik "Idź spać"
function goToTent() {
  changeLocation(1);
  dialogueBox.textContent ="After a long day of walking, Gehi assembles your tent. your hopes of not getting blisters are long-gone. All you can think about is your comfy-looking bed..."
  optionsContainer.innerHTML = ""; // Wyczyść stare opcje
  const sleepButton = createButton("Go to sleep", sleepAndProceed);
  optionsContainer.appendChild(sleepButton);
}

// Funkcja zmieniająca dzień, aktualizująca lokalizację i wyświetlająca opcje dialogowe
function sleepAndProceed() {
  incrementDays();
  displayDayMessage(); // Wyświetlenie wiadomości dnia
  situationElement.textContent = "Another day..";

  // Przygotowanie opcji dialogowych na nowy dzień
  optionsContainer.innerHTML = "";
  characters.forEach(character => {
    if (!character.hasInteracted) {
      const button = createButton(`Talk with ${character.name}`, () => startDialogue(`${character.id}_intro`));
      optionsContainer.appendChild(button);
    }
  });

  handleDayEvents();
}

// Funkcja do zmiany lokalizacji
function changeLocation(locationId) {
  const location = locations.find(loc => loc.id === locationId);
  if (location) {
    backgroundLayer.style.backgroundImage = `url(${location.background})`;
  } else {
    console.error("Lokalizacja o podanym ID nie istnieje.");
  }
}

// Funkcja do zmiany lokalizacji na podstawie dnia
function changeLocationByDay() {
  const locationId = ((days - 1) % locations.length) + 1; // Cykl przez wszystkie lokacje
  changeLocation(locationId);
}

function incrementDays() {
  days++;
  console.log(`Dzień: ${days}`);
  displayUninteractedCount(); // Wyświetla liczbę postaci bez interakcji
  changeLocationByDay(); // Zmiana lokalizacji na podstawie dnia
}

function displayUninteractedCount() {
  const uninteractedCount = characters.filter(char => !char.hasInteracted).length;
  alert(`Postacie bez interakcji: ${uninteractedCount}`);
}

// Funkcja do obsługi dialogów
function startDialogue(dialogueId) {
  const dialogue = dialogues.find(d => d.id === dialogueId);
  if (!dialogue) return console.error("Dialog o podanym ID nie istnieje.");

  const character = characters.find(char => char.id === dialogue.characterId);
  if (character) {
    character.hasInteracted = true; // Oznacz postać jako interaktywną

    // Wyświetlenie avatara postaci
    avatarElement.src = character.avatar;
    avatarElement.style.display = "block";

    // Ustawienie opisu sytuacji na "dialogue with"
    situationElement.textContent = `Dialogue with ${character.name}`;
  }

  dialogueBox.textContent = dialogue.text;
  optionsContainer.innerHTML = ""; // Wyczyść stare opcje

  dialogue.options.forEach(option => {
    const button = createButton(option.text, () => {
      if (option.nextDialogueId) {
        startDialogue(option.nextDialogueId);
      } else {
        console.log("Koniec rozmowy");
        resetDialogueState();
        goToTent();
      }
    });
    optionsContainer.appendChild(button);
  });
}

function resetDialogueState() {
  avatarElement.style.display = "none";
  avatarElement.src = "";
  dialogueBox.textContent = "";
}

// Funkcja kończąca grę
// Funkcja wywoływana na początku gry
function fadeInScreenOverlayWithMessages() {
  const overlay = document.getElementById("screenOverlay");
  const messageElement = document.getElementById("overlayMessage");
  const messages = [
    "You wake up screaming...",
    "without any recolection...",
    "of how you got in that tent...",
    "and without answer to a question...",
    "Who are you?"
  ];

  let messageIndex = 0;

  function showNextMessage() {
    if (messageIndex < messages.length) {
      messageElement.textContent = messages[messageIndex];
      messageIndex++;
      setTimeout(showNextMessage, 4000); 
    } else {
      overlay.style.opacity = "0";
      setTimeout(() => {
        messageElement.textContent = ""; 
      }, 2000);
    }
  }

  showNextMessage();
}

// Funkcja wywoływana na końcu gry
function fadeOutScreenOverlay() {
  const overlay = document.getElementById("screenOverlay");
  overlay.style.pointerEvents = "auto"; // Blokuje interakcje
  overlay.style.opacity = "1";
}

// Aktualizacja `endGame` do wywoływania efektu końcowego
function endGame() {
  fadeOutScreenOverlay(); // Wyciemnia ekran
}

// Funkcja tworząca przycisk
function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = onClick;
  return button;
}

// Wywołanie fadeInScreenOverlayWithMessages na starcie
document.addEventListener("DOMContentLoaded", () => {
  fadeInScreenOverlayWithMessages(); // Czarny ekran z wiadomościami na początku
  avatarElement.style.display = "none";
  changeLocation(1); // Startujemy od pierwszej lokacji
  handleDayEvents();
});
