$(document).ready( function() {

	// BUTTON EFFECTS (JQUERY)
	// LIT MIX BUTTON
	$('.result p').hide();
	$('#mix-again').hide();
	$('#show-original-works').hide();
	$('#share').hide();

	$('#generateButton button').click( function() {
		$(this).replaceWith("<button type='button'> RESULT </button>");
		$('.result p').show('blind', 'slow');

		$('#mix-again').delay(1000).show('drop', {direction:'up'}, 500);
		$('#show-original-works').delay(1000).show('drop', {direction:'up'}, 500);
		$('#share').delay(1000).show('drop', {direction:'up'}, 500);
	});

	// MIX AGAIN BUTTON
	$('#mix-again button').click( function() {
	    window.location.reload();
	});

	// MIX AGAIN NOTE
	$('.mix-again-note').hide();

	$('#mix-again button').mouseenter( function() {
		$('.mix-again-note').show('slide', {direction:'left'}, 'slow');
	});

	$('#mix-again button').mouseout( function() {
		$('.mix-again-note').hide('slide', {direction:'left'}, 'fast');
	});

	// SHOW ORIGINAL WORKS BUTTON
	$('.three-articles div').hide();

	$('#show-original-works button').click( function() {
		$('.twitter-share-button').hide();
		$('.facebook-share-button').hide();
		$('.google-share-button').hide();

		$('#article1').show('drop', {direction:'up'}, 'slow');
		$('#article2').show('drop', {direction:'up'}, 'slow');
		$('#article3').show('drop', {direction:'up'}, 'slow');
	});

	// SHARE BUTTONS
	$('.twitter-share-button').hide();
	$('.facebook-share-button').hide();
	$('.google-share-button').hide();

	$('#share button').click( function() {
		$('.three-articles div').hide();
		$('.buttons').css('padding-bottom', '60px');

		$('.twitter-share-button').show('slide', {direction:'right'}, 500);
		$('.facebook-share-button').delay(1000).show('slide', {direction:'right'}, 500);
		$('.google-share-button').delay(1500).show('slide', {direction:'right'}, 500);
	});

	// LIMIT EXCERPTS SELECTION TO 3
	$('input[type=checkbox]').on('change', function (e) {
	    if ($('input[type=checkbox]:checked').length > 3) {
	        $(this).prop('checked', false);
	        alert("The number of input must not exceed 3.");
	    }

	    if ($('input[type=checkbox]:checked').length ===  3) {
	    	$('textarea').attr('disabled', true);
	    } else {
	    	$('textarea').attr('disabled', false);
	    }

	    if ($('input[type=checkbox]:checked').length ===  2) {
	    	$('#choice2 textarea').attr('disabled', true);
	    	$('#choice3 textarea').attr('disabled', true);
	    } else {
	    	$('#choice2 textarea').attr('disabled', false);
	    	$('#choice3 textarea').attr('disabled', false);
	    }

	    if ($('input[type=checkbox]:checked').length ===  1) {
	    	$('#choice3 textarea').attr('disabled', true);
	    } else if ($('input[type=checkbox]:checked').length ===  2) {
	    	$('#choice2 textarea').attr('disabled', true);
	    	$('#choice3 textarea').attr('disabled', true);
	    } else if ($('input[type=checkbox]:checked').length ===  3) {
	    	$('textarea').attr('disabled', true);
	    } else {
	    	$('#choice1 textarea').attr('disabled', false);
	    	$('#choice2 textarea').attr('disabled', false);
	    	$('#choice3 textarea').attr('disabled', false);
	    }
	});

	// LIST OF EXCERPTS

	var lHsunExcerpt = " The old home I remembered was nor in the least like this. My old home was much better. But if you asked me to recall its peculiar charm or describe its beauties, I had no clear impression, no words to describe it. And now it seemed this was all there was to it. Then I rationalized the matter to myself, saying: Home was always like this, and although it has not improved, still it is not so depressing as I imagine; it is only my mood that has changed, because I am coming back to the country this time with no illusions."

	var mAlbomExcerpt = " Try to imagine a life without timekeeping. You probably can't. You know the month, the year, the day of the week. There is a clock on your wall or the dashboard of your car. You have a schedule, a calendar, a time for dinner or a movie. Yet all around you, timekeeping is ignored. Birds are not late. A dog does not check its watch. Deer do not fret over passing birthdays. Man alone measures time. Man alone chimes the hour. And, because of this, man alone suffers a paralyzing fear that no other creature endures. A fear of time running out."

	var eGaskellExcerpt = " He was again the tutor in the college where he now held the rank of Fellow; it was again a long vacation, and he was staying with his newly married friend, the proud husband, and happy Vicar of Helstone. Over babbling brooks they took impossible leaps, which seemed to keep them whole days suspended in the air. Time and space were not, though all other things seemed real. Every event was measured by the emotions of the mind, not by its actual existence, for existence it had none. But the trees were gorgeous in their autumnal leafiness — the warm odours of flower and herb came sweet upon the sense — the young wife moved about her house with just that mixture of annoyance at her position, as regarded wealth, with pride in her handsome and devoted husband, which Mr. Bell had noticed in real life a quarter of a century ago."

	var wCatherExcerpt = " I was something that lay under the sun and felt it, like the pumpkins, and I did not want to be anything more. I was entirely happy. Perhaps we feel like that when we die and become a part of something entire, whether it is sun and air, or goodness and knowledge. At any rate, that is happiness; to be dissolved into something complete and great. When it comes to one, it comes as naturally as sleep. That is happiness; to be dissolved into something complete and great. When it comes to one, it comes as naturally as sleep. Now I understood that the same road was to bring us together again. Whatever we had missed, we possessed together the precious, the incommunicable past."

	var vWoolfExcerpt = " So with the lamps all put out, the moon sunk, and a thin rain drumming on the roof a downpouring of immense darkness began. Nothing, it seemed, could survive the flood, the profusion of darkness which, creeping in at keyholes and crevices, stole round window blinds, came into bedrooms, swallowed up here a jug and basin, there a bowl of red and yellow dahlias, there the sharp edges and firm bulk of a chest of drawers. Not only was furniture confounded; there was scarcely anything left of body or mind by which one could say, 'This is he' or 'This is she'. Sometimes a hand was raised as if to clutch something or ward off something, or somebody groaned, or somebody laughed aloud as if sharing a joke with nothingness."

	var aHuxleyExcerpt = " A noise made him start, made him guiltily turn. He crammed up his thieveries into the suit-case and shut the lid; then listened again, looked. Not a sign of life, not a sound. And yet he had certainly heard something – something like a sigh, something like the creak of a board. He tiptoed to the door and, cautiously opening it, found himself looking on to a broad landing. On the opposite side of the landing was another door, ajar. He stepped out, pushed, peeped."

	var cDickensExcerpt = " It was not in the first few moments that I saw all these things, though I saw more of them in the first moments than might be supposed. But, I saw that everything within my view which ought to be white, had been white long ago, and had lost its lustre, and was faded and yellow. I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes. I saw that the dress had been put upon the rounded figure of a young woman, and that the figure upon which it now hung loose, had shrunk to skin and bone."

	var gOrwellExcerpt = " Outside, even through the shut window pane, the world looked cold. Down in the street little eddies of wind were whirling dust and torn paper into spirals, and though the sun was shining and the sky a harsh blue, there seemed to be no color in anything except the posters that were plastered everywhere. The black-mustachio'd face gazed down from every commanding corner. There was one on the house front immediately opposite. BIG BROTHER Is WATCHING YOU, the caption said, while the dark eyes looked deep into Winston's own. Down at street level another poster, torn at one corner, flapped fitfully in the wind' alternately covering and uncovering the single word INGSOC. In the far distance a helicopter skimmed down between the roofs, hovered for an instant like a blue-bottle, and darted away again with a curving flight. It was the Police Patrol, snooping into people's windows. The patrols did not matter, however. Only the Thought Police mattered."

	var eHemmingwayExcerpt = " If people bring so much courage to this world the world has to kill them to break them, so of course it kills them. The world breaks every one and afterward many are strong at the broken places. But those that will not break it kills. It kills the very good and the very gentle and the very brave impartially. If you are none of these you can be sure it will kill you too but there will be no special hurry."

	var mTwainExcerpt = " The naming goes recklessly on, in spite of anything I can do. I had a very good name for the estate, and it was musical and pretty -- GARDEN OF EDEN. Privately, I continue to call it that, but not any longer publicly. The new creature says it is all woods and rocks and scenery, and therefore has no resemblance to a garden. Says it LOOKS like a park, and does not look like anything BUT a park. Consequently, without consulting me, it has been new-named NIAGARA FALLS PARK. This is sufficiently high-handed, it seems to me."

	var jAustenExcerpt = " The first error, and the worst, lay at her door. It was foolish, it was wrong, to take so active a part in bringing any two people together. It was adventuring too far, assuming too much, making light of what ought to be serious—a trick of what ought to be simple. She was quite concerned and ashamed, and resolved to do such things no more. Seldom, very seldom does complete truth belong to any human disclosure; seldom can it happen that something is not a little disguised, or a little mistaken; but where, as in this case, though the conduct is mistaken, the feelings are not, it may not be very material."

	var eBronteExcerpt = " She was not one that would have disturbed the house much on her own account. Every object she saw, the moment she crossed the threshold, appeared to delight her; and every circumstance that took place about her: except the preparing for the burial, and the presence of the mourners. I thought she was half silly, from her behaviour while that went on: she ran into her chamber, and made me come with her, though I should have been dressing the children: and there she sat shivering and clasping her hands, and asking repeatedly — 'Are they gone yet?'."

	var cDickensPoem = "Hear my prayer, O heavenly Father,<br>Ere I lay me down to sleep;<br>Bid Thy angels, pure and holy,<br>Round my bed their vigil keep.<br>My sins are heavy, but Thy mercy<br>Far outweighs them, every one;<br>Down before Thy cross I cast them,<br>Trusting in Thy help alone.<br>Keep me through this night of peril<br>Underneath its boundless shade;<br>Take me to Thy rest, I pray Thee,<br>When my pilgrimage is made.<br>None shall measure out Thy patience<br>By the span of human thought;<br>None shall bound the tender mercies<br>Which Thy Holy Son has bought.<br>Pardon all my past transgressions,<br>Give me strength for days to come;<br>Guide and guard me with Thy blessing<br>Till Thy angels bid me home.<br>"

	var gOrwellPoem = "Sometimes in the middle autumn days,<br>The windless days when the swallows have flown,<br>And the sere elms brood in the mist,<br>Each tree a being, rapt, alone,<br>I know, not as in barren thought,<br>But wordlessly, as the bones know,<br>What quenching of my brain, what numbness,<br>Wait in the dark grave where I go.<br>And I see the people thronging the street,<br>The death-marked people, they and I<br>Goalless, rootless, like leaves drifting,<br>Blind to the earth and to the sky;<br>Nothing believing, nothing loving,<br>Not in joy nor in pain, not heeding the stream<br>Of precious life that flows within us,<br>But fighting, toiling as in a dream.<br>So shall we in the rout of life<br>Some thought, some faith, some meaning save,<br>And speak it once before we go<br>In silence to the silent grave...<br>"

	var eHemmingwayPoem = "Never trust a white man,<br>Never kill a Jew,<br>Never sign a contract,<br>Never rent a pew.<br>Don't enlist in armies;<br>Nor marry many wives;<br>Never write for magazines;<br>Never scratch your hives.<br>Always put paper on the seat,<br>Don't believe in wars,<br>Keep yourself both clean and neat,<br>Never marry whores.<br>Never pay a blackmailer,<br>Never go to law,<br>Never trust a publisher,<br>Or you'll sleep on straw.<br>All your friends will leave you<br>All your friends will die<br>So lead a clean and wholesome life<br>And join them in the sky.<br>"

	var mTwainPoem = "Good-bye! a kind good-bye,<br>I bid you now, my friend,<br>And though 'tis sad to speak the word,<br>To destiny I bend<br>And though it be decreed by Fate<br>That we ne'er meet again,<br>Your image, graven on my heart,<br>Forever shall remain.<br>Aye, in my heart thoult have a place,<br>Among the friends held dear,<br>Nor shall the hand of Time efface<br>The memories written there.<br>Goodbye,<br>S.L.C.<br>"

	var jAustenPoem = "This little bag I hope will prove<br>To be not vainly made--<br>For, if you should a needle want<br>It will afford you aid.<br>And as we are about to part<br>T'will serve another end,<br>For when you look upon the Bag<br>You'll recollect your friend<br>"

	var eBrontePoem = "Hope was but a timid friend;<br>She sat without the grated den,<br>Watching how my fate would tend,<br>Even as selfish-hearted men.<br>She was cruel in her fear;<br>Through the bars, one dreary day,<br>I looked out to see her there,<br>And she turned her face away!<br>Like a false guard, false watch keeping,<br>Still, in strife, she whispered peace;<br>She would sing while I was weeping;<br>If I listened, she would cease.<br>False she was, and unrelenting;<br>When my last joys strewed the ground,<br>Even Sorrow saw, repenting,<br>Those sad relics scattered round;<br>Hope, whose whisper would have given<br>Balm to all my frenzied pain,<br>Stretched her wings, and soared to heaven,<br>Went, and ne'er returned again!<br>"

	var lHsunPoem = "To long and sleepless nights I’ve grown<br> accustomed in the spring<br>Fled with the wife and babe in arms,<br> my temples are graying.<br>’Mid dream there comes an image faint<br> -a loving mother’s tear.<br>On city walls the overlords’<br> e'er-changing banners rear.<br>I can but stand by looking on<br> as friends become new ghosts;<br>In anger face bayonet thickets<br> and search for verse ripostes.<br>The poem intoned, my gaze turns low<br> -one cannot write such down.<br>Moonlight simmers with watery sheen<br> upon my jet-black gown.<br>"

	var wCatherPoem = "IN the tavern of my heart<br>Many a one has sat before,<br>Drunk red wine and sung a stave,<br>And, departing, come no more.<br>When the night was cold without,<br>And the ravens croaked of storm,<br>They have sat them at my hearth,<br>Telling me my house was warm.<br>As the lute and cup went round,<br>They have rhymed me well in lay;--<br>When the hunt was on at morn,<br>Each, departing, went his way.<br>On the walls, in compliment,<br>Some would scrawl a verse or two,<br>Some have hung a willow branch,<br>Or a wreath of corn-flowers blue.<br>Ah! my friend, when thou dost go,<br>Leave no wreath of flowers for me;<br>Not pale daffodils nor rue,<br>Violets nor rosemary.<br>Spill the wine upon the lamps,<br>Tread the fire, and bar the door;<br>So despoil the wretched place,<br>None will come forevermore.<br>"

	var aHuxleyPoem = "My close-walled soul has never known<br>That innermost darkness, dazzling sight,<br>Like the blind point, whence the visions spring<br>In the core of the gazer's chrysolite...<br>The mystic darkness that laps God's throne<br>In a splendour beyond imagining,<br>So passing bright.<br>But the many twisted darknesses<br>That range the city to and fro,<br>In aimless subtlety pass and part<br>And ebb and glutinously flow;<br>Darkness of lust and avarice,<br>Of the crippled body and the crooked heart...<br>These darknesses I know.<br>"

	var cDickensCharacter = "Pip"

	var cDickensDialogue = " I had heard of Miss Havisham up town—everybody for miles round, had heard of Miss Havisham up town—as an immensely rich and grim lady who lived in a large and dismal house barricaded against robbers, and who led a life of seclusion.<br> I wished Joe had been rather more genteelly brought up, and then I should have been so too. I took the opportunity of being alone in the court-yard, to look at my coarse hands and my common boots.<br> Whatever I acquired, I tried to impart to Joe.<br> This statement sounds so well, that I can't in my conscience let it pass unexplained.<br> I wanted to make Joe less ignorant and common, that he might be worthier of my society and less open to Estella's reproach.<br> While my mind was thus engaged, I thought of the beautiful young Estella, proud and refined, coming towards me, and I thought with absolute abhorrence of the contrast between the jail and her.<br>"

	var gOrwellCharacter = "O'Brien"

	var gOrwellDialogue = " We control matter because we control the mind.<br> Reality is inside the skull.<br> But the rocks are full of the bones of extinct animals – mammoths and mastodons and enormous reptiles which lived here long before man was ever heard of.<br> We are not interested in those stupid crimes that you have committed.<br> The Party is not interested in the overt act: the thought is all we care about.<br> We do not merely destroy our enemies, we change them.<br> Do you understand what I mean by that?<br> But always – do not forget this, Winston – always there will be the intoxication of power, constantly increasing and constantly growing subtler.<br> Always, at every moment, there will be the thrill of victory, the sensation of trampling on an enemy who is helpless.<br> If you want a picture of the future, imagine a boot stamping on a human face – for ever.<br> Can you think of a single degradation that has not happened to you?<br>"

	var eHemmingwayCharacter = "Manolin"

	var eHemmingwayDialogue = " And the best fisherman is you.<br> I must give him something more than the belly meat then.<br> He is very thoughtful for us.<br> How old was I when you first took me in a boat?<br> I'll bring the luck with me.<br> Can I go out to get sardines for you for tomorrow?<br>"

	var mTwainCharacter = "Sawyer"

	var mTwainDialogue = " Boys, I know who's drowned -- it's us!<br> Say, Huck, if we find a treasure here, what you going to do with your share?<br> Yes, that's it, Huck -- that's it; though when you're burying it if you say 'Down bean; off wart; come no more to bother me!' it's better.<br> That's the way Joe Harper does, and he's been nearly to Coonville and most everywheres.<br> But say -- how do you cure 'em with dead cats?<br> Say -- what is dead cats good for, Huck?<br> I don't want any marks.<br> They always bury it under a ha'nted house or on an island, or under a dead tree that's got one limb sticking out.<br> Well, we've tried Jackson's Island a little, and we can try it again some time; and there's the old ha'nted house up the Still-House branch, and there's lots of deadlimb trees -- dead loads of 'em.<br>"

	var jAustenCharacter = "Elinor Dashwood"

	var jAustenDialogue = " I am afraid that the pleasantness of an employment does not always evince its propriety.<br> Do not you know my sister well enough to understand what she means?<br> Do not you know that she calls every one reserved who does not talk as fast, and admire what she admires as rapturously as herself?<br> My objection is this; though I think very well of Mrs. Jennings' heart, she is not a woman whose society can afford us pleasure, or whose protection will give us consequence.<br> But I did not love only him; -- and while the comfort of others was dear to me, I was glad to spare them from knowing how much I felt.<br> Now, I can think and speak of it with little emotion.<br> I would not have you suffer on my account; for I assure you I no longer suffer materially myself.<br>"

	var eBronteCharacter = "Heathcliff"

	var eBronteDialogue = " I seek no revenge on you.<br> That's not the plan.<br> The tyrant grinds down his slaves and they don't turn against him; they crush those beneath them.<br> Now, my bonny lad, you are mine!<br> And we'll see if one tree won't grow as crooked as another, with the same wind to twist it!<br> They won't do that, if they did, you must have me removed secretly; and if you neglect it you shall prove, practically, that the dead are not annihilated!<br> I have a right to kiss her, if she chooses, and you have no right to object.<br> I am not your husband: you needn't be jealous of me!<br> I want you to be aware that I know you have treated me infernally—infernally!<br> Do you hear?<br> And if you flatter yourself that I don't perceive it, you are a fool; and if you think I can be consoled by sweet words, you are an idiot.<br>"

	var mAlbomCharacter1 = "The Blue Man"
	var mAlbomCharacter2 = "the Captain"

	var mAlbomDialogue = " This is the greatest gift God can give you: to understand what happened in your life.<br> To have it explained.<br> It is the peace you have been searching for.<br> Strangers are just family you have yet to come to know.<br> No life is a waste.<br> The only time we waste is the time we spend thinking we are alone.<br> Time is not what you think.<br> Dying? Not the end of everything.<br> We think it is.<br> But what happens on Earth is only the beginning.<br> Sacrifice, you made one.<br> I made one. We all make them.<br> But you are angry over yours.<br> You kept thinking about what you lost.<br> You didn't get it. Sacrifice is a part of life.<br>"

	var lHsunCharacter = "Wei Lien-shu"

	var lHsunDialogue = " Changes take place so swiftly!<br> During the last half year I have virtually been a beggar; it's true, I could be considered a beggar.<br> However, I had my purpose: I was willing to beg for the cause, to go cold and hungry for it, to be lonely for it, to suffer hardship for it.<br> But I did not want to destroy myself.<br> So you see, the fact that one person wanted me to live on, proved extremely potent.<br> Now there is no one, nor one.<br> Ar the same time I feel I do nor deserve to live, nor, in my opinion, do some other people.<br> Yet, I am conscious of wanting to live on to spite those who wish me dead; for at least there is no one left who wants me to live decently, and so no one will be hurt.<br> I don't want to hurt such people.<br> But now there is no one, not one.<br> What a joy!<br> Wonderful!<br> I am now doing what I formerly detested and opposed.<br> I am now giving up all I formerly believed in and upheld.<br> I have really failed—but I have won.<br>"

	var eGaskellCharacter = "Margaret Hale"

	var eGaskellDialogue = " Are those the Gormans who made their fortunes in trade at Southampton?<br> Oh! I'm glad we don't visit them.<br> I don't like shoppy people.<br> Dixon! You forget to whom you are speaking.<br> You consider all who are unsuccessful in raising themselves in the world, from whatever cause, as your enemies, then, if I understand you rightly.<br> because you are a man, dealing with a set of men over whom you have, whether you reject the use of it or not, immense power, just because your lives and your welfare are so constantly and intimately interwoven.<br> Oh! how shocking! how pitiful!<br>"

	var wCatherCharacter = "Alexandra"

	var wCatherDialogue = " Since you have been here, ten years now, I have never really been lonely.<br> But I can remember what it was like before.<br> Now I shall have nobody but Emil.<br> But he is my boy, and he is tender-hearted.<br> But they are different, and now that they have farms of their own I do not see so much of them. We divided the land equally when Lou married.<br> They have their own way of doing things, and they do not altogether like my way, I am afraid.<br> Perhaps they think me too independent.<br> But I have had to think for myself a good many years and am not likely to change.<br> I had hoped you might understand, a little, why I do want to.<br> But I suppose that's too much to expect.<br> I've had a pretty lonely life, Emil.<br> Besides Marie, Carl is the only friend I have ever had.<br> But you show for it yourself, Carl.<br> I'd rather have had your freedom than my land.<br> All at once, in a single day, I lose everything; and I do not know why.<br> Emil, too, is going away.<br>"

	var aHuxleyCharacter = "John"

	var aHuxleyDialogue = " It was base, it was ignoble.<br> The murkiest den, the most opportune place, the strongest suggestion our worser genius can, shall never melt mine honour into lust.<br> Never, never!<br> Kill it, kill it, kill it.<br> Because I felt I ought to.<br> If Jesus could stand it. And then, if one has done something wrong.<br> Besides, I was unhappy; that was another reason.<br> But why do they laugh?<br>"

	// STEP 1: Go through all checkboxes and check if checkbox is checked

	var excerpt1 = "";
	var excerpt2 = "";
	var excerpt3 = "";
	var excerpt4 = "";
	var excerpt5 = "";
	var excerpt6 = "";
	var excerpt7 = "";
	var excerpt8 = "";
	var excerpt9 = "";
	var excerpt10 = "";
	var excerpt11 = "";
	var excerpt12 = "";

	var character1 = "";
	var character2 = "";
	var character3 = "";
	var character4 = "";
	var character5 = "";
	var character6 = "";
	var character7 = "";
	var character8 = "";
	var character9 = "";
	var character10 = "";
	var character11 = "";
	var character12 = "";

	var excerptChoice1 = "";
	var excerptChoice2 = "";
	var excerptChoice3 = "";

	var characterChoice1 = "Anonymous 1:"
	var characterChoice2 = "Anonymous 2:"
	var characterChoice3 = "Anonymous 3:"

	$("input").change( function() {
		if ($("#au1 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt1 = cDickensExcerpt;
				//console.log(excerpt1);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt1 = cDickensPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character1 = cDickensCharacter;
				excerpt1 = cDickensDialogue;
			}
		} else {
			excerpt1 = "";
		}

		if ($("#au2 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt2 = gOrwellExcerpt;
				//console.log(excerpt2);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt2 = gOrwellPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character2 = gOrwellCharacter;
				excerpt2 = gOrwellDialogue;
			}
		} else {
			excerpt2 = "";
		}

		if ($("#au3 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt3 = eHemmingwayExcerpt;
				//console.log(excerpt3);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt3 = eHemmingwayPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character3 = eHemmingwayCharacter;
				excerpt3 = eHemmingwayDialogue;
			}
		} else {
			excerpt3 = "";
		}

		if ($("#au4 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt4 = mTwainExcerpt;
				//console.log(excerpt4);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt4 = mTwainPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character4 = mTwainCharacter;
				excerpt4 = mTwainDialogue;
			}
		} else {
			excerpt4 = "";
		}

		if ($("#au5 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt5 = jAustenExcerpt;
				//console.log(excerpt5);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt5 = jAustenPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character5 = jAustenCharacter;
				excerpt5 = jAustenDialogue;
			}
		} else {
			excerpt5 = "";
		}

		if ($("#au6 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt6 = eBronteExcerpt;
				//console.log(excerpt6);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt6 = eBrontePoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character6 = eBronteCharacter;
				excerpt6 = eBronteDialogue;
			}
		} else {
			excerpt6 = "";
		}

		if ($("#au7 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt7 = aHuxleyExcerpt;
				//console.log(excerpt7);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt7 = aHuxleyPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character7 = aHuxleyCharacter;
				excerpt7 = aHuxleyDialogue;
			}
		} else {
			excerpt7 = "";
		}

		if ($("#au8 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt8 = mAlbomExcerpt;
				//console.log(excerpt8);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				$("#au8 input[type='checkbox']:checked").removeAttr("checked");
				$("#au8 input[type='checkbox']").attr("disabled", "true");
				excerpt8 = "";
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character8 = mAlbomCharacter1;
				character9 = mAlbomCharacter2;
				excerpt8 = mAlbomDialogue;
			}
		} else {
			excerpt8 = "";
		}

		if ($("#au9 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt9 = vWoolfExcerpt;
				//console.log(excerpt9);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				$("#au9 input[type='checkbox']:checked").removeAttr("checked");
				$("#au9 input[type='checkbox']").attr("disabled", "true");
				excerpt9 = "";
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				$("#au9 input[type='checkbox']:checked").removeAttr("checked");
				$("#au9 input[type='checkbox']").attr("disabled", "true");
				excerpt9 = "";
			}
		} else {
			excerpt9 = "";
		}

		if ($("#au10 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt10 = lHsunExcerpt;
				//console.log(excerpt10);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt10 = lHsunPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character10 = lHsunCharacter;
				excerpt10 = lHsunDialogue;
			}
		} else {
			excerpt10 = "";
		}

		if ($("#au11 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt11 = wCatherExcerpt;
				//console.log(excerpt11);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				excerpt11 = wCatherPoem;
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character11 = wCatherCharacter;
				excerpt11 = wCatherDialogue;
			}
		} else {
			excerpt11 = "";
		}

		if ($("#au12 input[type='checkbox']").is(":checked")) {
			if ($("#prose input[type='radio']").is(":checked")) {
				excerpt12 = eGaskellExcerpt;
				//console.log(excerpt12);
			} else if ($("#poem input[type='radio']").is(":checked")) {
				$("#au12 input[type='checkbox']:checked").removeAttr("checked");
				$("#au12 input[type='checkbox']").attr("disabled", "true");
				excerpt12 = "";
			} else if ($("#dialogue input[type='radio']").is(":checked")) {
				character12 = eGaskellCharacter;
				excerpt12 = eGaskellDialogue;
			}
		} else {
			excerpt12 = "";
		}

	});

	// STEP 2: Combine all selected excerpts and store them in a variable

	$('input').on('change', function (e) {

    	if ($('input[type=radio]:checked').length === 1) {
    		if ($("#poem input[type='radio']").is(":checked")) {
    			$("#choice1text").attr("disabled", "true");
    			$("#choice2text").attr("disabled", "true");
    			$("#choice3text").attr("disabled", "true");

    			excerptChoice1 = ""
    			excerptChoice2 = ""
    			excerptChoice3 = ""
     		} else {
     			excerptChoice1 = document.getElementById("choice1text").value;
    			excerptChoice2 = document.getElementById("choice2text").value;
    			excerptChoice3 = document.getElementById("choice3text").value;
     		}

	    	var selectedExcerpt = excerpt1 + excerpt2 + excerpt3 + excerpt4 + excerpt5 + excerpt6 + excerpt7 + excerpt8 + excerpt9 + excerpt10 + excerpt11 + excerpt12 + excerptChoice1 + excerptChoice2 + excerptChoice3;

	        console.log(selectedExcerpt);

	        var originalWorks = [excerpt1, excerpt2, excerpt3, excerpt4, excerpt5, excerpt6, excerpt7,  excerpt8, excerpt9, excerpt10, excerpt11, excerpt12, excerptChoice1, excerptChoice2, excerptChoice3]

	        var original1 = "";
	        var original2 = "";
	        var original3 = "";

	        function showOriginalWorks() {
	        	if (original1 === "") {

	        		for (j=0; j<=14; j++) {
	        			if (originalWorks[j] != "") {
	        				original1 = originalWorks[j];
	        			}
	        		}

	        	};

	        	if (original2 === "") {

	        		for (i=0; i<=14; i++) {
	        			if (originalWorks[i] != "" && originalWorks[i] != original1) {
	        				original2 = originalWorks[i];
	        			}
	        		}

	        	};

	        	if (original3 === "") {

	        		for (k=0; k<=14; k++) {
	        			if (originalWorks[k] != "" && originalWorks[k] != original1 && originalWorks[k] != original2) {
	        				original3 = originalWorks[k];
	        			}
	        		}

	        	};

	        	$("#article1 p").text(original1);
	        	$("#article2 p").text(original2);
	        	$("#article3 p").text(original3);
	        }

	        $('#show-original-works button').click( function() {
	        	//$(this).attr('disabled', true);
	        	showOriginalWorks();
	        });

	        $('#generateButton button').click( function() {
	        	if ($("#prose input[type='radio']").is(":checked")) {
	        		splitString(selectedExcerpt, dot);
	        	} 

	        	if ($("#poem input[type='radio']").is(":checked")) {
	        		splitPoem(selectedExcerpt, lineBreak);
	        	}

	        	if ($("#dialogue input[type='radio']").is(":checked")) {
	        		splitDialogue(selectedExcerpt, lineBreak);
	        	}
	    	});
	    }

	});

	// STEP 3: Use function to slpit selectedExcerpt
	// FUNCTIONS that GET RANDOM NUMBER

	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min)) + min;
	}

	// FUNCTIONS that SPLIT THE PARAGRAPH

	var dot = '.'
	var multiSeparator = /(.*?\?)|(.*?\.)|(.*?!)/
	var lineBreak = '<br>'

	function splitString(excerptName, separator) {
		var arrayOfStrings = excerptName.split(separator);
		var newSentence = ["newSentence0", "newSentence1", "newSentence2", "newSentence3", "newSentence4", "newSentence5", "newSentence6", "newSentence7"]

		for (j=0; j<=7; j++) {
			newSentence[j] = arrayOfStrings[getRandomInt(0, (arrayOfStrings.length-1))];

			for (i=arrayOfStrings.length-1; i>=0; i--) {
				if (arrayOfStrings[i] === newSentence[j]) {
					arrayOfStrings.splice(i, 1);
				}
			}
		}

		var finalProse = newSentence[0] + '.' + newSentence[1] + '.' + newSentence[2] + '.' + newSentence[3] + '.' + newSentence[4] + '.' + newSentence[5] + '.' + newSentence[6] + '.' + newSentence[7] + '.'

		console.log(arrayOfStrings);
		console.log(finalProse);

		$('.result p').text(finalProse);
	}

	function splitPoem(excerptName, separator) {
		var arrayOfPoems = excerptName.split(separator);
		var newPoem = ["newPoem0", "newPoem1", "newPoem2", "newPoem3", "newPoem4", "newPoem5", "newPoem6", "newPoem7", "newPoem8", "newPoem9", "newPoem10", "newPoem11", "newPoem12", "newPoem13", "newPoem14"]

		for (j=0; j<=14; j++) {
			newPoem[j] = arrayOfPoems[getRandomInt(0, (arrayOfPoems.length-1))];

			for (i=arrayOfPoems.length-1; i>=0; i--) {
				if (arrayOfPoems[i] === newPoem[j]) {
					arrayOfPoems.splice(i, 1);
				}
			}
		}

		var finalPoem = [
					newPoem[0],
		 			newPoem[1], 
		 			newPoem[2], 
		 			newPoem[3], 
		 			newPoem[4], 
		 			newPoem[5], 
		 			newPoem[6],
		 			newPoem[7],
		 			newPoem[8],
		 			newPoem[9], 
		 			newPoem[10], 
		 			newPoem[11], 
		 			newPoem[12],
		 			newPoem[13],
		 			newPoem[14]
		].join("\n");

		console.log(arrayOfPoems);
		console.log(finalPoem);

		$('.result p').text(finalPoem);
	}

	function splitDialogue(excerptName, separator) {
		var arrayOfDialogues = excerptName.split(separator);
		var newDialogue = ["newDia0", "newDia1", "newDia2", "newDia3", "newDia4", "newDia5", "newDia6", "newDia7", "newDia8", "newDia9", "newDia10", "newDia11"]

		for (j=0; j<=12; j++) {
			newDialogue[j] = arrayOfDialogues[getRandomInt(0, (arrayOfDialogues.length-1))];

			for (i=arrayOfDialogues.length-1; i>=0; i--) {
				if (arrayOfDialogues[i] === newDialogue[j]) {
					arrayOfDialogues.splice(i, 1);
				}
			}
		}

		var finalDialogue = characterChoice1 + newDialogue[0] + newDialogue[1] + "\n" + characterChoice2 + newDialogue[2] + newDialogue[3] + newDialogue[4] + "\n" + characterChoice1 + newDialogue[5] + "\n" + characterChoice2 + newDialogue[6] + newDialogue[7] + newDialogue[8] + "\n" + characterChoice3 + newDialogue[9] + newDialogue[10] + newDialogue[11];

		console.log(arrayOfDialogues);
		console.log(finalDialogue);

		$('.result p').text(finalDialogue);
	}

})