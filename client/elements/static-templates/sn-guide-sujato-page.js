import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCSNGuide extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <div id="page-wrap">
        <main>
          <section>
            <article>
              <h1>${_`The Linked Discourses: the blueprint for Buddhist philosophy`}</h1>
              <p class="byline">${_`Bhikkhu Sujato, 2019`}</p>
              <nav class="contents">
                <ol>
                  <li>${_`<a href="#item1">How the Saṁyutta is Organized</a>`}</li>
                  <li>${_`<a href="#item2">The Book With Verses</a>`}</li>
                  <li>${_`<a href="#item3">The Book of Causation</a>`}</li>
                  <li>${_`<a href="#item4">The Book of the Aggregates</a>`}</li>
                  <li>${_`<a href="#item5">The Great Book</a>`}</li>
                  <li>${_`<a href="#item6">A Brief Textual History</a>`}</li>
                </ol>
              </nav>
              <p>
                ${_`The Saṁyutta Nikāya is the third of the four main divisions in the Sutta Piṭaka of the Pali Canon (<i lang="pi">tipiṭaka</i>). It is translated here as <cite class="text-translated">Linked Discourses</cite>, and has been previously translated as the <cite class="text-translated">Connected Discourses</cite> or the <cite class="text-translated">Kindred Sayings</cite>. As the title suggests, its discourses are grouped thematically. These thematic groups of texts are called <i lang="pi">saṁyuttas</i>, and the Saṁyutta Nikāya is the collection of such <i lang="pi">saṁyuttas</i>.`}
              </p>
              <p>
                ${_`The Saṁyutta Nikāya consists of 56 <i lang="pi">saṁyuttas</i> collected in five large “books” (<i lang="pi">vagga</i>), containing over a thousand discourses. The Mahāsaṅgīti text as used on SuttaCentral contains 2837 discourses; but the total number is somewhat arbitrary, as it depends on how the abbreviated texts are expanded, which differs in different editions. This variation, however, applies only to the way the texts are counted, and does not affect the content, which is virtually identical in every edition.`}
              </p>
              <p>
                ${_`It is in the Saṁyutta Nikāya that we find the core doctrines that have formed the basis for all subsequent Buddhist philosophy. It is largely structured around major doctrinal sections that correspond with the template of the four noble truths.`}
              </p>
              <dl>
                <dt>${_`Suffering`}</dt>
                <dd>${_`Aggregates (<a class="ref" href="/sn22">SN 22</a>)`}</dd>
                <dd>${_`Six sense media (<a class="ref" href="/sn35">SN 35</a>)`}</dd>
                <dt>${_`The origin of suffering`}</dt>
                <dd>${_`Dependent origination (<a class="ref" href="/sn12">SN 12</a>)`}</dd>
                <dt>${_`The cessation of suffering`}</dt>
                <dd>${_`Dependent cessation (<a class="ref" href="/sn12">SN 12</a>)`}</dd>
                <dd>${_`The unconditioned (<a class="ref" href="/sn43">SN 43</a>)`}</dd>
                <dt>${_`The practice that leads to the end of suffering`}</dt>
                <dd>
                  ${_`The chapters of the final book, the Mahāvagga (<a class="ref" href="/sn-mahavaggasamyutta">SN 45–54</a>)`}
                </dd>
              </dl>
              <p>
                ${_`The four noble truths themselves are treated in the final chapter, the Sacca Saṁyutta (<a class="ref" href="/sn56">SN 56</a>).`}
              </p>
              <p>
                ${_`Not all the <i lang="pi">saṁyuttas</i> fit so easily into this scheme. There are many minor <i lang="pi">saṁyuttas</i>, which are sometimes connected with a major <i lang="pi">saṁyutta</i>, and sometimes not. In addition, the first book, the Sagāthāvagga, is not organized by subject. Rather, the thematic linking here is the type of person involved in the discourse. These texts are also unified in literary form; they are in mixed prose and verse.`}
              </p>
              <p>
                ${_`This collection has a full parallel in the Saṁyuktāgama (SA) of the Sarvāstivāda school in Chinese translation. In addition, there are two partial collections in Chinese (SA-2 and SA-3) as well as a number of miscellaneous or fragmentary texts in Chinese, Sanskrit, and Tibetan. Much of the organizational structure of SN is shared with SA, suggesting that this structure preceded the split between these two collections.`}
              </p>
              <h2 id="item1">${_`How the Saṁyutta is Organized`}</h2>
              <p>
                ${_`The Saṁyutta Nikāya is conveniently divided into five large <i lang="pi">vaggas</i> or “books”. As noted in the General Guide, the Saṁyutta is an example of the “nested <i lang="pi">vagga</i>” structure, where the (unusual) <i lang="pi">vagga</i> as “book” includes many of the normal kind of “small” <i lang="pi">vagga</i>, i.e. groups of about ten suttas.`}
              </p>
              <p>
                ${_`Within each of the five “big” <i lang="pi">vaggas</i> there are several <i lang="pi">saṁyuttas</i>, each containing a set of discourses that are linked by person or theme (sometimes both). For example, each of the discourses in <a class="ref" href="/sn5">SN 5</a> features a nun (<i lang="pi">bhikkhunī</i>), while each discourse in <a class="ref" href="/sn24">SN 24</a> deals with the subject of “views” (<i lang="pi">diṭṭhi</i>).`}
              </p>
              <p>
                ${_`In SuttaCentral, the discourses of the Saṁyutta are referenced by <i lang="pi">saṁyutta</i> and <i lang="pi">sutta</i>. Thus <a class="ref" href="/sn1.1">SN 1.1</a> is the first discourse of the first <i lang="pi">saṁyutta</i>, while <a class="ref" href="/sn56.11">SN 56.11</a> is the eleventh discourse of the fifty-sixth <i lang="pi">saṁyutta</i>. The SuttaCentral system is the same as that used by Bhikkhu Bodhi in his <cite class="book">Connected Discourses of the Buddha</cite> and on Access to Insight.`}
              </p>
              <p>${_`The five books are named according to various principles:`}</p>
              <ul>
                <li>
                  ${_`Vol. 1 Sagāthāvagga contains sets of discourses that contain verses, as indicated by the title.`}
                </li>
                <li>
                  ${_`Vols. 2–4 are each named after the first and largest <i lang="pi">saṁyutta</i> of the book.`}
                </li>
                <li>
                  ${_`Vol. 5 is called the “Great Book” (<i lang="pi">Mahāvagga</i>) due to its size. The Chinese version is called, appropriately, “The Book of the Path” (<i lang="pi">Maggavagga</i>).`}
                </li>
              </ul>
              <p>
                ${_`In this essay I will give an overview of each of the five books. However, I will not summarize each of the 56 <i lang="pi">saṁyuttas</i>, for that would make it far too long. For such summaries, see the lists of suttas on SuttaCentral, which include explanations of the various structural levels of the <i lang="pi">saṁyutta</i>, as well as individual discourses. Here I will focus more on general questions of content and interpretation.`}
              </p>
              <h2 id="item2">${_`The Book With Verses`}</h2>
              <p>
                ${_`The “Book With Verses” (Sagāthāvagga) is divided into eleven <i lang="pi">saṁyuttas</i>, with a total of 271 suttas.`}
              </p>
              <p>
                ${_`While most of the Saṁyutta is organized around subject matter, here the organizational principle is <em>people</em>. Each <i lang="pi">saṁyutta</i> depicts a conversation involving the Buddha or his disciples with a different person or kind of person, such as gods, kings, nuns, or brahmins.`}
              </p>
              <p>
                ${_`A typical sutta has a bare narrative framework, where someone comes to the Buddha and utters a verse, and the Buddha replies with a better one. In some cases, notably the Sakka Saṁyutta, the narrative element is developed into a lively exchange.`}
              </p>
              <h3>${_`Verse & Prose`}</h3>
              <p>
                ${_`Each of the suttas in this collection contains verse with a prose narrative background, although in many cases the prose has been omitted through abbreviation. This kind of literary form is common in Indic literature, so it is worth spending a little time to understand it.`}
              </p>
              <p>
                ${_`The oldest Indic literature is the Ṛg Veda, a collection of about 10,600 verses. These were passed down in the oral tradition of the brahmins for thousands of years. One of the keys to accurate transmission of this sacred lore was the use of metre: rhythmic patterns of long and short syllables. Such metres provide a scaffolding that organize words, and hence knowledge, in a form that is as memorable as a song; and indeed, they would have been sung in a simple melody. In this way, the verses become set in a precise and defined form, one that may be preserved and passed down unaltered through the generations.`}
              </p>
              <p>
                ${_`But poetry is not just technically complex; it is ecstatic, inspired, divine. The brahmins did not see the Vedas as being authored in the normal sense, but channeled as the divine word of god (Brahmā) through human sages (Pali: <i lang="pi">isi</i>; Sanskrit: <i lang="san">ṛṣi</i>). The Vedic verses constantly allude to stories, myths, and events—for example, the slaying of the dragon Vṛtra by the god-hero Indra—that were well known to their audience, and thus did not require spelling out in the text itself. The verses are in fact hymns, invoked in ritual to heighten the emotional response, to inspire awe, fear, or devotion. They are given meaning and context by the background understanding of the mythology. Thus the verses imply a story, of which they are the emotional and narrative climax.`}
              </p>
              <p>
                ${_`So we can think of a verse as the seed crystal around which a more flexible prose narrative grows and evolves. The prose may be adjusted to time and place, presented in greater or lesser detail, or adapted for the audience. It may comment on contemporary events or express a personal perspective; but the verse is (in theory) always the same.`}
              </p>
              <p>
                ${_`We are speaking here of the verses found in the Sagāthāvagga. But it is worth bearing in mind that there are plenty of verses in the <i lang="pi">nikāyas</i> outside the Sagāthāvagga, and they are not all of the same type. Here is a brief summary of the main verse types you will encounter. This is just to help a reader get a rough orientation, and exceptions and blurred lines are easily found.`}
              </p>
              <dl>
                <dt>${_`Climactic verse`}</dt>
                <dd>
                  ${_`As in the Sagāthāvagga, such verses appear at the climax of a narrative. The narrative may be very thin, or even absent, yet it is always assumed. Sometimes it is supplied in later commentaries. This form is used outside the Sagāthāvagga in such texts as the Dhammapada, Udāna, and Jātakas. We might also consider under this head longer devotional verses such as those of Sela (<a class="ref" href="/mn92">MN 92</a>, <a class="ref" href="/snp3.7">Snp 3.7</a>).`}
                </dd>
                <dt>${_`Independent poems`}</dt>
                <dd>
                  ${_`A set of verses that makes up a unified literary and thematic whole, and is independent of a prose narrative. There are relatively few of these in the four <i lang="pi">nikāyas</i>, but they dominate the Sutta Nipāta. The last <i lang="pi">vagga</i> of that book contains a series of such independent poems, all united within a narrative set in verse. Some of the verses of the Sagāthāvagga might be considered under this head, if the prose narrative is dismissed as negligible.`}
                </dd>
                <dt>${_`Devotional invocations`}</dt>
                <dd>
                  ${_`Such texts as the Mahāsamaya Sutta (<a class="ref" href="/dn20">DN 20</a>), the Āṭāṇātiya Sutta (<a class="ref" href="/dn32">DN 32</a>), or the Isigili Sutta (<a class="ref" href="/mn116">MN 116</a>) occupy an unusual place in the early Buddhist corpus. Thin in their doctrinal content, they appear more as incantations for protection or blessings.`}
                </dd>
                <dt>${_`Summary verse`}</dt>
                <dd>
                  ${_`Like the climactic verses, these accompany prose. But rather than being an emotional highlight, they serve as a mnemonic device to help preserve the content of the prose. These are most familiar in the <i lang="pi">uddānas</i> that appear at the end of <i lang="pi">vaggas</i> and other sections throughout the EBTs, typically listing a keyword from each text and thus acting as a kind of table of contents. These are not to be confused with the genre of climactic verse known as <i lang="pi">udāna</i>, “inspired saying”, which, despite the similar spelling, is a completely different word. In addition to the formal <i lang="pi">uddānas</i>, we can consider under this head many of the verses of the Aṅguttara, especially in the Fours, which often serve purely to summarize the content of the prose, although occasionally they are developed into a more satisfying poetic reflection on the theme. Occasionally a longer sutta will contain mixed portions of prose and summary verse, notably the Dvayatānupassanā Sutta (<a class="ref" href="/snp3.12">Snp 3.12</a>). A much later development of this style is found in the Lakkhaṇa Sutta (<a class="ref" href="/dn30">DN 30</a>).`}
                </dd>
              </dl>
              <p>
                ${_`In my translations, I have rendered verse as prose broken into lines, rarely attempting poetic virtue. To render these highly didactic verses, dense with doctrinal terms, into genuine English verse is no easy task. In many cases, especially with the summary verses, the text in Pali has little in the way of literary merit. Other texts, especially the later verses, display learned command of complex and sophisticated literary forms such as is rare to find, even among writers of English poetry. Combined with the often obscure vocabulary, rare and archaic grammatical forms, and syntactic flexibility of Pali verses, the task of rendering them in readable and accurate English is hard and time-consuming, even without aspiring to poetic beauty. So my verse is workmanlike, and I can only hope that poets take up the task of rendering selected verses with the beauty they deserve.`}
              </p>
              <h3>${_`The Play of the Gods`}</h3>
              <p>
                ${_`In the Book With Verses we see the ancient Vedic pattern adopted to serve a Buddhist purpose. It is no coincidence that here we meet various deities, many of whom hail from Vedic mythology, in contexts that sometimes directly respond to specific Vedic or brahmanical passages.`}
              </p>
              <p>
                ${_`The casual appearance of deities throughout these texts is, of course, problematic. These days, we don’t normally see gods manifesting with glorious light at spiritual gatherings. So how are we to understand this?`}
              </p>
              <p>
                ${_`One obvious answer is that such texts are literally true: gods of these names did appear in exactly the way depicted and have these exact conversations. If so, why are such things not seen in our day? One might be tempted to point regretfully to the decline of religious and ethical life in modern times. But this is just another unverifiable claim: how could we possibly know such a thing? And it creates an even bigger problem. For when we see the past as a uniquely privileged era, one blessed with a degree of purity and wholesomeness that is lost to us, then what is the point of practice? Are we not better off pining for the glories of old, and wishing for the renewal of the Dhamma under the future Buddha Metteyya? Such views forget a basic principle of the teaching: it is <i lang="pi">akāliko</i>—we can realize it here & now, no matter when we live.`}
              </p>
              <p>
                ${_`So perhaps we are better off adopting a skeptical view: such deities do not exist, and such events did not happen. They are simply religious propaganda, fictions whose purpose is to convert simple people by importing a familiar Indic cosmology. If there is any reality at all to them, it is purely psychological; such beings represent different aspects of the mind. Despite its scientific appearance, this reductive view, too, is unsustainable. The ideas of rebirth and the existence of multiple dimensions of existence are not found just in popular narratives, but are central to core teachings such as dependent origination and the four noble truths—the second noble truth is precisely “the craving that leads to future rebirth” (<i lang="pi">yāyaṁ taṇhā ponobbhavikā</i>). They can’t be simply written off as an uncritical inheritance from Indian culture.`}
              </p>
              <p>
                ${_`These views are polar opposites; and like all pairs of opposites, they share more in common than they like to admit. Both of them are concerned with <em>facts</em>, with whether these events were true or not. But the texts as we have them are not collections of facts: they are stories. And the significance of a story lies in its meaning. Whether a story is real or not is at best secondary, and often beside the point entirely. It serves to engage an audience, provoking wonder, surprise, awe, or joy.`}
              </p>
              <p>
                ${_`The Buddhist traditions understood this well, as evidenced by the textual situation. While in some cases the verses and story are tightly linked, it is very common for the same verse to be accompanied by completely different background narratives, or by no background at all. The verses, which convey the essential Dhamma teaching, the core of meaning and emotion, remain the same, while the story varies. To insist on the factuality or otherwise of the story is to miss the point. The story provides a context that brings the teaching in the verses to life for an audience.`}
              </p>
              <p>
                ${_`Thus the best lens through which to see such texts is neither as history nor as propaganda but as sacred story; that is, as myth. Each of the short suttas tells a story that conveys a timeless spiritual truth in a way that spoke to the audience of that time and place. They take place within a wider mythology that helps people find their place in a vast and unknown cosmos.`}
              </p>
              <p>
                ${_`As always, the early Buddhist response to the earlier religious traditions is complex and nuanced. And, while it is true that many of the details of both literary form and subject matter are drawn from the Vedas, it is in the differences that the distinctively Buddhist character of the texts shows itself.`}
              </p>
              <p>
                ${_`In the Vedas, the human agents are merely the transmitters of the sacred word of the gods. Exactly how this happened is unclear, but it probably involved a combination of drugs (<i lang="pi">soma</i> is one of the great Vedic deities), ritual, creative inspiration, traditional lore, devotion, and communal empowerment, all of which inspired the sacred poets to heights of ecstatic visioning through which the words of the gods manifested. But regardless of the details, the key point is that the traditions regarded the human agent in the relationship as incidental, and the real value of the texts as stemming from the divine.`}
              </p>
              <p>
                ${_`In the Buddhist texts, the situation is reversed. The gods do not inspire human hosts, they speak for themselves. And they are no infallible reserves of Truth; they may be right or wrong, skillful or foolish, just like anyone else. While the magnificence of their presence is emphasized, the ultimate effect is to show the worthlessness of such displays, for the gods are constantly being schooled by the Buddha. The most characteristic form of dialogue is where a god presents an idea that is pretty good, within in a limited, mundane (i.e. Vedic) world view, but which the Buddha elevates to an entirely new level.`}
              </p>
              <p>
                ${_`It is an elementary axiom of Buddhism that the gods are not metaphysical, in the sense that they do not exist in a separate realm governed by different principles than our own. On the contrary, they are impermanent and suffering, trapped in the cycle of transmigration just like us. It follows from this that they do not have access to any special form of knowledge or wisdom. Buddhists do not look to the gods for teachings; rather, the Buddha is “teacher of gods and humans”.`}
              </p>
              <p>
                ${_`I have focused on the interactions with divine beings in this collection, as these require the most contextualizing. But not all of the collections feature divine beings. Many of the <i lang="pi">saṁyuttas</i> feature kinds of people familiar from other texts of the time. And even when divine beings are involved, in the majority of cases, the verses themselves do not require a divine setting, as there’s nothing about the gods and their divine dramas in the verses themselves.`}
              </p>
              <p>
                ${_`Some of the texts in this collection are well known and widely quoted, such as the invitation of Brahmā or the nun Vajirā’s simile of the person as a chariot. Most of the suttas here have parallels in the Chinese Saṁyuktāgama translations; the partial translations SA-2 and SA-3 include Sagāthāvagga material. In addition, many of the verses have parallels elsewhere throughout the Buddhist literature in all languages.`}
              </p>
              <h2 id="item3">${_`The Book of Causation`}</h2>
              <p>
                ${_`The Book of Causation (Nidānavagga) is the second of the five books of the Linked Discourses. It is named after the first and longest section, the Nidāna Saṁyutta. This deals with causation through the core Buddhist teaching of dependent origination, which explains how rebirth happens without a soul. The next three <i lang="pi">saṁyuttas</i> can be seen as appendices to the Book of Causation, dealing with the elimination of the suffering of transmigration (<a class="ref" href="/sn13">SN 13</a>), various sets of conditioned elements (<a class="ref" href="/sn14">SN 14</a>), and the unknowability of the extent of transmigration (<a class="ref" href="/sn15">SN 15</a>). The remaining six <i lang="pi">saṁyuttas</i> are not related thematically. Instead, they are mostly grouped by person rather than subject.`}
              </p>
              <p>
                ${_`The theme of causation runs through all the Buddha’s teaching. We find it in contexts such as meditation practice, societal ills, biological evolution, medicine, psychological stress, and many more. However, when we refer to dependent origination we are not speaking about a general principle of causality—although such a principle is presented at <a class="ref" href="/sn12.21">SN 12.21</a>—but of a specific series of conditional links laying bare how suffering originates and how it ends. As such, it is an extended treatment of the second and third noble truths (<a class="ref" href="/sn12.27">SN 12.27</a>). It integrates psychological and existential aspects of suffering, showing how, when bound by craving, we make choices that bind us to transmigrating into future lives (<a class="ref" href="/sn12.38">SN 12.38</a>). The reason why we have not escaped the process of rebirth is that we do not understand dependent origination (<a class="ref" href="/sn12.60">SN 12.60</a>). Thus one of the core purposes of the teaching is to explain how rebirth takes place without speaking in terms of “me” or “mine” (<a class="ref" href="/sn12.37">SN 12.37</a>).`}
              </p>
              <p>
                ${_`It is a deeply human need to want to understand how things came to be. Virtually every religious or spiritual path feels the need to offer some kind of explanation of where this world came from and what is our place in it. Such creation myths are found all over the world, and bear striking resemblances. They speak of a time when the world was formless, covered in a watery darkness, before light appeared and the world took shape. In the usual way of myths, these stories work at multiple levels, reflecting both the physical evolution of the planet (macrocosm) and the growth of an individual in the womb (microcosm).`}
              </p>
              <p>
                ${_`Long before the Buddha, the Nasadiya Sukta of the Ṛg Veda (10.129) told the story of creation in a radically new way. It drew upon the motifs of the classic creation myth—water, darkness, formlessness—but showed their development with a new emphasis on desire and agency. Creation evolved not from divine decree, but due to the energies found within. And we cannot know what came before this process; even the highest God came afterwards.`}
              </p>
              <p>
                ${_`The Buddha shared the epistemological humility of the Nasadiya Sukta, insisting that the ultimate origin of things was unknowable (<a class="ref" href="/sn15.1">SN 15.1</a>). Dependent origination, indeed, took things much further, entirely dispensing with both theology and mythology. However, it retained the richness and depth of the mythology, encapsulating within its sparse formulation both immediate experience and cosmic transmigration.`}
              </p>
              <p>
                ${_`The Nidāna Saṁyutta begins by stating (<a class="ref" href="/sn12.1">SN 12.1</a>) and defining (<a class="ref" href="/sn12.2">SN 12.2</a>) each of the terms in the standard 12-linked chain, definitions which are assumed to apply throughout. Remaining discourses iterate on this theme, introducing new perspectives and formulations. These sometimes vary the standard 12 links, and so can shed light on unexpected nuances and hidden depths. Here’s a summary of the definitions given for the 12 links, together with some explanatory notes.`}
              </p>
              <dl>
                <dt>${_`Ignorance (<i lang="pi">avijjā</i>)`}</dt>
                <dd>
                  ${_`Not understanding the four noble truths.`}
                  <aside class="list-note">
                    ${_`This does not, of course, mean ignorance of everyday facts and details. A Buddha or an arahant is not omniscient.`}
                  </aside>
                </dd>
                <dt>${_`Choices (<i lang="pi">saṅkhārā</i>)`}</dt>
                <dd>
                  ${_`Intentional acts (<i lang="pi">kamma</i>) of good or bad, which are expressed through body, speech, or mind.`}
                  <aside class="list-note">
                    ${_`The Indic term <em>saṅkhāra</em> may refer to any kind of activity that generates a result. It is used in a mundane context for such things as construction work. The Vedic ritual is a <em>saṅkhāra</em>, which was intended to produce a result of benefit in this life or the next. In Buddhism, <em>saṅkhāra</em> is sometimes used in a general sense of “conditioned (and conditioning) phenomena”. In dependent origination, however, it is defined as moral choices or intentions to do good or bad (<a class="ref" href="/sn12.51">SN 12.51</a>). A <em>saṅkhāra</em> is a force or energy in the mind that propels consciousness towards rebirth in a particular state. This may be consciously formulated as a wish or aspiration (see <a class="ref" href="/mn120">MN 120</a>), but is normally unconscious, i.e. born out of ignorance.`}
                  </aside>
                </dd>
                <dt>${_`Consciousness (<i lang="pi">viññāṇa</i>)`}</dt>
                <dd>
                  ${_`The six kinds of sense consciousness.`}
                  <aside class="list-note">
                    ${_`In the suttas, all forms of consciousness are regarded as making up the “stream of consciousness” (<i lang="pi">viññāṇasota</i>) that is established both in this life and the next (<a class="ref" href="/dn28">DN 28</a>). This consciousness is empowered and directed by the choices that we have made.`}
                  </aside>
                </dd>
                <dt>${_`Name & form (<i lang="pi">nāma-rūpa</i>)`}</dt>
                <dd>
                  ${_`“Name” is various mental factors (feeling, perception, attention, contact, and intention), while “form” is the four material elements that make up the body.`}
                  <aside class="list-note">
                    ${_`This is a tricky concept. It stems from Upaniṣadic usage, where it refers to the various individuated entities in the world, each with their own “form” and “name”. Each of the rivers on the earth, to take a metaphor from the Prasna Upaniṣad (6.5), has its own individual shape, and is called by its own name; but when they return to the ocean they lose their names and shapes and are just known as the great ocean. The ocean in this metaphor stands for consciousness, which in the Upaniṣads is taken to be the eternal and infinite divinity of the cosmos. The Buddha directly rebuts this idea by showing that consciousness and name & form are dependent on each other. In <a class="ref" href="/dn15">DN 15</a> <cite class="text-translated">The Great Discourse on Causation</cite> (<cite class="text-root">Mahānidānasutta</cite>), name & form is described as the embryo taking shape within the mother’s womb, while <a class="ref" href="/mn38">MN 38</a> <cite class="text-translated">The Longer Discourse on the Ending of Craving</cite> (<cite class="text-root">Mahātaṇhāsaṅkhaya</cite>) speaks of how the child then grows and matures. Thus it primarily means the individual organism with its mental and physical attributes. Since <i lang="pi">nāma-rūpa</i> stands in mutual dependence with consciousness, however, it is not correct to translate it as “mind & body”—mind/body dualism has no place in early Buddhism. It was only in much later Abhidhamma texts that <i lang="pi">nāma-rūpa</i> came to be used as an umbrella term for all mental and physical properties, in which context the translation “mind & body” is appropriate.`}
                  </aside>
                </dd>
                <dt>${_`Six sense fields (<i lang="pi">saḷāyatana</i>)`}</dt>
                <dd>
                  ${_`The eye, ear, nose, tongue, body, and mind.`}
                  <aside class="list-note">
                    ${_`These are treated in detail in <a class="ref" href="/sn35">SN 35</a> Saḷāyatana Saṁyutta. In dependent origination they are said to develop and evolve as the individual grows up, enabling them to experience the world in ever more sophisticated ways. This is the first of four links that, like consciousness, are six-fold following the six senses. These integrate the process of immediate sense experience within the broader context of dependent origination.`}
                  </aside>
                </dd>
                <dt>${_`Contact (<i lang="pi">phassa</i>)`}</dt>
                <dd>
                  ${_`This is the operation of sense stimulus, when the six sense organs are activated and perform their function. It occurs with the coming together of the inner sense organ, the outer sense stimulus, and the corresponding consciousness.`}
                  <aside class="list-note">
                    ${_`The conscious individual does not exist in isolation, but can only live and grow in an environment that provides them with stimulation.`}
                  </aside>
                </dd>
                <dt>${_`Feeling (<i lang="pi">vedanā</i>)`}</dt>
                <dd>
                  ${_`The pleasant, painful, or neutral tone that accompanies all conscious experience.`}
                  <aside class="list-note">
                    ${_`Certain kinds of experience are enjoyable, others are unpleasant, while some have no particular affect. Note that <i lang="pi">vedanā</i> in Buddhism does not refer to feelings in the sense of “emotions”, which are far more complex. <i lang="pi">Vedanā</i> is a fundamental property of all experience, and is treated in detail in <a class="ref" href="/sn36">SN 36</a> Vedana Saṁyutta.`}
                  </aside>
                </dd>
                <dt>${_`Craving (<i lang="pi">taṇhā</i>)`}</dt>
                <dd>
                  ${_`Craving or desire for the six sense stimuli.`}
                  <aside class="list-note">
                    ${_`Here the definition follows the theme of the six senses, rather than the definition given in the four noble truths, which is craving for future rebirth, i.e. sensual craving, craving to continue existence, and craving to end existence. In both cases, craving refers to a primal instinct that responds to sense stimulus, seeking to get more pleasure or to avoid pain.`}
                  </aside>
                </dd>
                <dt>${_`Grasping (<i lang="pi">upādāna</i>)`}</dt>
                <dd>
                  ${_`Grasping at sensual pleasures, views, religious observances, and theories of self.`}
                  <aside class="list-note">
                    ${_`Apart from the first factor, the kinds of grasping are more sophisticated than the primal desires of “craving”. They require the development of thought and language. This represents a further stage in the growth of a person, as they mature and become fully responsible for their actions. It is for this reason that in Buddhism it is primarily mature humans who perform the deeds that generate rebirth and shape the course of future lives. Animals or children may indeed perform such deeds, but they are less weighty in effect.`}
                  </aside>
                </dd>
                <dt>${_`Continued existence (<i lang="pi">bhava</i>)`}</dt>
                <dd>
                  ${_`Existence may be in the sensual realm (<i lang="pi">kāma-bhava</i>), the realm of luminous form (<i lang="pi">rūpa-bhava</i>), or the formless realm (<i lang="pi">arūpa-bhava</i>).`}
                  <aside class="list-note">
                    ${_`<i lang="pi">Bhava</i> may be translated as “existence” or “life”. It refers to the ongoing process of existence. By grasping at various aspects of the present life, beings generate kammic energy in accordance with that. Most beings are attached to the sensual realm, but those who have practiced advanced meditation may become attached to the realms of luminous form (through the four absorptions) or the formless (through the formless attainments). Such attachment or grasping stimulates and activates these aspects of existence, creating a corresponding rebirth. <i lang="pi">Bhava</i> is therefore like a thread that runs through the various steps of dependent origination; and indeed, the whole of dependent origination is sometimes called the <i lang="pi">bhavacakka</i>, the “Wheel of Existence”. <i lang="pi">Bhava</i> is a countable noun, so the older rendering as “becoming” is incorrect: you can’t speak of multiple “becomings”. Nevertheless, <i lang="pi">bhava</i> has a distinctly pregnant sense. While we might long for a life of stable and eternal joy, it is the nature of existence that, even as it passes away, it contains the seeds for a new life in the future. Thus in <a class="ref" href="/an3.76">AN 3.76</a> the Buddha explains <i lang="pi">bhava</i> by saying that “deeds are the field, consciousness is the seed, and craving is the moisture” (<i lang="pi">kammaṁ khettaṁ, viññāṇaṁ bījaṁ, taṇhā sneho</i>) for generating a new life in the future (<i lang="pi">āyatiṁ punabbhavābhinibbatti</i>).`}
                  </aside>
                </dd>
                <dt>${_`Rebirth (<i lang="pi">jāti</i>)`}</dt>
                <dd>
                  ${_`The rebirth or conception of the aggregates in the various orders of sentient beings.`}
                  <aside class="list-note">
                    ${_`The Pali <i lang="pi">jāti</i> is often translated as “birth”, but in doctrinal contexts it always refers to rebirth in the sense of reincarnation in a new life. Despite the claims of some modern commentators, the suttas never use rebirth as a psychological metaphor.`}
                  </aside>
                </dd>
                <dt>${_`Old age and death, sorrow, lamentation, pain, sadness, and distress`}</dt>
                <dd>
                  ${_`Old age is the breaking of teeth, wrinkling of skin, and failing of the faculties. Death is the laying down of the body at the end of life.`}
                  <aside class="list-note">
                    ${_`Like rebirth, old age and death are defined in purely physical terms. Psychological suffering is covered by the other terms.`}
                  </aside>
                </dd>
              </dl>
              <p>
                ${_`Dependent origination is core to the insight not just of the historical Buddha Gotama, but of other Buddhas of the past (<a class="ref" href="/sn12.4">SN 12.4–10</a>). His own realization was like a person who stumbles upon an ancient city, lost and overgrown in the jungle (<a class="ref" href="/sn12.65">SN 12.65</a>). Thus dependent origination is not an invention of the Buddha, but is a description of a natural principle, one that operates in the same way whether or not a Buddha appears (<a class="ref" href="/sn12.20">SN 12.20</a>).`}
              </p>
              <p>
                ${_`The Buddha distinguished between the phenomena that are dependently originated and the process of dependent origination (<a class="ref" href="/sn12.20">SN 12.20</a>). While all of the dependently originated phemomena can be seen in the present, the reality of the process in the past and future must be inferred (<a class="ref" href="/sn12.34">SN 12.34</a>).`}
              </p>
              <p>
                ${_`This is the difference between knowledge of dependent origination and the psychic powers of seeing the specific details of past lives and present rebirths. Such psychic visions arise from deep immersion in meditation, and are useful but not essential for understanding and letting go. Dependent origination is not about seeing the specifics of past and future lives, but understanding the principles by which rebirth operates. If memories of past lives are like watching a show on TV, insight into dependent origination is like understanding the science and technology of how television transmission works. This is why dependent origination is always regarded as unique and central to Buddhism, while psychic visions have only a limited role to play.`}
              </p>
              <p>
                ${_`This conscious body, with its complex systems of mental and physical processes, was produced due to ignorance and craving in a past life (<a class="ref" href="/sn12.19">SN 12.19</a>). This is how our present existence came to be. So long as we continue to be trapped in craving for sensory experience, we repeat the cycle, fueling craving and generating yet another new body that will be reborn in the future. When we understand the theory of dependent origination it gives us an opening for developing insight.`}
              </p>
              <p>
                ${_`It is, of course, self evident that all the factors of dependent origination may be observed in the present. But in terms of the functioning of the process, we begin by examining the central factors, the unfolding of sense experience. Gradually we realize that the implications of what we are seeing are far deeper than the mere present. Like a scientist who, examining tree rings or ice cores, realizes that they can make reliable inferences about the deep past, we understand that the same processes that brought us here will propel us into the future. And we see that it is that very understanding which is the beginning of the end for ignorance.`}
              </p>
              <p>
                ${_`Thus while this teaching is a profoundly philosophical one, it is not mere theory, but a praxis as well (<a class="ref" href="/sn12.3">SN 12.3</a>). Its understanding unfolds as a natural consequence of developing faith in the Dhamma (<a class="ref" href="/sn12.23">SN 12.23</a>). It is realized by one who has experiential realization of the Dhamma, commonly known as a stream-enterer (<a class="ref" href="/sn12.28">SN 12.28</a>). This is true for both monastics (<a class="ref" href="/sn12.29">SN 12.29</a>) and lay people (<a class="ref" href="/sn12.41">SN 12.41</a>). This is why a noble disciple has no doubts about the meaning or origin of life: they have seen it for themselves (<a class="ref" href="/sn12.49">SN 12.49</a>). Such an individual is independent of others and need not rely on a teacher. One need not be a perfected one (<i lang="pi">arahant</i>) to understand dependent origination (<a class="ref" href="/sn12.68">SN 12.68</a>).`}
              </p>
              <p>
                ${_`The Buddha illustrates dependent origination with many similes, the imagery often drawn from ideas of fire, fuel, or food. Focusing on things that give pleasure tends to stimulate craving, like a fire fueled by dry grass (<a class="ref" href="/sn12.52">SN 12.52</a>) or a tree drawing up sap (<a class="ref" href="/sn12.58">SN 12.58</a>). It is in this collection that we find the now-classic simile of the mind like a monkey, although the application is somewhat unexpected (<a class="ref" href="/sn12.61">SN 12.61</a>).`}
              </p>
              <p>
                ${_`A number of suttas take up the idea of conditionality as “food” or “fuel” or “sustenance” and apply it to a set of four things: solid food, contact, intention, and consciousness (<a class="ref" href="/sn12.11">SN 12.11</a>). Each of these is, in turn, illustrated with similes that are as horrifying as they are unforgettable (<a class="ref" href="/sn12.63">SN 12.63</a>).`}
              </p>
              <p>
                ${_`While the standard presentation of the 12 links might give the impression that they occur one after the other, like a series of dominoes falling down, the reality is more complex. Certain factors, such as consciousness and name & form, are interdependent, relying on each other (<a class="ref" href="/sn12.65">SN 12.65</a>) like two sheaves of reeds (<a class="ref" href="/sn12.67">SN 12.67</a>). Sometimes a factor might be implied rather than mentioned outright (<a class="ref" href="/sn12.13">SN 12.13</a>), sometimes the sequence is altered (<a class="ref" href="/sn12.43">SN 12.43</a> and <a class="ref" href="/sn12.44">SN 12.44</a>), while elsewhere the teaching might be presented in a quite different way (<a class="ref" href="/sn12.38">SN 12.38</a>). Conditionality in Buddhism is always understood to be complex and ramified: many causes, many effects, all interacting. The simple schema is not meant to be reductive, but to clarify crucial aspects of the process in a way that is easily memorized and understood.`}
              </p>
              <p>
                ${_`Philosophically, dependent origination is said to be the “middle teaching” that avoids extreme views. Such extreme views are the polar opposites that often define philosophical positions. They include views of moral responsibility: is the person who does the deed identical with the one who experiences the result? Or is it experienced by a different person? The Buddha rejects these alternatives: the deed has an effect, and that effect is suffering (<a class="ref" href="/sn12.46">SN 12.46</a>).`}
              </p>
              <p>
                ${_`Similarly the Buddha rejects the ideas that “everything exists” or that “nothing exists” (<a class="ref" href="/sn12.48">SN 12.48</a>). While these notions might seem odd, even bizarre, to our way of thinking, they stem from the Indian philosophical tendency to see “being” as inherent, absolute, even divine. Thus if something exists, it exists in an absolute and essential sense, and if all exists, it means the reality of the cosmos itself is absolute and eternal. If nothing “exists”, it does not mean that there is nothing real in the world; it means that things do not have any essence, and so will perish. Thus the Buddha rejects these opposing views as forms of eternalism and annihilationism, the ideas that the self will last forever, and that the self will be destroyed (<a class="ref" href="/sn12.15">SN 12.15</a>).`}
              </p>
              <p>
                ${_`Finally, perhaps the single most important thing to remember is that dependent “origination” is only half the picture. Of equal importance is “cessation”, the ending of each of the factors, which is what is called “extinguishment” (<i lang="pi">nibbāna</i>). The true purpose of studying dependent origination is not for philosophical mastery, not for winning debates or passing a course, but for realizing the ending of suffering. Dependent origination stands as a truly empowering teaching, as it assumes that human understanding is quite sufficient to comprehend the essence of existence itself, to find salvation through wisdom.`}
              </p>
              <h2 id="item4">${_`The Book of the Aggregates`}</h2>
              <p>
                ${_`The “Book of the Aggregates” is the third of the five books of the Linked Discourses. It is named after the first and longest <i lang="pi">saṁyutta</i>, which deals with the core Buddhist teaching of the five aggregates in 159 discourses. Of the remaining twelve <i lang="pi">saṁyuttas</i>, three also take up the theme of the aggregates, while the remainder deal with miscellaneous secondary themes, some organized by subject, others by person.`}
              </p>
              <p>
                ${_`The “five grasping aggregates” (<i lang="pi">pañc’upādānakkhandhā</i>) were mentioned in the first sermon as the summary of the noble truth of suffering (<a class="ref" href="/sn56.11">SN 56.11</a>), and became a foundational teaching in all forms of Buddhism.`}
              </p>
              <p>
                ${_`The basic idea of an “aggregate” (<i lang="pi">khandha</i>) is a set or class of phenomena. The “five aggregates” are the various sets of phenomena so classified.`}
              </p>
              <p>
                ${_`The five aggregates are almost always said to be “grasping” aggregates. The term “grasping” (<i lang="pi">upādāna</i>) has a complex and multi-layered relation to the basic term.`}
              </p>
              <ul>
                <li>
                  ${_`The aggregates are the <em>subject</em> of grasping, in that they are the things that are normally attached to and taken to be the permanent “self”.`}
                </li>
                <li>
                  ${_`But they are not merely passive spectators: they are also the <em>functional support</em> of grasping, the things that make grasping work. This is probably the basic metaphor of the set, as the five aggregates correspond to the five fingers of a hand, which perform the act of grasping. Grasping is itself something that the aggregates do. In this metaphor, the “thumb” is consciousness, which stands against the other four.`}
                </li>
                <li>
                  ${_`As active participants in the process of grasping, they <em>stimulate</em> grasping to themselves (<i lang="pi">upādāniya</i>).`}
                </li>
                <li>
                  ${_`And finally, they are the <em>product</em> of grasping in the sense that attachments in past lives have given rise to the aggregates in this life (<i lang="pi">upādiṇṇa</i>).`}
                </li>
              </ul>
              <p>${_`Here is a brief analysis of each of the five.`}</p>
              <dl>
                <dt>${_`Form (<i lang="pi">rūpa</i>)`}</dt>
                <dd>
                  ${_`“Physical phenomena”, or sometimes simply “body”, understood as consisting of the four primary physical properties: earth (solid), water (liquidity), fire (heat), and air (gas), and anything material derived from these, such as the impressions of the five material senses.`}
                  <aside class="list-note">
                    ${_`<i lang="pi">Rūpa</i> is more extensive in scope than the Western concept of “matter”. It includes material properties that are perceived purely in the mind, such as shape or color seen as visions in meditation.`}
                  </aside>
                </dd>
                <dt>${_`Feeling (<i lang="pi">vedanā</i>)`}</dt>
                <dd>
                  ${_`The pleasant, painful, or neutral tone of experience born from the six senses.`}
                </dd>
                <dt>${_`Perception (<i lang="pi">saññā</i>)`}</dt>
                <dd>
                  ${_`The recognition or interpretation of experience through the six senses.`}
                  <aside class="list-note">
                    ${_`Perception refers to that function of the mind which organizes the dizzyingly complex and chaotic input of present experience based on past experience. The eye, for example, does not see “blue” or “yellow”, it only sees light in various frequencies and amplitudes. Perception recognizes that these inputs correspond to the concept “blue” or “yellow” (<a class="ref" href="/sn22.79">SN 22.79</a>), and so it enables us to live in a world of (relatively) permanent and predictable entities and ideas. While perception thus makes consciousness possible, it also can trap us into seeing things only in terms of the past. In the legal discussions of the Vinaya, it is common to discuss cases where a mendicant’s actions are based on a perception that turns out to be incorrect.`}
                  </aside>
                </dd>
                <dt>${_`Choices (<i lang="pi">saṅkhārā</i>)`}</dt>
                <dd>
                  ${_`Intention, will, or volition (<i lang="pi">cetanā</i>); the choice to perform an act, especially one with an ethical dimension. It is choices that create the five aggregates (<a class="ref" href="/sn22.79">SN 22.79</a>).`}
                  <aside class="list-note">
                    ${_`Later forms of Buddhism, starting with the Abhidhamma texts, treated this aggregate as if it were a catch-all, whose purpose was to include everything not mentioned under the other aggregates. However this is not the case in the early texts, where there is no indication that <i lang="pi">saṅkhārā</i> in this context means anything other than “volition, choice”.`}
                  </aside>
                </dd>
                <dt>${_`Consciousness (<i lang="pi">vịññāṇa</i>)`}</dt>
                <dd>
                  ${_`The subjective process of awareness itself.`}
                  <aside class="list-note">
                    ${_`As in dependent origination, consciousness is said to depend on name & form.`}
                  </aside>
                </dd>
              </dl>
              <p>
                ${_`With the exception of perception, all of these are also found in dependent origination, where they have similar definitions. Whereas dependent origination shows the unfolding of the process of suffering in time, the teaching on the aggregates focuses on those aspects of present experience that are most apt to be taken as a self. In <a class="ref" href="/sn22.5">SN 22.5</a> the grasping to the aggregates is shown as the very same grasping that leads to rebirth as shown in dependent origination. <a class="ref" href="/sn22.54">SN 22.54</a> furthers this argument, asserting that it is impossible to speak of rebirth without referring to the aggregates.`}
              </p>
              <p>
                ${_`From the very first teaching of the Buddha (<a class="ref" href="/sn56.11">SN 56.11</a>) we learn that the aggregates are suffering. In the second sermon—the Discourse on Not-Self (Anattalakkhaṇa Sutta) at <a class="ref" href="/sn22.59">SN 22.59</a>—this brief statement is drawn out in a further dialogue with the group of five ascetics. Each of the aggregates leads to affliction and one cannot simply decree that the aggregates be whatever one wants; hence they cannot be a self. Further, each of the aggregates is impermanent and therefore suffering, which again rules out the possibility that they are a self. Seeing in this way, a practitioner lets go of attachment to the aggregates and realizes freedom. It was while listening to this discourse that the five ascetics all became perfected ones.`}
              </p>
              <p>
                ${_`While the doctrine of the “three marks” is found throughout all Buddhist texts, it is here in the Khandha Saṁyutta that it rises to prominence. Here is a brief outline.`}
              </p>
              <dl>
                <dt>${_`Impermanence (<i lang="pi">anicca</i>)`}</dt>
                <dd>
                  ${_`All conditioned phenomena are produced and maintained by causes and hence can only last so long as the causes sustain them. Impermanence is a fractal phenomena; it is how reality is structured at every level. It applies equally to the grandest scale of universes and the lifespans of the gods as it does to the incessant breaking up and vanishing of conditions from moment to moment. But in the five aggregates the main focus is on the scale of human existence, where the emotional impact of impermanence is felt most keenly in death.`}
                </dd>
                <dt>${_`Suffering (<i lang="pi">dukkha</i>)`}</dt>
                <dd>
                  ${_`At its simplest level this refers to painful feelings, whether physical or mental (<i lang="pi">dukkha-dukkhatā</i>). By itself this is a profound observation, as virtually every moment of our waking lives is afflicted by some form of pain or irritation. But suffering runs deeper than that, for even when we do experience pleasure, it cannot be sustained. The second bite of a mango is delicious—but not quite as delicious as the first (<i lang="pi">vipariṇāma-dukkhatā</i>). Finally, even the most profound of pleasures, such as the bliss of deep meditation, is never as peaceful as <i lang="pi">nibbāna</i>, since by its nature it is conditioned and unstable (<i lang="pi">saṅkhāradukkhatā</i>). No experience is as peaceful as cessation.`}
                </dd>
                <dt>${_`Not-self (<i lang="pi">anattā</i>)`}</dt>
                <dd>
                  ${_`The most subtle and distinctive of the three marks, not-self is the most apt to be misunderstood. It is primarily an anti-metaphysical doctrine, not a psychological one. It is intended to rule out the various kinds of self or soul proposed by the philosophers at the time of the Buddha. It does this by pointing out that all the self doctrines end up identifying one or other of the aggregates as self; but they do not have the nature that the self is supposed to have. This meaning is quite different from the modern psychological notion of self, and it is inappropriate, and potentially harmful, to apply the teaching of not-self in cases where a person is suffering from a disorder of identity.`}
                </dd>
              </dl>
              <p>
                ${_`Let us dwell a little further on the idea of self and not-self, which is best understood in its historical context. From a few centuries before the Buddha, Indian sages and philosophers had become fascinated by the subjective nature of experience. They wondered who it was, in the true and ultimate sense, that was the one referred to as “I”.`}
              </p>
              <p>
                ${_`Initial theories built on simple animist notions, imaging the self as an external physical totem, or even as a little man who lived in the chest. Others theorized that the self was the heart, or the breath, or some other physical attribute. But all of these may be refuted by simple empirical observation. Sometimes a totem may be destroyed, yet a person lives. When you watch a person who is asleep, no little man may be observed leaving by the mouth. And when a trumpeter expels all their breath, they do not drop down dead.`}
              </p>
              <p>
                ${_`So what then is this self if not something material? Perhaps, rather, it is feeling, the bliss experienced by one who goes to a beautiful realm after death. But this cannot be so, for feeling, too, is impermanent (<a class="ref" href="/dn15">DN 15</a>). Then could the self be perception (<a class="ref" href="/dn1">DN 1</a>)? But no, perception too is tricky and unreliable, like an illusion. Is self then one’s choices? A man, after all, is defined by the decisions he makes. But these too are seen to be impermanent and unreliable; oft-times one makes bad choices, or the results of a choice are not what one hopes.`}
              </p>
              <p>
                ${_`Unsatisfied, the sages of the Upaniṣads rejected all such limited conceptions of the Self (Bṛhadāraṇyaka Upaniṣad 3.9.26: <i lang="san">neti! neti!</i>). They arrived at their most profound thesis: the self in its highest sense was awareness itself, the sheer mass of consciousness (Bṛhadāraṇyaka Upaniṣad 2.4.12: <i lang="san">vijnāna-ghanam’eva</i>). The true nature of the self is the supreme divinity (Bṛhadāraṇyaka Upaniṣad 1.4.10: <i lang="san">ahaṁ brahmāsmīti</i>; cp. <a class="ref" href="/dn1#2">DN 1:2</a>, <a class="ref" href="/dn11#81">DN 11:81</a>, <a class="ref" href="/dn24#2">DN 24:2</a>: <i lang="san">ahamasmi brahmā</i>). This insight is expressed in the Upaniṣads as the famous “thou art that” (Chāndogya Upaniṣad 6.8.7: <i lang="san">tat tvam asi</i>), and the Pali texts as “I am that” ( <a class="ref" href="/sn22.8">SN 22.8</a>: <i lang="pi">eso hamasmi</i>). “That” may be anything one identifies as self. But to one who understands rightly (<i lang="san">ya evaṁ veda</i>) the divine self is nothing less than the entirety of the universe: “the self is identical with the cosmos” (<a class="ref" href="/sn22.81">SN 22.81</a>: <i lang="pi">so attā so loko</i>, cp. Bṛhadāraṇyaka Upaniṣad 1.2.7: <i lang="san">tasyeme lokā ātmānaḥ</i>, 4.5.7: <i lang="san">idaṁ brahmedaṁ kṣatram ime lokā ime devā ime vedā imāni bhūtānīdaṁ sarvaṁ yad ayam ātmā</i>). This philosophy is most closely associated with Yajnavalkya, a brahmanical sage who lived in the same region as the Buddha (Mithila), perhaps a century or two earlier.`}
              </p>
              <p>
                ${_`While the exact form of these arguments may seem archaic, we still cling to the aggregates in similar ways. We think of our possessions and belongings—homes, clothes, cars—as expressions of our self, and are upset when they are damaged or criticized. We attach, too, to our physical bodies, reveling in health, or imagining that we will survive through the propagation of our DNA. We attach to pleasure, thinking that happiness will last. We attach to our perceptions, such as our sense of belonging to a nation or religion, or our idea of ourselves as a good person. We attach to our choices, taking pride in our ability to make decisions. Finally, we attach to our consciousness, especially as we purify awareness in meditation.`}
              </p>
              <p>
                ${_`Thus one of the key functions of the aggregates was to categorize theories of the self, moving from simple to profound. This seems to have been familiar to philosophers before the Buddha. The aggregates are mentioned in passing in the first sermon, as if it is taken for granted that the five ascetics would know them. Many of the sectarian views of self in <a class="ref" href="/dn1">DN 1</a> Brahmajala Sutta refer to the aggregates in one way or another. And elsewhere, the non-Buddhist ascetic Saccaka asserted that the five aggregates were the self (<a class="ref" href="/mn35">MN 35</a>). Nevertheless, the aggregates have not been identified in any pre-Buddhist texts.`}
              </p>
              <p>
                ${_`Regardless of whether the set of categories was pre-Buddhist, the Buddha treated them in his own distinctive way, emphasizing that when examined, the aggregates turn out to lack the qualities of permanence, surety, and refuge that are intrinsic to the idea of a true self. But our grasping and identification are strong and have been built up over a long time, so it is not enough to merely acknowledge this on an intellectual level. Hence in the Khandha Saṁyutta we find the core teachings emphasized again and again. The Buddha constantly reminds the mendicants that the aggregates lead to sorrow and despair (<a class="ref" href="/sn22.7">SN 22.7</a>), that they are aggravating (<a class="ref" href="/sn22.79">SN 22.79</a>), that desire for them must be given up (<a class="ref" href="/sn22.137">SN 22.137</a>), that they are alien (<a class="ref" href="/sn22.33">SN 22.33</a>). One who identifies with the aggregates is like a man who hires an assassin as a servant (<a class="ref" href="/sn22.85">SN 22.85</a>). They are suffering in the past and future just as they are today (<a class="ref" href="/sn22.10">SN 22.10</a>).`}
              </p>
              <p>
                ${_`The view that the aggregates are self is called “identity view” (<i lang="pi">sakkāyadiṭṭhi</i>). It is possible to identify with any or all of the aggregates in a myriad of ways, commonly set out as twenty forms of identity view (<a class="ref" href="/sn22.1">SN 22.1</a>, etc.). Identity view leashes an unenlightened person to transmigration like a dog tied to a post, pointlessly running around and around (<a class="ref" href="/sn22.99">SN 22.99</a>).`}
              </p>
              <p>
                ${_`Several discourses emphasize that in order to understand the aggregates it is essential to develop the deep stillness of immersion meditation (<a class="ref" href="/sn22.5">SN 22.5</a>, <a class="ref" href="/sn22.6">SN 22.6</a>). But meditative realization is not something that just happens automatically; one must continually contemplate and observe the aggregates (<a class="ref" href="/sn22.40">SN 22.40</a>, etc.).`}
              </p>
              <p>
                ${_`In this collection we find a large number of striking and lively narratives, showing how the aggregates could be a solace at the time of old age (<a class="ref" href="/sn22.1">SN 22.1</a>), a guide to the knotty theoretical debates on identity, or a framework for insight meditation.`}
              </p>
              <h2 id="item5">${_`The Book of the Six Sense Fields`}</h2>
              <p>
                ${_`The “Book of the Six Sense Fields” is the fourth of the five books of the Linked Discourses. It is named after the first and longest <i lang="pi">saṁyutta</i>. The second <i lang="pi">saṁyutta</i> on Feelings also deals with a major doctrinal topic, one that is closely related to the main theme. The remaining eight <i lang="pi">saṁyuttas</i> deal with secondary themes organized by subject or by person.`}
              </p>
              <p>
                ${_`The number of discourses in the “Linked Discourses on the Six Sense Fields” varies between editions, mainly due to the way repetitions are counted; SuttaCentral follows Bhikkhu Bodhi’s translation in counting 248 discourses; see his introduction to this chapter for a discussion of the problems in counting the Suttas of this collection. They are collected in four <i lang="pi">paṇṇasakas</i>.`}
              </p>
              <p>
                ${_`This <i lang="pi">saṁyutta</i> has an especially close relationship with the “Linked Discourses on the Aggregates”, one that goes far beyond the apparent thematic similarities. In fact, many of the discourses in the two collections are constructed on virtually identical lines. Bhikkhu Bodhi explores these connections with his notion of “template parallels”, which are found throughout the Saṁyutta Nikāya, but especially with these two sections.`}
              </p>
              <p>
                ${_`The six sense fields complement the five aggregates as the summary of the noble truth of suffering. Where the aggregates focus on the functional structure of experience as basis for views of self, the emphasis here is on how sense experience stimulates desire.`}
              </p>
              <p>
                ${_`The six sense fields are the means through which the world is known, and so each of them has two aspects. The “inner” aspect is the sense organs, for example the “eye” or the “ear”, which make it possible for an organism to experience the outside world by receiving sense stimuli. These are paired with the external sense stimuli, such as “sights” or “sounds”, which impact the sense organ (contact, <i lang="pi">phassa</i>) and give rise to the appropriate form of consciousness.`}
              </p>
              <p>
                ${_`It’s best to avoid thinking of the external sense fields as “objects”, since in the suttas they are depicted in relation to the observing mind, and not as independently existing entities. There is no word for “object” in this sense in the early texts: existence is not objective, it is relational. The term <i lang="pi">ārammaṇa</i>, which came to be used in this sense much later in the Abhidhamma, means “support” in the suttas.`}
              </p>
              <p>
                ${_`The operation of the senses is relatively straightforward until we come to the last sense, the “mind” and “thoughts” or “mental phenomena”. To clear up a possible confusion, this “sixth sense” is simply the mental faculty and has nothing to do with psychic powers. And unlike the five external senses, the “inner” sense field is not a physical organ: <i lang="pi">mano</i> does not mean “brain”.`}
              </p>
              <p>
                ${_`The exact meaning of “mind” (<i lang="pi">mano</i>) in this context is not spelled out in detail, so let us consider this first. The suttas use three main terms for the mind: <i lang="pi">mano</i>, <i lang="pi">citta</i>, and <i lang="pi">viññāṇa</i>. In general these are synonyms and it is not possible to draw hard and fast distinctions between them (<a class="ref" href="/an3.60">AN 3.60</a>, <a class="ref" href="/dn1#2">DN 1:2</a>, <a class="ref" href="/sn12.61">SN 12.61</a>). Nevertheless, they tend to be used in different contexts, each with a distinct nuance. These contexts can be understood in terms of the four noble truths; thus the different terms refer to the same thing, but imply a different aspect or response to that thing.`}
              </p>
              <dl>
                <dt>${_`<i lang="pi">Viññāṇa</i>`}</dt>
                <dd>
                  ${_`In doctrinal contexts this is awareness itself, the sheer knowing of things. It appears in this sense in dependent origination, the aggregates, and the sense fields. Hence it pertains to the first noble truth, the suffering of the world, and it needs to be fully understood. In colloquial usage, however, it can take on a variety of shades of meaning, such as “understanding”.`}
                </dd>
                <dt>${_`<i lang="pi">Mano</i>`}</dt>
                <dd>
                  ${_`The mind in action, one of the three spheres of <i lang="pi">kamma</i>, a sense it inherits from the Upaniṣads. It is that which creates results, as in the famous first line of the Dhammapada: <i lang="pi">mano pubbaṅgamā dhammā</i>, “mind is the forerunner of all things”. It is particularly used in ethical contexts, the performance of mental acts that bear fruit of either good or bad. So it may be understood as primarily relating to the second and third noble truths, the origination and ending of suffering.`}
                </dd>
                <dt>${_`<i lang="pi">Citta</i>`}</dt>
                <dd>
                  ${_`The most general, and the least tightly bound to a particular technical sense. It is used widely as “mind”, “thought”, “heart”, etc. But when found in technical contexts it refers to <i lang="pi">samādhi</i>, to the purified awareness of deep meditative immersion. For this reason it is specially used in contexts relating to the path, the fourth noble truth.`}
                </dd>
              </dl>
              <p>
                ${_`In the six senses, <i lang="pi">mano</i> is clearly not identical with the “knowing” (<i lang="pi">viññāṇa</i>), as it gives rise to it. Nor is it the “known”, the phenomena of which the mind is aware, for that is <i lang="pi">dhammā</i>. Nor is it the turning towards or paying attention to the thing known, as is revealed in <a class="ref" href="/mn28">MN 28</a> <cite class="text-translated">The Longer Simile of the Elephant’s Footprint</cite> (<cite class="text-root">Mahāhatthipadopamasutta</cite>):`}
              </p>
              <blockquote>
                <p>
                  ${_`Though the mind is intact internally, so long as exterior thoughts don’t come into range and there’s no corresponding attention, there’s no manifestation of the corresponding type of consciousness.`}
                </p>
              </blockquote>
              <p>
                ${_`This passage suggests that, like the physical sense organs, <i lang="pi">mano</i> in some way pre-exists the actual moment of conscious awareness. This does not mean that it is some mystical substrata of consciousness, for as we have seen <i lang="pi">mano</i> is consistently used in the sense of the mind that performs acts, especially those with a moral dimension. So the <i lang="pi">mano</i> is that which has performed deeds in the past, fueling an ongoing mental continuum within which the results of those deeds may be experienced in the present. It is the mental faculty that bears the potential for conscious experience, created and conditioned by choices made in the past.`}
              </p>
              <p>
                ${_`The “outer” aspect of the sixth sense is <i lang="pi">dhammā</i>, a term so ambiguous its translation is always difficult. Here it refers to anything that may be known directly by the mind, distinct from the five physical senses. The most technically correct translation is probably “mental phenomena”. However, this is clumsy and opaque, so “thought” may be used as a more colloquial rendering, so long as it is understood to include ideas, imagination, and so on, not just verbalized cognition.`}
              </p>
              <p>
                ${_`The term <i lang="pi">āyatana</i> refers to something “stretched out”, a domain, field, or dimension of activity. However, the Visuddhimagga suggests that the sense of the word is primarily a “cause”, or perhaps “stimulus”:`}
              </p>
              <blockquote>
                <p>
                  ${_`… base (<i lang="pi">āyatana</i>) should be understood as such (a) because of its actuating (<i lang="pi">āyatana</i>), (b) because of being the range (<i lang="pi">tanana</i>) of the origins (<i lang="pi">āya</i>), and (c) because of leading on (<i lang="pi">nayana</i>) what is actuated (<i lang="pi">āyata</i>). <cite class="text-translated">Path of Purification</cite>, XV.4, translated by Bhikkhu Ñāṇamoḷi.`}
                </p>
              </blockquote>
              <p>
                ${_`Bhikkhu Ñāṇamoḷi rendered the term accordingly as “base”, which has been followed by Bhikkhu Bodhi. But this commentarial explanation is merely a series of false etymologies, or rather, puns. The point of such explanations is to provide material for teachers to reflect on and use in teaching, and they shouldn’t be taken uncritically. In fact the verbal root is not the obscure <i lang="pi">āyatati</i> (“to actuate”) but <i lang="pi">āyamati</i>, “to stretch, to extend”. <i lang="pi">Āyatana</i> is commonly used in this sense, and may be translated “field”, “dimension”, etc.`}
              </p>
              <p>
                ${_`As so often, the context draws upon and redefines brahmanical terminology. The “six sense fields” (<i lang="pi">saḷāyatana</i>) were first mentioned in the Buddha’s third teaching, the famous Fire Discourse (Ādittapariyāya Sutta) which appears in this collection at <a class="ref" href="/sn35.28">SN 35.28</a>. This sermon was given to a large assembly of brahmanical ascetics, following a period when the Buddha stayed in their “fire house”, a kind of shrine room for worshiping the sacred flame. And in Sanskrit, this place is called an <i lang="pi">āyatana</i>. The Upaniṣads also call the senses <i lang="pi">āyatana</i> in the sense of fields or scopes of activity and experience (eg. Bṛhadāraṇyaka Upaniṣad 4.1.4: <i lang="san">cakṣur evāyatanam</i>, Bṛhadāraṇyaka Upaniṣad 6.1.5: <i lang="san">mano vā āyatanam</i>; Chāndogya Upaniṣad 5.1.5: <i lang="san">mano ha vā āyatanam</i>).`}
              </p>
              <p>
                ${_`When the Buddha told those ascetics that “all is burning”, he was not giving an Abhidhamma analysis, for it was many centuries before Abhidhamma was developed. He was speaking in terms that the brahmins could understand.`}
              </p>
              <p>
                ${_`One of the key projects of the brahmanical Upaniṣads was to reinterpret the deities of the Vedas. Rather than thinking of them as entities who lived in the sky, they became forces or essences that imbued all of reality. So for the brahmin ascetics, the flame (<i lang="san">agni</i>) was worshiped as the embodiment of a sacred energy that was imminent in all things.`}
              </p>
              <p>
                ${_`The teachings of the Fire Sermon respond to several key Upaniṣadic passages. In Bṛhadāraṇyaka Upaniṣad 1.3, it is told how evil entered into the world by the actions of the demons (<i lang="pi">asuras</i>). While the gods (<i lang="pi">devas</i>) were performing the ritual, they entered into the various senses and corrupted them, tainting them with evil and death. Hence when suffering is experienced through the senses, this is the reason. But those same senses can be freed from this corruption by being carried beyond death.`}
              </p>
              <p>
                ${_`These purified, divine senses are further described at Bṛhadāraṇyaka Upaniṣad 2.5.1, the famous “Honey-Knowledge”, regarded as one of the highest and most secret teachings. It presents a template, applied to various different kinds of things. These are not organized so rationally as the Buddhist doctrines, but include quite different kinds of things in the same set, such as the elements, truth, the sun, etc. Nevertheless, the parallels with the teachings of the six senses are quite apparent.`}
              </p>
              <blockquote>
                <p>
                  ${_`<i lang="san">ayam ādityaḥ sarveṣāṁ bhūtānāṁ madhu</i><br>
            This sun is the honey of all beings.<br>
            <i lang="san">asyādityasya sarvāṇi bhūtāni madhu</i><br>
            All beings are the honey of the sun.<br>
            <i lang="san">yaś cāyam asminn āditye tejomayo ’mṛtamayaḥ puruṣo yaś cāyam adhyātmaṁ cākṣuṣas tejomayo ’mṛtamayaḥ puruṣo ’yam eva sa yo ’yam ātmā</i><br>
            This person in the sun made of fire and immortality, and this person in the internal eye made of fire and immortality: this is that—that which is the self.<br>
            <i lang="san">idam amṛtam idaṁ brahmedaṁ sarvam</i><br>
            This is the immortal, this is the divine, this is the all.<br>
            (Bṛhadāraṇyaka Upaniṣad 2.5.5, translation by myself.)`}
                </p>
              </blockquote>
              <p>
                ${_`The Brahmanical view is that all creation stems from Brahmā and hence is, in its truest essence, overflowing with divinity and bliss—honey. Any suffering is merely a temporary imperfection.`}
              </p>
              <p>
                ${_`This is how they handled the great challenge to any theistic system, the problem of evil. For the brahmins, to focus on suffering is to miss the point. This is not merely a facile “positive thinking” doctrine, it is a profoundly contemplative philosophy, worked out in great detail across many complex sacred texts, and informed by deep meditative practice. It does not deny the reality of suffering, but it evokes a deeper reality where suffering cannot reach.`}
              </p>
              <p>
                ${_`Rather than tackling the textual and philosophical issues, the Buddha preferred to point directly at experience. Divested of theology, the experience of our senses is not “honey” but “fire”. And while our philosophy may say that fire is sacred, the reality is that it burns. The Buddha was showing the ascetics that there is no need to invoke deities and metaphysics in order to understand their experience: they could see how it worked right here.`}
              </p>
              <p>
                ${_`The forces lighting that fire can be readily discerned: greed, hate, and delusion. This classic Buddhist presentation of the fundamental defilements appears first in this passage. It is correlated with the three feelings: pleasant feeling stimulates desire; painful feeling provokes hate; and neutral feeling slips into delusion (<a class="ref" href="/mn44#25">MN 44:25</a>, <a class="ref" href="/mn128#28">MN 128:28</a>, <a class="ref" href="/sn36.3">SN 36.3</a>).`}
              </p>
              <p>
                ${_`The Fire Sermon, in its brevity, foreshadows several distinctive features of the teachings on the six senses as compared to the five aggregates. It is direct, emotional and powerful, speaking of the world that is burning, in contrast with the more intellectual approach of the aggregates.`}
              </p>
              <p>
                ${_`By invoking the idea of the “all”, the Fire Sermon suggests that the scope of the six senses includes all that is experienced and known. This idea was expanded in multiple Suttas (<a class="ref" href="/sn35.33">SN 35.33–52</a>). By contrast, no such claim to completeness is made of the aggregates. And the text treats sense experience as a conditioned process, the immediately visible dimension of dependent origination.`}
              </p>
              <p>
                ${_`Since the sense fields make experience possible, it is through them that suffering comes to be (<a class="ref" href="/sn35.106">SN 35.106</a>). It is in order to understand this suffering that one undertakes the spiritual path (<a class="ref" href="/sn35.81">SN 35.81</a>, <a class="ref" href="/sn35.152">SN 35.152</a>). The sense fields are, in fact, the world (<i lang="pi">loka</i>) that wears away (<i lang="pi">lujjati</i>; <a class="ref" href="/sn35.82">SN 35.82</a>, <a class="ref" href="/sn35.84">SN 35.84</a>), for “whatever in the world through which you perceive the world and conceive the world is called the world in the training of the noble one” (<a class="ref" href="/sn35.116">SN 35.116</a>). This world is empty of self (<a class="ref" href="/sn35.85">SN 35.85</a>).`}
              </p>
              <p>
                ${_`Since the sense fields are produced by choices made in past lives, they are said to be “old kamma”; in this they contrast with the aggregates, for they include “choices”, which are the kamma made in the present. Having inherited the senses as the result of past deeds, however, we proceed to respond to them through thinking or conceiving of them in terms of a “self”, a process known in Pali as “identifying” (<i lang="pi">maññita</i>; <a class="ref" href="/sn35.146">SN 35.146</a>, <a class="ref" href="/sn35.30">SN 35.30–32</a>, <a class="ref" href="/sn35.90">SN 35.90–91</a>, <a class="ref" href="/sn35.248">SN 35.248</a>).`}
              </p>
              <p>
                ${_`“Conceiving” and the closely related “conceit” (<i lang="pi">māna</i>) refer to the tendency of the mind to shape experience in terms of the self. Much of our thought is devoted to justifying, explaining, and interpreting our experience in ways that reinforce our notion of self. This can end up spinning out of control, in which case it is called “proliferation” (<i lang="pi">papañca</i>). To cut through this process the Buddha urges us to stop short with sense experience (<a class="ref" href="/sn35.94">SN 35.94</a>, <a class="ref" href="/sn35.95">SN 35.95</a>).`}
              </p>
              <p>
                ${_`It is significant that, while the texts repeatedly speak of how the aggregates form the basis for theories of self (<i lang="pi">sakkāya</i>), the same is <em>not</em> said of the sense fields. If the aggregates provoke grasping to theories, the sense fields provoke grasping at <em>pleasure</em>, at the sheer vitality of sensory experience. Thus while the teachings on the aggregates emphasize <em>views</em>, here the focus shifts to <em>restraint</em>. A standard passage on sense restraint, familiar from the Gradual Training, speaks of preventing harmful qualities from invading the mind in the midst of sense experience (<a class="ref" href="/sn35.120">SN 35.120</a>, <a class="ref" href="/sn35.127">SN 35.127</a>, <a class="ref" href="/sn35.239">SN 35.239</a>, <a class="ref" href="/sn35.240">SN 35.240</a>). A person who chases the pleasure afforded by the senses is no less trapped by the pain they bring, and it is only by setting up mindfulness that one can achieve peace (<a class="ref" href="/sn35.132">SN 35.132</a>, <a class="ref" href="/sn35.243">SN 35.243–244</a>, <a class="ref" href="/sn35.247">SN 35.247</a>).`}
              </p>
              <p>
                ${_`In this way, by choosing the sense fields as a locus of practice one cuts directly at the roots of craving. This is emphasized in the final two <i lang="pi">vaggas</i>, which are especially rich in unforgettable imagery. The senses are an ocean traversed during the spiritual journey (<a class="ref" href="/sn35.228">SN 35.228</a>). We’d be better off being tortured by hot pokers than being caught up in sense experience (<a class="ref" href="/sn35.235">SN 35.235</a>). If you wish to train in meditation, you must learn to withdraw the senses like a tortoise drawing in its limbs, becoming safe from predators (<a class="ref" href="/sn35.240">SN 35.240</a>). Pleasant experiences are the bait of Māra (<a class="ref" href="/sn35.230">SN 35.230</a>). The six senses are like six very different animals, all tied together, and fighting to get to their own territory (<a class="ref" href="/sn35.247">SN 35.247</a>).`}
              </p>
              <h2 id="item6">${_`The Great Book`}</h2>
              <p>
                ${_`The “Great Book” is the last and largest of the five books of the Linked Discourses. It consists of twelve <i lang="pi">saṁyuttas</i>, almost all of which deal with an aspect of Buddhist practice, or the path. The first of these, indeed, is the “Section on the Path” (<i lang="pi">Magga Saṁyutta</i>), and in the northern canons the book as a whole is referred to as the “Book of the Path” (<i lang="pi">Maggavagga</i>).`}
              </p>
              <p>
                ${_`The first seven <i lang="pi">saṁyuttas</i> offer a detailed treatment of seven sets of factors on Buddhist practice. These sets came to be known to the later traditions as the 37 <i lang="pi">bodhipakkhiyā dhammā</i>, or “qualities leading to awakening”. Note that this term is not used in this way in the suttas; it is, rather, applied to one of the sets, the five faculties (<a class="ref" href="/sn48.55">SN 48.55</a>, etc.). While the 37 factors are mentioned throughout the canon, it is in this book that we find the primary source for these teachings. Subsequent <i lang="pi">saṁyuttas</i> deal with the path from different perspectives, while the final two deal with stream-entry and the four noble truths respectively.`}
              </p>
              <p>
                ${_`While most books of the Saṁyutta are dominated by one major collection, the Great Book features several <i lang="pi">saṁyuttas</i> of comparable importance. For this reason I will briefly discuss most of the substantive <i lang="pi">saṁyuttas</i>. I leave aside those that are merely sets of template repetitions, and also the final two <i lang="pi">saṁyuttas</i> on stream entry and the truths, as I have covered these topics elsewhere. I preface the discussion of the individual <i lang="pi">saṁyuttas</i> with a general discussion of the “qualities leading to awakening”.`}
              </p>
              <p>
                ${_`The <i lang="pi">saṁyuttas</i> in the Great Book display considerable complexity in their structure and use of repetitions. But for fear of overburdening the discussion, I refer anyone interested to the relevant sections of Ven Bodhi’s <cite class="book">Connected Discourses</cite>.`}
              </p>
              <h3>${_`The 37 Qualities Leading to Awakening`}</h3>
              <p>
                ${_`For the early Buddhist texts, the primary concern was the spiritual practice that leads to the escape from suffering. This is the fourth noble truth. From the very first discourse, this was spelled out by a specific set of factors comprising the path to awakening: the noble eightfold path. During the course of his long teaching career, the Buddha presented this path in many different ways, formally or informally, briefly or in detail, emphasizing different aspects to suit the occasion or the person.`}
              </p>
              <p>
                ${_`Before his death, it seems, the Buddha had begun to systematize these various presentations, putting together seven sets of qualities pertaining to the path, totaling 37 factors. Each set presented the path to liberation from a slightly different perspective.`}
              </p>
              <p>
                ${_`The seven primary <i lang="pi">saṁyuttas</i> of the Mahāvagga contain the same teachings, albeit in a different sequence. The Mahāvagga begins with the noble eightfold path, due to its prestige and importance as <em>the</em> teaching on the path. But when presented elsewhere in the suttas we find the sets arranged numerically.`}
              </p>
              <ul>
                <li>
                  ${_`Four kinds of mindfulness meditation. The observation of:`}
                  <ol>
                    <li>${_`body`}</li>
                    <li>${_`feelings`}</li>
                    <li>${_`mind`}</li>
                    <li>${_`principles`}</li>
                  </ol>
                </li>
                <li>
                  ${_`Four right efforts:`}
                  <ol>
                    <li>${_`to prevent the bad`}</li>
                    <li>${_`to give up the bad`}</li>
                    <li>${_`to give rise to the good`}</li>
                    <li>${_`to maintain and grow the good`}</li>
                  </ol>
                </li>
                <li>
                  ${_`Four bases of psychic power:`}
                  <ol>
                    <li>${_`enthusiasm`}</li>
                    <li>${_`energy`}</li>
                    <li>${_`mind`}</li>
                    <li>${_`inquiry`}</li>
                  </ol>
                </li>
                <li>
                  ${_`Five faculties:`}
                  <ol>
                    <li>${_`faith`}</li>
                    <li>${_`energy`}</li>
                    <li>${_`mindfulness`}</li>
                    <li>${_`immersion`}</li>
                    <li>${_`wisdom`}</li>
                  </ol>
                </li>
                <li>
                  ${_`Five powers:`}
                  <ol>
                    <li>${_`faith`}</li>
                    <li>${_`energy`}</li>
                    <li>${_`mindfulness`}</li>
                    <li>${_`immersion`}</li>
                    <li>${_`wisdom`}</li>
                  </ol>
                </li>
                <li>
                  ${_`Seven factors of awakening:`}
                  <ol>
                    <li>${_`mindfulness`}</li>
                    <li>${_`investigation of principles`}</li>
                    <li>${_`energy`}</li>
                    <li>${_`rapture`}</li>
                    <li>${_`tranquility`}</li>
                    <li>${_`immersion`}</li>
                    <li>${_`equanimity`}</li>
                  </ol>
                </li>
                <li>
                  ${_`Noble eightfold path:`}
                  <ol>
                    <li>${_`right view`}</li>
                    <li>${_`right thought`}</li>
                    <li>${_`right speech`}</li>
                    <li>${_`right action`}</li>
                    <li>${_`right livelihood`}</li>
                    <li>${_`right effort`}</li>
                    <li>${_`right mindfulness`}</li>
                    <li>${_`right immersion`}</li>
                  </ol>
                </li>
              </ul>
              <p>
                ${_`A cursory glance at the Pali texts shows how influential and widespread this set of 37 qualities was. It appears in each of the four <i lang="pi">nikāyas</i> (<a class="ref" href="/dn28">DN 28</a>, <a class="ref" href="/dn29">DN 29</a>, <a class="ref" href="/dn16">DN 16</a>, <a class="ref" href="/mn103">MN 103</a>, <a class="ref" href="/mn104">MN 104</a>, <a class="ref" href="/sn22.81">SN 22.81</a>, <a class="ref" href="/sn22.101">SN 22.101</a>, <a class="ref" href="/sn43.12">SN 43.12</a>, <a class="ref" href="/an8.19">AN 8.19</a>) as well as the Udāna (<a class="ref" href="/ud5.5">Ud 5.5</a>). It is one of the few doctrinal teachings to be mentioned several times in the Vinaya (<a class="ref" href="/pj4">Pj 4</a>, <a class="ref" href="/pc8">Pc 8</a>, <a class="ref" href="/pli-tv-kd19">Kd 19</a>). It occurs constantly in the late canonical texts of the Khuddaka (<a class="ref" href="/ne8">Ne 8</a>, <a class="ref" href="/cnd12">Cnd 12</a>, <a class="ref" href="/cnd15">Cnd 15</a>, <a class="ref" href="/cnd20">Cnd 20</a>, <a class="ref" href="/cnd22">Cnd 22</a>, <a class="ref" href="/mnd6">Mnd 6</a>, <a class="ref" href="/mnd7">Mnd 7</a>, <a class="ref" href="/mnd14">Mnd 14</a>, <a class="ref" href="/mnd16">Mnd 16</a>, <a class="ref" href="/ps1.5">Ps 1.5</a>, <a class="ref" href="/ps2.8">Ps 2.8</a>, <a class="ref" href="/ps2.9">Ps 2.9</a>, <a class="ref" href="/mil3.1.13">Mil 3.1.13</a>, <a class="ref" href="/mil6.4.1">Mil 6.4.1</a>, <a class="ref" href="/mil6.4.2">Mil 6.4.2</a>, etc.) as well as the Abhidhamma (<a class="ref" href="/vb17">Vb 17</a>, <a class="ref" href="/Dt1.2">Dt 1.2</a>, <a class="ref" href="/Dt2.1">Dt 2.1</a>, <a class="ref" href="/Dt2.6">Dt 2.6</a>, <a class="ref" href="/kv4.3">Kv 4.3</a>, <a class="ref" href="/kv12.5">Kv 12.5</a>, <a class="ref" href="/kv14.9">Kv 14.9</a>, <a class="ref" href="/kv15.6">Kv 15.6</a>, <a class="ref" href="/kv21.1">Kv 21.1</a>, <a class="ref" href="/kv21.5">Kv 21.5</a>, etc.).`}
              </p>
              <p>
                ${_`But its influence was not to stop there, for it remained a central doctrinal principle in later forms of Buddhism. In the Mahāyāna, for example, the same 37 qualities came to be known as the “37 practices of the Bodhisattva”.`}
              </p>
              <p>
                ${_`The Buddha declared that these teachings emerged from his own direct knowledge. Clearly they are factors of practice, to be developed and experienced by those on the spiritual journey. However, from their earliest appearances, they were also treated as teachings to be learned, memorized, and recited. From <a class="ref" href="/dn29">DN 29</a>:`}
              </p>
              <blockquote>
                <p>
                  ${_`You should all come together and recite in concert, without disputing, those things I have taught you from my direct knowledge, comparing meaning with meaning and phrasing with phrasing, so that this spiritual path may last for a long time.`}
                </p>
              </blockquote>
              <p>
                ${_`Such passages place the 37 factors at the heart of the Buddha’s scriptural legacy. But what, exactly, was to be recited? Surely such a momentous teaching must have entailed something more than simply listing the factors. There must have been an agreed upon body of texts, a canon of scripture recited in unity by the early community. And what could that have been if not these very teachings, the collected discourses on the factors of the path found today in the Mahāvagga? This is not to deny that expansion and elaboration of these has occurred, but the core teachings of the Mahāvagga were, in all probability, the heart of the scriptures for the earliest Buddhists.`}
              </p>
              <p>
                ${_`Certain of the sets focus on a specific area, such as mindfulness or effort, while others have a more overall view, such as the noble eightfold path. Nevertheless, they are deeply interconnected, with the same factors recurring in multiple sets. Overall, they strongly emphasize meditation, although other dimensions of spiritual practice, such as ethics and study, are also found. Here is a brief overview of the general distinctions in perspective between the groups. Note that the first three sets loosely correspond to the final three factors of the noble eightfold path: right effort, right mindfulness, and right immersion.`}
              </p>
              <dl>
                <dt>${_`Four kinds of mindfulness meditation`}</dt>
                <dd>
                  ${_`The practice of undertaking meditation leading to serenity and insight.`}
                </dd>
                <dt>${_`Four right efforts`}</dt>
                <dd>${_`The putting forth of effort in mental cultivation.`}</dd>
                <dt>${_`Four bases of psychic power`}</dt>
                <dd>
                  ${_`Development of deep immersion leading to various extraordinary abilities.`}
                </dd>
                <dt>${_`Five faculties`}</dt>
                <dd>
                  ${_`The mental qualities that lead to liberation, and which characterize the mind of one on the path.`}
                </dd>
                <dt>${_`Five powers`}</dt>
                <dd>${_`The same as the faculties.`}</dd>
                <dt>${_`Seven factors of awakening`}</dt>
                <dd>
                  ${_`Retention and investigation of teachings lead to the progressive deepening of the emotional qualities that ripen in liberation.`}
                </dd>
                <dt>${_`Noble eightfold path`}</dt>
                <dd>
                  ${_`The broadest in scope of the sets and the only one to explicitly mention ethics.`}
                </dd>
              </dl>
              <p>
                ${_`As is common in the suttas, these sets sometimes refer to similar qualities with different terms. The quality of wisdom, for example, is called “observation of principles” (<i lang="pi">dhamānupassanā</i>) as the fourth kind of mindfulness meditation, “inquiry” (<i lang="pi">vīmaṁsa</i>) in the bases for psychic power, “wisdom” (<i lang="pi">paññā</i>) in the faculties and powers, “investigation of principles” (<i lang="pi">dhammavicaya</i>) in the factors of awakening, and “right view” (<i lang="pi">sammādiṭṭhi</i>) in the noble eightfold path. The relations between all these terms are analyzed in detail in the Abhidhamma and commentarial texts.`}
              </p>
              <p>
                ${_`Bear in mind, though, that each context has its own integrity, its own specific purpose and orientation, and the choice of different terms is by no means arbitrary. “Right view”, being placed at the <em>start</em> of the path, emphasizes the theoretical understanding gained by hearing the teaching. “Investigation of principles”, similarly located near the beginning, refers to the reflection and inquiry into these teachings as realized in oneself. “Observation of principles” and “inquiry” occur after the development of deep stillness in absorption meditation, and refer to the inquiry and investigation into the nature of that experience, and the meditative processes and conditions that shape such profound experiences. And “wisdom”, the culmination of all these, is the realization of the four noble truths, the liberating insight of the stream-enterer. So when considered on its own, as a distinct mental factor, they can be regarded as synonyms. But their true depth is realized only by understanding the role they play in their context.`}
              </p>
              <p>
                ${_`When surveying these teachings and reflecting on them as a spiritual path, there is something rather odd about them. They appear quite different from the practices that one normally considers to be “religious”. Where are the rituals? The sacrifice? The devotion to deity? The allegiance to an institution? The symbols, rites, and mythology? These things are starkly, dramatically absent. To be sure, some such things may be found, in one form or another, elsewhere in the canon, and more so in later Buddhist traditions. But here, in the teachings regarded by the Buddha himself as his core message and practice, we find only balanced and reasoned development of the behavior, emotions, and intellect. It is an integrated and rational path, one that does not depend on cultural or historical specifics, but on universal human qualities. The factors that lead to awakening, all 37 of them, are things that every human may find within themselves. In pointing to these qualities, the Buddha was pointing to the spiritual potential of all beings, and offering us the means to grow and develop the best parts of ourselves.`}
              </p>
              <h3>${_`SN 45: Linked Discourses on the Path`}</h3>
              <p>
                ${_`The noble eightfold path was famously declared to be the “middle way” in the Buddha’s very first teaching (<a class="ref" href="/sn56.11">SN 56.11</a>). It covers the entire spiritual path (<a class="ref" href="/sn45.6">SN 45.6</a>, <a class="ref" href="/sn45.19">SN 45.19</a>, <a class="ref" href="/sn45.20">SN 45.20</a>), beginning with the acquisition of right view as the starting point (<a class="ref" href="/sn45.1">SN 45.1</a>), and leading to deep meditative immersion as the immediate precursor to the realization of the four noble truths.`}
              </p>
              <p>
                ${_`The noble eightfold path is said to be a “divine vehicle” which carries us to awakening, its factors compared to the parts of a chariot (<a class="ref" href="/sn45.4">SN 45.4</a>). Practicing it leads to the end of suffering (<a class="ref" href="/sn45.5">SN 45.5</a>), but only if it begins with right view, else it will lead to harming oneself (<a class="ref" href="/sn45.9">SN 45.9</a>).`}
              </p>
              <p>
                ${_`The factors are defined at <a class="ref" href="/sn45.8">SN 45.8</a>, as well as several other places in the canon.`}
              </p>
              <dl>
                <dt>${_`Right view (<i lang="pi">sammādiṭṭhi</i>)`}</dt>
                <dd>${_`Understanding the four noble truths.`}</dd>
                <dt>${_`Right thought (<i lang="pi">sammāsaṅkappa</i>)`}</dt>
                <dd>${_`Thoughts of letting go, love, and kindness.`}</dd>
                <dt>${_`Right speech (<i lang="pi">sammāvācā</i>)`}</dt>
                <dd>${_`Speech that is true, harmonious, gentle, and meaningful.`}</dd>
                <dt>${_`Right action (<i lang="pi">sammākammanta</i>)`}</dt>
                <dd>${_`Avoiding killing, stealing, and sexual misconduct.`}</dd>
                <dt>${_`Right livelihood (<i lang="pi">sammāājīva</i>)`}</dt>
                <dd>${_`Avoiding harmful livelihood.`}</dd>
                <dt>${_`Right effort (<i lang="pi">sammāvāyāma</i>)`}</dt>
                <dd>${_`The four right efforts.`}</dd>
                <dt>${_`Right mindfulness (<i lang="pi">sammāsati</i>)`}</dt>
                <dd>${_`The four kinds of mindfulness meditation.`}</dd>
                <dt>${_`Right immersion (<i lang="pi">sammāsamādhi</i>)`}</dt>
                <dd>${_`The four absorptions.`}</dd>
              </dl>
              <p>
                ${_`The eight factors have a clear progressive aspect, as made clear from the beginning of this collection (<a class="ref" href="/sn45.1">SN 45.1</a>). They follow the same general course that is spelled out in detail in the Gradual Training, though with less emphasis on the monastic life, as both renunciates and lay folk should practice them (<a class="ref" href="/sn45.24">SN 45.24</a>). One hears the teaching and gains an initial understanding (right view). Then one determines to live in accordance with this (right thought), undertaking the essentials of ethical conduct in speech (right speech) and body (right action), and ensuring that one does not earn money in a manner that causes harm (right livelihood). With this foundation one makes an effort to purify the mind (right effort), undertaking meditation (right mindfulness) leading to deep absorption (right immersion) (<a class="ref" href="/sn45.28">SN 45.28</a>).`}
              </p>
              <p>
                ${_`When all these factors have been fulfilled, the mind is ready to make the breakthrough to the realization of the four noble truths. In this way the understanding of four noble truths, beginning as a concept accepted on faith, gradually deepens throughout the spiritual journey, nourished by experience and reflection. Right view guides us on each step of the path, learning from mistakes, revealing our hidden motivations, and uncovering unexpected possibilities. Ultimately it transforms into the liberating insight of the noble ones (<a class="ref" href="/sn45.13">SN 45.13</a>, <a class="ref" href="/sn45.35">SN 45.35</a>, etc.). The key to this transformation is the brilliant clarity and stillness of meditative absorption, a higher consciousness that sees further and deeper than ever before, and which has the power to completely eradicate greed, hate, and delusion (<a class="ref" href="/sn45.36">SN 45.36</a>, etc.).`}
              </p>
              <p>
                ${_`Nevertheless, despite this progression, it is obviously not the case that the factors are to be undertaken in a literal one-at-a-time fashion. The “path” is only a metaphor, and in real life spiritual development is more complex.`}
              </p>
              <p>
                ${_`The factors of the path are best seen as providing a framework for reflecting on and if necessary changing one’s own life and practice. Each of these factors is essential, and if you find yourself missing out on higher factors, try asking whether you’ve put enough work into the basics. Sometimes people seem enthusiastic to get to the higher states of consciousness, without laying the broad and secure foundations offered by the simpler factors of the path. If developing deep meditation is proving difficult, then the answer is not to try to force it to ripen quicker, nor, worse, to explain it away as being somehow unnecessary. Rather, pay closer attention to improving right view through study and discussion of Dhamma; to developing right thought by becoming more generous and open-hearted; or to being more careful in one’s ethical and business conduct (<a class="ref" href="/sn45.50">SN 45.50–54</a>).`}
              </p>
              <p>
                ${_`And remember, this path is not walked alone. For all the emphasis on solitary meditation, this <i lang="pi">saṁyutta</i> reminds us that good friendship is the whole of the spiritual life (<a class="ref" href="/sn45.2">SN 45.2</a>, <a class="ref" href="/sn45.3">SN 45.3</a>), for good friendship precedes the noble eightfold path (<a class="ref" href="/sn45.49">SN 45.49</a>).`}
              </p>
              <h3>${_`SN 46: Linked Discourses on the Awakening Factors`}</h3>
              <p>
                ${_`These seven factors are called the “awakening factors” (<i lang="pi">bojjaṅga</i>, i.e. <i lang="pi">bodhi</i> + <i lang="pi">aṅga</i>) because they lead to awakening (<a class="ref" href="/sn46.5">SN 46.5</a>, <a class="ref" href="/sn46.21">SN 46.21</a>). Of themselves, they focus on the psychology of contemplation, but the <i lang="pi">saṁyutta</i> makes it clear from the start that, like all presentations of the path, they rest on ethics (<a class="ref" href="/sn46.1">SN 46.1</a>).`}
              </p>
              <p>
                ${_`Unlike the factors of the path, there is no explicit definition. Nevertheless, we should of course interpret these factors in the same way as they occur in the eightfold path and elsewhere. However, there are some new factors, as well as a few places that offer a new perspective on some familiar factors. Most of the following details come from <a class="ref" href="/sn46.52">SN 46.52</a>.`}
              </p>
              <dl>
                <dt>${_`Mindfulness (<i lang="pi">sati</i>)`}</dt>
                <dd>
                  ${_`Includes both the recollection of teachings (<a class="ref" href="/sn46.3">SN 46.3</a>) as well as mindful awareness of phenomena internal and external.`}
                </dd>
                <dt>${_`Investigation of principles (<i lang="pi">dhammavicaya</i>)`}</dt>
                <dd>
                  ${_`Includes both reflection and investigation of the teachings (<a class="ref" href="/sn46.3">SN 46.3</a>) as well as investigation into phenomena internal and external.`}
                </dd>
                <dt>${_`Energy (<i lang="pi">viriya</i>)`}</dt>
                <dd>${_`Both mental and physical.`}</dd>
                <dt>${_`Rapture (<i lang="pi">pīti</i>)`}</dt>
                <dd>
                  ${_`This is the experience of uplifting joy that emerges as the mind becomes peaceful in meditation. It includes the rapture of the first and second absorptions.`}
                </dd>
                <dt>${_`Tranquility (<i lang="pi">passadhi</i>)`}</dt>
                <dd>${_`Both physical and mental`}</dd>
                <dt>${_`Immersion (<i lang="pi">samādhi</i>)`}</dt>
                <dd>${_`The absorptions.`}</dd>
                <dt>${_`Equanimity (<i lang="pi">upekkhā</i>)`}</dt>
                <dd>
                  ${_`This may be both the equanimity of the higher states of immersion as well as that of deep insight.`}
                </dd>
              </dl>
              <p>
                ${_`One detail of the preceding probably needs further explanation; that is, the idea that mindfulness includes recollection of the teachings. Mindfulness is defined throughout the suttas as the ability to recollect things that were said and done long ago (<a class="ref" href="/dn33">DN 33</a>, <a class="ref" href="/dn34">DN 34</a>, <a class="ref" href="/mn53">MN 53</a>, <a class="ref" href="/sn48.9">SN 48.9</a>, <a class="ref" href="/sn48.50">SN 48.50</a>, <a class="ref" href="/an4.35">AN 4.35</a>, <a class="ref" href="/an8.13">AN 8.13</a>, <a class="ref" href="/an10.17">AN 10.17</a>, etc.). The root meaning of the word <i lang="pi">sati</i> is in fact “memory” and in the Brahmanical traditions it refers to the memorized scriptures. But of course today we understand mindfulness as “clear awareness” of phenomena in the present.`}
              </p>
              <p>
                ${_`This <i lang="pi">saṁyutta</i> offers a clue that helps resolve these two senses. In <a class="ref" href="/sn46.56">SN 46.56</a>, a brahmin asks the Buddha why he can sometimes remember his chanting and sometimes cannot. The Buddha explains that the presence of the hindrances obscures his memory, giving an elaborate series of similes comparing water in various states with the various hindrances. How, we might wonder, does a reciter of oral texts achieve this? <em>By maintaining continued and clear focus during the act of recitation</em>. When the mind wanders and gets distracted, the recitation is lost. <i lang="pi">Sati</i> does not mean the unstructured memories that happen to come to mind, but the steady flow and continuity of consciously focused awareness. And in this way the act of recollecting scriptures suddenly seems a lot like keeping attention on ones’ meditation.`}
              </p>
              <p>
                ${_`The factors are sequential, with each serving as condition or fuel for the next (<a class="ref" href="/sn46.3">SN 46.3</a>). Multiple suttas stress this aspect of conditionality. Each of the awakening factors is nourished by a specific kind of fuel (<a class="ref" href="/sn46.51">SN 46.51</a>). The set as a whole emerges from the practice of the four kinds of mindfulness meditation and the series of practices that underlie them (<a class="ref" href="/sn45.6">SN 45.6</a>). They affect and condition the mind in distinct ways; thus when the mind is tired, it’s best to develop investigation, energy, and rapture, but when restless, develop tranquility, immersion, and equanimity. But mindfulness is always useful (<a class="ref" href="/sn46.53">SN 46.53</a>). And the factors themselves are the condition for awakening (<a class="ref" href="/sn46.56">SN 46.56</a>).`}
              </p>
              <p>
                ${_`Nevertheless, even the perfected ones continue to practice them, donning any one of them whenever they wish, like a garment (<a class="ref" href="/sn46.4">SN 46.4</a>). Such a one has “acquired the path” and understands the true power of the awakening factors to lead to the end of rebirth (<a class="ref" href="/sn46.30">SN 46.30</a>).`}
              </p>
              <p>
                ${_`The <i lang="pi">saṁyutta</i> repeatedly opposes the awakening factors with their dark counterparts, the five hindrances of sensual desire, ill will, dullness and drowsiness, restlessness and remorse, and doubt. These are compared to corruptions in gold (<a class="ref" href="/sn46.33">SN 46.33</a>) or to parasites (<a class="ref" href="/sn46.39">SN 46.39</a>).`}
              </p>
              <p>
                ${_`One of the unique aspect of the awakening factors is that their recitation is said to be effective in helping cure disease. Several suttas speak of how a sick monk—and even the Buddha himself—becomes inspired by hearing them recited and rises up cured (<a class="ref" href="/sn46.14">SN 46.14–16</a>). Understandably, this has ensured that reciting passages on the awakening factors for sick people remains popular in Theravadin culture. If such recitation seems less effective today than in the suttas, it should be borne in mind that these are cases of advanced and experienced meditators, perfected ones indeed, who had already developed these factors to completion. Their inspiration is on a different level than that of an ordinary person. And even so there is no guarantee: there are plenty of cases in the early texts where perfected ones fall ill with no cure.`}
              </p>
              <p>
                ${_`Most of the awakening factors refer to the emotional aspects of spiritual path, the joy and peace of meditation. This is further emphasized in <a class="ref" href="/sn46.54">SN 46.54</a>, which connects the awakening factors with the four immeasurables or divine meditations—love, compassion, rejoicing, and equanimity. The Buddhist mendicants are challenged by followers of other paths, who say that they too teach the development of these things. The Buddha points out, however, that he describes <em>how</em> to develop these things to their fullest potential. And to do this the immeasurables are empowered by the awakening factors.`}
              </p>
              <h3>${_`SN 47: Linked Discourses on Mindfulness Meditation`}</h3>
              <p>
                ${_`The Pali term <i lang="pi">satipaṭṭhāna</i> means the “establishing of mindfulness”. I usually render it more colloquially as simply “mindfulness meditation”. While elsewhere <i lang="pi">sati</i> is defined as “memory”, here it is described as <i lang="pi">anupassanā</i>, “sustained observation”. It refers to the meditative practice of setting up and maintaining continued and unbroken awareness in four distinct arenas:`}
              </p>
              <dl>
                <dt>${_`Body (<i lang="pi">kāya</i>)`}</dt>
                <dd>
                  ${_`Any aspect of the physical, including the breath, the postures, parts of the body, and so on.`}
                </dd>
                <dt>${_`Feelings (<i lang="pi">vedanā</i>)`}</dt>
                <dd>
                  ${_`Different kinds of feeling, whether painful, pleasurable, or neutral, spiritual or carnal.`}
                </dd>
                <dt>${_`Mind (<i lang="pi">citta</i>)`}</dt>
                <dd>
                  ${_`States of awareness, whether under the influence of greed, hate, and delusion, or free of such.`}
                </dd>
                <dt>${_`Principles (<i lang="pi">dhammā</i>)`}</dt>
                <dd>
                  ${_`Understanding the causal relations that lead to suffering or to peace, especially by reflecting on the process of meditation itself.`}
                </dd>
              </dl>
              <p>
                ${_`Each of these can include a diverse range of experience. But in meditation it is important to keep focus. The standard formula phrases this through the use of the reflexive idiom <i lang="pi">kāye kāyānupassī</i>. Here the locative case is used quite literally to mean “one of the bodies in the body”, or as we would say in English, a particular aspect of the body. Thus the meditator does not continually shift attention to whatever comes into mind, but maintains a steady, continuous awareness on a specific aspect of physical experience.`}
              </p>
              <p>
                ${_`This is a progressive practice. The nature of this progress becomes more clear when it is recognized that mindfulness of breathing is a form of <i lang="pi">satipaṭṭhāna</i> practice.`}
              </p>
              <ol>
                <li>
                  ${_`Meditation begins with attention to the relatively coarse phenomena of the physical breath until it becomes calm and still.`}
                </li>
                <li>${_`A subtle sense of joy and bliss pervades the breath and the body.`}</li>
                <li>
                  ${_`The mind becomes freed, immersed in the singular experience of the bliss of release.`}
                </li>
                <li>
                  ${_`One contemplates the changing process of meditation that has led to this point. The mind, empowered by immersion, lets go.`}
                </li>
              </ol>
              <p>
                ${_`But <i lang="pi">satipaṭṭhāna</i> is broader than I have indicated here, for it includes not only the positive experiences that evolve during meditation, but also the negative ones: the pain, the constricted mind, the hindrances. By encompassing the full range of experience, <i lang="pi">satipaṭṭhāna</i> promotes a broad, inclusive approach to meditation, one based on awareness rather than control, laying the groundwork for the flowering of wisdom.`}
              </p>
              <p>
                ${_`This <i lang="pi">saṁyutta</i> presents a series of insightful and often delightful suttas on <i lang="pi">satipaṭṭhāna</i>, but it does not define the scope of the meditation. The definitions above are derived from the longer discourses today found at <a class="ref" href="/mn10">MN 10</a> and <a class="ref" href="/dn22">DN 22</a>. However, these have clearly undergone considerable late development as compared with the short discourses of the <i lang="pi">saṁyutta</i>, and one cannot simply assume that everything in <a class="ref" href="/mn10">MN 10</a> and <a class="ref" href="/dn22">DN 22</a> applies in the <i lang="pi">saṁyutta</i>.`}
              </p>
              <p>
                ${_`The Pali compound <i lang="pi">satipaṭṭhāna</i> resolves to <i lang="pi">sati</i> + <i lang="pi">upaṭṭhāna</i>. This phrase is familiar from the Gradual Training, where it refers to the moment when a practitioner sits down in seclusion and begins meditation by “establishing mindfulness” (<i lang="pi">satiṁ upaṭṭhapetvā</i>). It thus refers primarily to the formal practice of meditation.`}
              </p>
              <p>
                ${_`Today it is common to speak of “mindfulness in daily life”, but in the suttas this is called <i lang="pi">sampajañña</i>, which I translate as “situational awareness”. This is one of the series of practices in the Gradual Training that lays the groundwork for formal meditation. <a class="ref" href="/sn47.2">SN 47.2</a> makes plain the distinction between these two by treating them as two qualities the mendicant should develop. This is not to say, of course, that they are completely separate, for nothing in spiritual and mental development happens in isolation. <i lang="pi">Sampajañña</i> is not limited to “mindfulness in daily life”, but plays a role in absorptions and insight as well (see <a class="ref" href="/sn47.35">SN 47.35</a>). But it is to say that these two practices are primarily distinct, with situational awareness helping to prepare the mind for mindfulness meditation.`}
              </p>
              <p>
                ${_`The standard formula describes the mindful meditator with four terms. These refer back to the fundamental helper practices of the Gradual Training, reminding us that <i lang="pi">satipaṭṭhāna</i> meditation does not happen in isolation:`}
              </p>
              <dl>
                <dt>${_`Keen (<i lang="pi">ātāpī</i>)`}</dt>
                <dd>${_`possessing persistent and unflagging energy.`}</dd>
                <dt>${_`Aware (<i lang="pi">sampajāno</i>)`}</dt>
                <dd>${_`possessing situational awareness.`}</dd>
                <dt>${_`Mindful (<i lang="pi">satimā</i>)`}</dt>
                <dd>${_`possessing mindfulness.`}</dd>
                <dt>
                  ${_`Rid of desire and aversion for the world (<i lang="pi">vineyya loke abhijjhādomanassaṁ</i>)`}
                </dt>
                <dd>
                  ${_`having eliminated the overt forms of desire and aversion through the practice of sense restraint. The phrase <i lang="pi">abhijjhādomanassa</i> is elsewhere used only in the context of sense restraint (<a class="ref" href="/dn10">DN 10</a>, <a class="ref" href="/mn33">MN 33</a>, <a class="ref" href="/sn35.120">SN 35.120</a>, <a class="ref" href="/an4.14">AN 4.14</a>, etc.).`}
                </dd>
              </dl>
              <p>
                ${_`In the eightfold path, the awakening factors, the faculties, and the powers, mindfulness meditation is one of the key factors leading to deep meditative stillness and immersion. It is defined elsewhere as “the basis for immersion in <i lang="pi">samādhi</i>” (<a class="ref" href="/mn44">MN 44</a>: <i lang="pi">cattāro satipaṭṭhānā samādhinimittā</i>). With the charming parable of a cook, <a class="ref" href="/sn47.8">SN 47.8</a> shows how a skillful mindfulness meditator, by understanding the characteristics of their own mind, enters immersion and abandons defilements, while a poor meditator fails. In <a class="ref" href="/sn47.4">SN 47.4</a> the Buddha urges all meditators, whether beginners or advanced, to practice mindfulness to the level of full immersion (<i lang="pi">ekodibhūtā vippasannacittā samāhitā ekaggacittā</i>; “at one, with minds that are clear, immersed in <i lang="pi">samādhi</i>, and unified”).`}
              </p>
              <p>
                ${_`The centrality of meditative immersion is reinforced by the saying that <i lang="pi">satipaṭṭhāna</i> is the “path to convergence” (<i lang="pi">ekāyano maggo</i>). This saying is famous from <a class="ref" href="/mn10">MN 10</a> but sourced from the Saṁyutta, where the saying is placed in the mouth of Brahmā (<a class="ref" href="/sn47.1">SN 47.1</a>, <a class="ref" href="/sn47.18">SN 47.18</a>, <a class="ref" href="/sn47.43">SN 47.43</a>). It is a term from the Upaniṣads, which in contemplative contexts means “the place where all things come together as one” (Bṛhadāraṇyaka Upaniṣad 2.4:11).`}
              </p>
              <p>
                ${_`The meditative absorptions (<i lang="pi">jhānas</i>) are explicitly brought into <i lang="pi">satipaṭṭhāna</i> in the extended and late passage on the four noble truths in <a class="ref" href="/dn22">DN 22</a>. However they are implicit in many places, including the observation of feelings under the notions of “spiritual rapture” and “spiritual bliss”, which are defined in terms of the absorptions (<a class="ref" href="/sn36.31">SN 36.31</a>); as well as in the observation of mind under the mind that is “expansive”, “unexcelled”, “immersed”, “freed”, all of which are terms for deep states of absorption; or the discussion at <a class="ref" href="/mn125">MN 125</a>.`}
              </p>
              <p>
                ${_`This is not to say that insight (or discernment, <i lang="pi">vipassanā</i>) has no place in <i lang="pi">satipaṭṭhāna</i>. On the contrary, the fourth of the <i lang="pi">satipaṭṭhānas</i>, the observation of principles, is primarily concerned with the insight that follows from meditative immersion. Here, as described in <a class="ref" href="/mn10">MN 10</a>, one does not merely observe the presence and absence of various factors, one understands the reason why they appear and disappear. And understanding causality is the heart of insight. This is reinforced in the teaching on mindfulness of breathing, which introduces the contemplation of impermanence at this point.`}
              </p>
              <p>
                ${_`Two suttas bring the <i lang="pi">vipassanā</i> aspect to the fore. In <a class="ref" href="/sn47.40">SN 47.40</a>, the Buddha first teaches the standard <i lang="pi">satipaṭṭhāna</i> practice, then introduces the “development” of <i lang="pi">satipaṭṭhāna</i>. In the suttas, “development” means the enhancement and expansion of what is already there. (<i lang="pi">Bhāvanā</i> is derived from the causitive form of the word “to be”, i.e. “to make be more”.) This further development involves contemplating all four of the <i lang="pi">satipaṭṭhānas</i> in terms of origin and cessation. The exact meaning of this is spelled out in <a class="ref" href="/sn47.42">SN 47.42</a>, which gives the origin of each of the four.`}
              </p>
              <p>
                ${_`A distinctive feature of this collection is the number of charming parables, which are as memorable as they are amusing. In addition to the story of the cook which we mentioned above (<a class="ref" href="/sn47.8">SN 47.8</a>), we hear how a quail learned to escape a hawk (<a class="ref" href="/sn47.6">SN 47.6</a>), how a foolish monkey got trapped in tar (<a class="ref" href="/sn47.7">SN 47.7</a>), and how two acrobats support each other (<a class="ref" href="/sn47.19">SN 47.19</a>). Another discourse sets a seemingly impossible challenge for mindfulness practice: to walk, carrying a bowl of oil filled to the brim, between a popular performer and the crowd jostling to see her, while a man with a drawn sword waits to chop off your head if you spill a drop (<a class="ref" href="/sn47.20">SN 47.20</a>)!`}
              </p>
              <h3>${_`SN 48: Linked Discourses on the Faculties`}</h3>
              <p>
                ${_`The word <i lang="pi">indriya</i> has a rather interesting history. It occurs 39 times in the Ṛg Veda in the general sense of “the power of Indra”, the great warrior-god and dragon-slayer known in Pali as Sakka. But the nature of this power is perhaps not what one might imagine, for more than two-thirds of these cases connect <i lang="pi">indriya</i> with <i lang="pi">soma</i>.`}
              </p>
              <p>
                ${_`Now, <i lang="pi">soma</i> was of course a drug, probably a preparation from the amphetamine-like stimulant ephedra. It was drunk by the ancient Indo-Europeans to imbue warriors with a berserk energy on the battlefield. As well as taming the horse and inventing the fast two-wheeled chariot, drug-enhanced combat was one of the key innovations underlying the military success of the Indo-Europeans.`}
              </p>
              <p>
                ${_`In the Vedic culture this was ritualized as religious practice: Indra himself drinks <i lang="pi">soma</i> to magnify his potency. He becomes unstoppable and crushes all his enemies before him. His devotees follow his example, manifesting the power of the god within themselves. The drug-induced high gave them the might of the gods. But the crucial point is that the power is not borrowed from Indra; rather, both god and devotee draw power from the same source. It was inside them all along, it just needed the <i lang="pi">soma</i> to bring it out.`}
              </p>
              <p>
                ${_`By the time of the Buddha, the Vedic age was long-gone and the <i lang="pi">soma</i> largely forgotten. Later commentators, unfamiliar with its Vedic roots, defined <i lang="pi">indriya</i> as “rulership”, and the various <i lang="pi">indriyas</i> in Buddhism as the governing faculties that exercise control over their domains. But the use in the suttas shows that the meaning lies closer to the Vedic sense of “potency”. The <i lang="pi">indriyas</i> are innate potentials that can be manifested in the right conditions.`}
              </p>
              <p>
                ${_`This is why, after the Buddha’s awakening, he surveyed the world and assessed the <i lang="pi">indriyas</i> of the many different beings in it. He saw the spiritual potential latent within each person to different degrees, and realized that this hidden potential could be drawn out with the right teaching and encouragement (<a class="ref" href="/sn6.1">SN 6.1</a>).`}
              </p>
              <p>
                ${_`To formulate a teaching on the <i lang="pi">indriyas</i>, the Buddha drew upon a set of five qualities he had developed under his former teachers Āḷāra Kālāma and Uddaka Rāmaputta (<a class="ref" href="/mn26#17">MN 26:17</a>, etc.). That these really are a set of teachings in the brahmanical tradition is confirmed by their mention in the Yogasūtra (1.20). He called this set the five <i lang="pi">indriyas</i>.`}
              </p>
              <p>
                ${_`The same qualities were also known as the <i lang="pi">balas</i> or “powers”. At <a class="ref" href="/sn48.43">SN 48.43</a> the Buddha discusses the relation between these two sets, saying they are like a river that flows around an island. They are part of the same stream and go to the same place, but from a certain perspective they can be distinguished. The term <i lang="pi">bala</i>, like <i lang="pi">indriya</i>, is Vedic, with the same basic sense of potency or strength, and occurs in contexts featuring Indra and his <i lang="pi">soma</i>. The <i lang="pi">balas</i> have only some repetition templates in the <i lang="pi">saṁyutta</i>, and are defined in the Aṅguttara (<a class="ref" href="/an5.14">AN 5.14</a>).`}
              </p>
              <p>
                ${_`The <i lang="pi">indriyas</i> (together with the <i lang="pi">balas</i>) came to be included in the 37 <i lang="pi">bodhipakkhiyadhammā</i>, and form the heart of the Indriya Saṁyutta, where they are defined as follows (<a class="ref" href="/sn48.8">SN 48.8</a>, <a class="ref" href="/sn48.9">SN 48.9</a>, <a class="ref" href="/sn48.10">SN 48.10</a>):`}
              </p>
              <dl>
                <dt>${_`Faith (<i lang="pi">saddhā</i>)`}</dt>
                <dd>${_`Faith in the Buddha’s awakening.`}</dd>
                <dt>${_`Energy (<i lang="pi">viriya</i>)`}</dt>
                <dd>${_`The effort to give up the bad and develop the good.`}</dd>
                <dt>${_`Mindfulness (<i lang="pi">sati</i>)`}</dt>
                <dd>
                  ${_`Recollection of things said and done long ago, and the four kinds of mindfulness meditation.`}
                </dd>
                <dt>${_`Immersion (<i lang="pi">samādhi</i>)`}</dt>
                <dd>
                  ${_`Unification of mind based on letting-go; further defined as the four absorptions (<i lang="pi">jhānas</i>).`}
                </dd>
                <dt>${_`Wisdom (<i lang="pi">paññā</i>)`}</dt>
                <dd>${_`Understanding impermanence and the four noble truths.`}</dd>
              </dl>
              <p>
                ${_`By beginning with faith (<i lang="pi">saddhā</i>), the text introduces a quality not explicitly mentioned in the earlier sets. In Buddhism, faith is essential. In traditional Buddhist lands to this day, the quiet yet steadfast faith and devotion to the Buddha and his teachings is ever-present, expressed through offerings of flowers, through grace and humility in the presence of the sacred, or through uplifting recollection of the Buddha’s words. It is an emotional quality, often paired with <i lang="pi">pema</i>, “affection”. But the Buddha explicitly rejected blind or “baseless faith” (<a class="ref" href="/mn95#13">MN 95:13</a>: <i lang="pi">amūlikā saddhā</i>) and urged his followers to develop a “grounded faith” (<a class="ref" href="/mn47#16">MN 47:16</a>: <i lang="pi">ākāravatī saddhā</i>) based on careful and critical inquiry.`}
              </p>
              <p>
                ${_`This is a faith that is akin to the confidence and trust that a scientist needs when relying on the findings and theories of others in their field. It is essential in order to get anywhere; but at the same time, it is completely provisional. If there is anything that is contradicted by the evidence, it should be rejected. And once you have seen the truth for yourself, there is no need for faith, as pointed out by Venerable Sāriputta in <a class="ref" href="/sn48.44">SN 48.44</a>.`}
              </p>
              <p>
                ${_`Following the pattern we have seen in previous sets of qualities, the mention of faith aligns the faculties with the progress of one following the Gradual Training. First one hears the teaching and gains faith, then one goes forth and applies energy in practice, undertaking mindfulness meditation, realizing the absorptions and the wisdom into impermanence that follows on from them. At this point a practitioner goes beyond simple belief or reasoned argument and sees the truth for themselves. Their faith is described as <i lang="pi">aveccappasāda</i>, “experiential” or “confirmed” confidence. The word <i lang="pi">avecca</i> literally means “having undergone”. It is only at this point that faith is unshakable.`}
              </p>
              <p>
                ${_`Many of suttas on the five faculties are built along the same kinds of patterns and templates as the <i lang="pi">saṁyuttas</i> on the noble eightfold path or the awakening factors. But in two related respects they are quite distinctive. And both of these distinctive features stem from the root sense of <i lang="pi">indriya</i> as “potency” or “potential”.`}
              </p>
              <p>
                ${_`The first of these two features is the use of the faculties to grade practitioners. One who truly understands the faculties is a stream-enterer (<a class="ref" href="/sn48.2">SN 48.2</a>, <a class="ref" href="/sn48.3">SN 48.3</a>), while one who, based on this understanding, completely lets go is a perfected one (<a class="ref" href="/sn48.4">SN 48.4</a>, <a class="ref" href="/sn48.5">SN 48.5</a>). This grading of practitioners based on their development of the faculties is extended in more detail in a further series of discourses (<a class="ref" href="/sn48.12">SN 48.12–18</a>, <a class="ref" href="/sn48.24">SN 48.24</a>).`}
              </p>
              <p>
                ${_`So while, in one sense, we all have these faculties within us as a hidden potential, they do not manifest their strength until empowered by the path. Once that happens, at the moment of stream-entry, they are as unstoppable as Indra on a dragon-slaying rampage.`}
              </p>
              <p>
                ${_`To understand the second distinctive feature, recall that in these <i lang="pi">saṁyuttas</i> we are dealing with the path, the fourth of the noble truths, which is “to be developed” (<i lang="pi">bhāvetabba</i>). And while the Indriya Saṁyutta, like other <i lang="pi">saṁyuttas</i> on the path, does indeed speak of the “development of the faculties”, a series of suttas also speaks of understanding the faculties in light of the four noble truths (<a class="ref" href="/sn48.2">SN 48.2–7</a>). Normally such phrasing is found in discourses dealing with the first noble truth, such as those on the aggregates or sense fields, which are “to be fully understood”. Here the texts are blurring the distinction between the first and fourth noble truths. To be sure, this is not unique; we have already noted that a couple of discourses on <i lang="pi">satipaṭṭhāna</i> do a similar thing in a different way. But it is unusual, and certainly the emphasis is unique.`}
              </p>
              <p>
                ${_`There is nothing doctrinally difficult about this; after all, the path is conditioned (<a class="ref" href="/an4.34">AN 4.34</a>), and all conditioned things are suffering. But the Buddha usually spoke of the path in glowingly positive terms, not about its suffering and drawbacks.`}
              </p>
              <p>
                ${_`Once again, this makes sense when we consider the faculties as inner potentials, as something that we already possess in a latent form to one degree or another. In understanding the faculties we are understanding <em>who we are</em> and <em>who we might become</em>.`}
              </p>
              <p>
                ${_`This idea that an <i lang="pi">indriya</i> is a potency or ability or strength possessed by a person is further developed in the remainder of the <i lang="pi">saṁyutta</i>, which introduces a series of faculties beyond the basic five. Together with the five faculties these make up a list of 22 faculties, which became a standard set in the Abhidhamma (see <a class="ref" href="/vb5">Vb 5</a>). Here they are in the Abhidhamma sequence:`}
              </p>
              <ul>
                <li>
                  ${_`The six sense faculties (<a class="ref" href="/sn48.25">SN 48.25</a>).`}
                </li>
                <li>
                  ${_`Three biological faculties: femininity, masculinity, and vitality (<a class="ref" href="/sn48.22">SN 48.22</a>).`}
                </li>
                <li>
                  ${_`Five kinds of feeling as faculties (<a class="ref" href="/sn48.31">SN 48.31</a>).`}
                </li>
                <li>${_`The five spiritual faculties.`}</li>
                <li>
                  ${_`Three faculties relating to stages of awakening (<a class="ref" href="/sn48.23">SN 48.23</a>).`}
                </li>
              </ul>
              <p>
                ${_`Senses, feelings, even biological attributes, are things that everyone possesses. They must be understood as part of conditioned reality, and hence suffering, but they can be harnessed to empower the spiritual path.`}
              </p>
              <h3>${_`SN 51: Linked Discourses on the Bases for Psychic Power`}</h3>
              <p>
                ${_`We have learned that the terms <i lang="pi">indriya</i> and <i lang="pi">bala</i>, which we translate as “faculty” and “power” were Vedic terms closely associated with the divine might of the war-god Indra. The current <i lang="pi">saṁyutta</i> deals with <i lang="pi">iddhi</i>, another Vedic term with a similar meaning of “success, power, potency”. Note that the Pali <i lang="pi">iddhi</i> is identical in meaning with two Vedic terms, <i lang="san">siddhi</i> and <i lang="san">ṛddhi</i>, but formally it is derived from the latter. <i lang="pi">Pāda</i> literally means “foot”, and since <i lang="pi">iddhipāda</i> is defined as the “path or practice to gaining <i lang="pi">iddhi</i>” (<a class="ref" href="/sn51.27">SN 51.27</a>), it’s tempting to maintain the metaphor by speaking of the “four footsteps to psychic power”.`}
              </p>
              <p>
                ${_`<i lang="pi">Iddhis</i> may refer to various kinds of success, potency, or power, but in this context they consist of various astonishing feats of psychic power or superpowers. Such feats have a long and colorful history in India. In the Vedas, as we have seen, they originated in the legendary military prowess of the gods, to which mortals aspired with the aid of stimulants. As the <i lang="pi">soma</i> vanished, it seems, other means of transcending normal human and physical limits were sought. Ascetics undertook punishing mortifications (<i lang="pi">tapas</i>), torturing their bodies in search of superpowers. While some pre-Buddhist religious practitioners—notably those of the Jains and the Upaniṣads—had set themselves more lofty and worthy goals than mere powers, there remained many for whom spiritual practice was a means to these decidedly worldly ends.`}
              </p>
              <p>
                ${_`The modern cultural fascination with superheroes shows that this is not bound to a specific cultural time or place. It is about the very human longing for transcendence and transformation, becoming other, becoming more. Superheroes display many of the same kinds of powers talked about in the Buddhist and other ancient Indian texts: mind-reading, enhanced senses, the ability to control the elements or to multiply one’s form, to fly in the sky and even through space (<a class="ref" href="/sn51.11">SN 51.11</a>). And the means by which powers are gained remain similar to the pre-Buddhist traditions: they may be of divine or alien origin; or derived from a drug or chemical agent; or the outcome of enduring trials and suffering.`}
              </p>
              <p>
                ${_`Dispensing with these methods, however, the Buddha said that superpowers are gained through pure mental development or meditation. The focus shifted from the powers themselves to the means for attaining them; which, it turns out, also happens to be the path to awakening. The various powers extend or enhance ordinary human abilities, and they may be developed in the same way as any other ability is developed: by practice.`}
              </p>
              <p>
                ${_`Despite their frequent mention in Buddhist texts, psychic powers are notably omitted when it comes to the things that are really important. They are side-effects of the spiritual path, things that may be fun and of some worth as preliminary exercises, but far from the true goal (see <a class="ref" href="/sn12.70">SN 12.70</a>). The Buddha in fact had a decidedly ambiguous attitude to powers, especially when they were shown off. He forbade the monastics from displaying them publicly, saying monks who make such displays were like a woman who shows her private parts for a cheap coin (<a class="ref" href="/pli-tv-kd15#8.2">Kd 15:8.2</a>). Displays of psychic powers are moreover criticized because they seem like mere magic (<a class="ref" href="/dn11#5">DN 11:5</a>, <a class="ref" href="/an3.60">AN 3.60</a>). And the possession of superpowers was by no means a sign of genuine spiritual attainment, for even Devadatta, the Buddha’s arch-nemesis, was said to have attained them (<a class="ref" href="/pli-tv-kd17#1.4">Kd 17:1.4</a>).`}
              </p>
              <p>
                ${_`None of this addresses the question of whether such powers are real. The suttas assume throughout that they are, and there is no reason to think this does not reflect the Buddha’s own views. Traditional Buddhism has always accepted the reality of experiences and powers beyond the normal, and Buddhist cultures are full of anecdotes and stories about such events. Rigorous studies, however, are harder to come by. The extraordinary <cite class="book">Irreducible Mind</cite>, a sustained critique of reductionist theories of mind, assembles hundreds of studies into various kinds of extraordinary phenomena. While a reasonable person may well remain skeptical, it seems there is a significant body of evidence in support of such things as mind-reading or recollection of past lives. The ability to fly or to touch the sun remain, sadly, unattested.`}
              </p>
              <p>
                ${_`Normally in the suttas the term <i lang="pi">iddhi</i> is used for a specific set of psychic powers, which primarily exhibit mastery over the physical realm (<a class="ref" href="/sn51.19">SN 51.19</a>, etc.). These are typically included within a broader set of six “direct knowledges” (<i lang="pi">abhiññā</i>), which are also mentioned in this <i lang="pi">saṁyutta</i> (<a class="ref" href="/sn51.11">SN 51.11</a>). The final one of these is the ending of defilements and rebirth, the true goal of Buddhist practice.`}
              </p>
              <p>
                ${_`As to the substance of the <i lang="pi">iddhipādas</i>, there are four basic terms:`}
              </p>
              <dl>
                <dt>${_`Enthusiasm (<i lang="pi">chanda</i>)`}</dt>
                <dd>
                  ${_`This is one of the most common words for “desire”. While not formally mentioned as an item in the other lists of the <i lang="pi">bodhipakkhiyadhammā</i>, it appears in the formula for the four right efforts. It is the desire to do good, to practice, to escape suffering.`}
                </dd>
                <dt>${_`Energy (<i lang="pi">viriya</i>)`}</dt>
                <dd>
                  ${_`This is the single most common factor among the 37 <i lang="pi">bodhipakkhiyadhammā</i>. However in the bases for psychic power it receives special emphasis as it is not only one of the factors, but also qualifies each of the factors.`}
                </dd>
                <dt>${_`Mind (<i lang="pi">citta</i>)`}</dt>
                <dd>${_`Thought, idea, resolve, or awareness (see below).`}</dd>
                <dt>${_`Inquiry (<i lang="pi">vīmaṁsā</i>)`}</dt>
                <dd>
                  ${_`Inquiry or investigation into the Dhamma, but especially into what obstructs meditation and what helps it. In this context, it is not too far in meaning from “curiosity”.`}
                </dd>
              </dl>
              <p>
                ${_`Curiously enough, though the word <i lang="pi">citta</i> has a wide range of meanings, it is not clearly defined in this context. Even the Abhidhamma and commentaries offer little more than the usual list of synonyms for “mind” (<a class="ref" href="/vb9">Vb 9</a>). Normally in the context of the path, the mind is “to be developed” (see <a class="ref" href="/sn51.9">SN 51.9</a>) and such “development of mind” (<i lang="pi">cittabhāvanā</i>) is a term for <i lang="pi">samādhi</i> and the path to it. Accordingly, <i lang="pi">citta</i> falls between the energy and wisdom factors, in the place normally occupied by <i lang="pi">samādhi</i> and mindfulness, and is said to be developed in the normal way of <i lang="pi">samādhi</i> (see <a class="ref" href="/sn51.11">SN 51.11</a>). And <i lang="pi">samādhi</i> itself, like energy, is constantly emphasized as essential to this practice at every point.`}
              </p>
              <p>
                ${_`However, <i lang="pi">citta</i> is also the thought or intention that gets you to your destination (<a class="ref" href="/sn51.15">SN 51.15</a>). In line with this, one gains <i lang="pi">samādhi</i> by relying on <i lang="pi">citta</i> (<a class="ref" href="/sn51.13">SN 51.13</a>), which suggests that <i lang="pi">citta</i> cannot be exactly identical with <i lang="pi">samādhi</i>.`}
              </p>
              <p>
                ${_`Perhaps the term <i lang="pi">citta</i> was used here precisely because of its breadth of meaning. It encompasses the “thought” of the Dhamma, of practice, or of the goal; the “idea” one has in mind that leads one on; the “resolve” that keeps attention focused; the growing “awareness” as the goal comes into view; and the purified “consciousness” of deep meditation. In this way <i lang="pi">citta</i> here covers the same ground as it does as one of the four <i lang="pi">satipaṭṭhānas</i>: it refers to the mind state with which one develops the path, including, but not limited to, states of <i lang="pi">samādhi</i>.`}
              </p>
              <p>
                ${_`The four bases are almost always presented in a stock formula that consists of a long compound, the meaning of which is explained at <a class="ref" href="/sn51.13">SN 51.13</a>. Each of the four qualities may be relied on to develop deep unification of mind, or <i lang="pi">samādhi</i>. This process involves making an active effort, defined in terms of the four right efforts. Thus each of the <i lang="pi">iddhipādas</i> consists of these three aspects:`}
              </p>
              <ol>
                <li>${_`One of the four qualities.`}</li>
                <li>${_`The meditative immersion that results.`}</li>
                <li>${_`The effort required.`}</li>
              </ol>
              <p>
                ${_`At <a class="ref" href="/sn51.20">SN 51.20</a> we find the most detailed explanation of how these are applied in practice. This sutta brings in a number of practices familiar from elsewhere in the suttas, such as the contemplation of the 31 parts of the body. While most of these are straightforward, there is a somewhat obscure Pali idiom that begs a little clarification. That is the phrase “as before, so after; as after, so before” (<i lang="pi">yathā pure tathā pacchā, yathā pacchā tathā pure</i>), called the “perception of continuity” (<i lang="pi">pacchāpuresaññā</i>). Similar phrases are found in several places in the context of meditation (<a class="ref" href="/thag6.4">Thag 6.4</a>, <a class="ref" href="/sn47.10">SN 47.10</a>, <a class="ref" href="/an7.61">AN 7.61</a>, <a class="ref" href="/an3.90">AN 3.90</a>). In the Vinaya, the same phrase is used to emphasize that the status of a mendicant remains unchanged. In meditation, it points to the need for constant and consistent effort in maintaining one’s focus. As part of a series of related idioms—as above, so below; as by day, so by night; as this is, so is that—it indicates how the process of meditation moves from diversity and differentiation towards unity and oneness.`}
              </p>
              <p>
                ${_`When first encountering the bases for psychic power, students are often puzzled by an apparent paradox. Desire, so we’re told, is the cause of suffering, yet here we are supposed to develop it. This problem is addressed directly in <a class="ref" href="/sn51.15">SN 51.15</a>, where Ānanda explains to the brahmin Uṇṇābha that the spiritual path is lived to give up desire, which is accomplished by developing the four bases of psychic power. But Uṇṇābha protests, for desire is itself one of the four bases, and desire cannot be given up by means of desire. Ānanda resolves the contradiction with the simile of a man walking to a park. Before setting out, one has the desire, the energy, the idea, or the curiosity to reach the park. But when you get there, those things vanish. In the same way, the desire or enthusiasm to reach the goal of spiritual practice carries you to the goal, but once there it is no longer needed.`}
              </p>
              <h2 id="item7">${_`A Brief Textual History`}</h2>
              <p>
                ${_`The Saṁyutta Nikāya was edited by M. Léon Feer on the basis of manuscripts in Sinhalese and Burmese scripts, and published in Latin script by the Pali Text Society from 1884 to 1898. The first translation followed in 1917–30 by Mrs C.A.F. Rhys Davids (vols. 1–2) and F.L. Woodward (vols. 3–5) under the title <cite class="book">The Book of the Kindred Sayings</cite>. In 1999 the PTS issued a new edition of the Pali text of vol. 1 Sagāthāvagga, edited by G.A. Somaratne.`}
              </p>
              <p>
                ${_`While several partial translations were subsequently made, there was no complete new translation in English until 2002, when Bhikkhu Bodhi published his <cite class="book">The Connected Discourses of the Buddha</cite>. As with his translation of the <cite class="book">The Middle-Length Discourses of the Buddha</cite>, this constituted a major leap forward, essentially rendering the earlier translations obsolete. Unlike the <cite class="book">Middle-Length Discourses</cite>, this was an entirely new translation. In an extensive introduction, Bhikkhu Bodhi spelled out his evolving approach to translation and presented a detailed thematic and structural analysis of the text.`}
              </p>
              <p>
                ${_`Where the Pali was unclear I frequently referred to the earlier work of Bodhi, and rarely to Woodward/Rhys Davids and various translations of specific texts.`}
              </p>
            </article>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_sn-guide-sujato-page';
  }
}

customElements.define('sc-sn-guide', SCSNGuide);
