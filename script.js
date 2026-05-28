document.addEventListener("DOMContentLoaded", () => {
    // PARTICLES
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        const size = Math.random() * 2 + 1;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        particlesContainer.appendChild(p);
    }

    // NAV SCROLL
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // MOBILE MENU
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            document.getElementById('navLinks')?.classList.toggle('active');
        });
    }

    // SCROLL REVEAL
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('animate');
        revealObserver.observe(el);
    });

    // QUIZ DATA
    const quizData = [
        {
            question: "In conflict, your first instinct is to...",
            options: [
                { text: "Point out what is wrong and how it should be corrected", type: 1 },
                { text: "Try to keep harmony and avoid escalation", type: 9 },
                { text: "Take control and push through the tension", type: 8 },
                { text: "Understand what caused it before reacting", type: 5 }
            ]
        },
        {
            question: "When someone is upset, you tend to...",
            options: [
                { text: "Focus on helping and supporting them", type: 2 },
                { text: "Stay emotionally aware of their reaction to you", type: 4 },
                { text: "Stay logical and not get pulled into emotion", type: 5 },
                { text: "Try to fix the situation quickly", type: 1 }
            ]
        },
        {
            question: "When you feel unsure about yourself, you...",
            options: [
                { text: "Push harder to achieve and prove yourself", type: 3 },
                { text: "Seek reassurance or guidance from others", type: 6 },
                { text: "Withdraw and analyze internally", type: 5 },
                { text: "Distract yourself and move on quickly", type: 7 }
            ]
        },
        {
            question: "In groups, you usually...",
            options: [
                { text: "Take charge if needed", type: 8 },
                { text: "Observe quietly before engaging", type: 5 },
                { text: "Adapt to fit the mood of the group", type: 9 },
                { text: "Try to stand out in some way", type: 3 }
            ]
        },
        {
            question: "Under stress, you tend to...",
            options: [
                { text: "Become controlling or direct", type: 8 },
                { text: "Withdraw and detach", type: 5 },
                { text: "Seek comfort or distraction", type: 7 },
                { text: "Overthink what others expect from you", type: 6 }
            ]
        },
        {
            question: "What drives you most?",
            options: [
                { text: "Being competent and successful", type: 3 },
                { text: "Being needed and valued", type: 2 },
                { text: "Being correct and morally aligned", type: 1 },
                { text: "Understanding how things work deeply", type: 5 }
            ]
        },
        {
            question: "You naturally focus on...",
            options: [
                { text: "Mistakes and improvements", type: 1 },
                { text: "People's emotional states", type: 2 },
                { text: "Efficiency and outcomes", type: 3 },
                { text: "Hidden meanings and patterns", type: 4 }
            ]
        },
        {
            question: "When making decisions, you rely most on...",
            options: [
                { text: "Logic and analysis", type: 5 },
                { text: "Gut feeling and possibility", type: 7 },
                { text: "Security and risk avoidance", type: 6 },
                { text: "Strength and certainty", type: 8 }
            ]
        },
        {
            question: "What feels most uncomfortable?",
            options: [
                { text: "Being useless or incompetent", type: 3 },
                { text: "Being abandoned or unsupported", type: 6 },
                { text: "Being controlled or restricted", type: 8 },
                { text: "Being emotionally ordinary or unseen", type: 4 }
            ]
        },
        {
            question: "Your natural energy is more...",
            options: [
                { text: "Calm and grounded", type: 9 },
                { text: "High-energy and exploratory", type: 7 },
                { text: "Focused and analytical", type: 5 },
                { text: "Driven and structured", type: 1 }
            ]
        },
        {
            question: "In relationships, you tend to...",
            options: [
                { text: "Support and take care of others", type: 2 },
                { text: "Stay independent and self-contained", type: 5 },
                { text: "Seek depth and emotional intensity", type: 4 },
                { text: "Maintain balance and avoid conflict", type: 9 }
            ]
        },
        {
            question: "When you want to improve yourself, you...",
            options: [
                { text: "Set strict goals and discipline yourself", type: 1 },
                { text: "Focus on achievement and recognition", type: 3 },
                { text: "Explore new ideas and experiences", type: 7 },
                { text: "Analyze yourself deeply", type: 5 }
            ]
        }

    ];

    const resultProfiles = {
        1: {
            title: "Type 1 — The Reformer",
            image: "images/enneagram/1.png",
            desc: "Driven by internal standards. You notice what is wrong before what is right. Order, correctness, and improvement are your default lens on reality.",
            wound: "You learned that being imperfect was not safe.",
            fear: "Being wrong, corrupt, or fundamentally flawed.",
            cost: "Constant pressure to be perfect creates tension and self-criticism.",
            growth: "Allowing imperfection without losing your sense of integrity.",
            childhood: "As a child, you experienced a strong emphasis on correct behavior and avoiding mistakes. This led you to associate acceptance with doing things properly. Over time, you internalized that being good and controlled was necessary to feel safe and valued.",
            traits: [
                { label: "Core Drive", text: "Integrity through control" },
                { label: "Strength", text: "Precision and responsibility" },
                { label: "Blind Spot", text: "Self-criticism and rigidity" }
            ]
        },
        2: {
            title: "Type 2 — The Helper",
            image: "images/enneagram/2.png",
            desc: "You read emotional needs quickly and adapt to them. Connection is your primary currency, even when unspoken.",
            wound: "Love felt conditional on how useful you were to others.",
            fear: "Being unwanted or unloved.",
            cost: "You give so much that you lose track of your own needs.",
            growth: "Letting yourself be valued without earning it.",
            childhood: "As a child, you noticed that attention and emotional connection often came when you were helpful or attentive to others’ needs. This led you to associate love with usefulness. Gradually, you learned that taking care of others was the way to maintain closeness and belonging.",
            traits: [
                { label: "Core Drive", text: "Being needed" },
                { label: "Strength", text: "Emotional awareness" },
                { label: "Blind Spot", text: "Self-neglect through others" }
            ]
        },
        3: {
            title: "Type 3 — The Achiever",
            image: "images/enneagram/3.png",
            desc: "Identity is built through output. You naturally orient toward success, recognition, and measurable value.",
            wound: "You were valued for performance rather than who you were.",
            fear: "Being worthless without achievement — that who you are is not enough on its own.",
            cost: "You can lose connection to your real self, shaping who you are based on what is rewarded rather than what is true.",
            growth: "Learning to exist without performing — and realizing your value isn’t conditional.",
            childhood: "As a child, you were exposed to environments where success, performance, or achievement received the most recognition. This led you to associate value with results and image. Over time, you learned to adapt by focusing on accomplishment as a way to gain approval and recognition.",
            traits: [
                { label: "Core Drive", text: "Worth through achievement" },
                { label: "Strength", text: "Efficiency and performance" },
                { label: "Blind Spot", text: "Disconnect from inner self" }
            ]
        },
        4: {
            title: "Type 4 — The Individualist",
            image: "images/enneagram/4.png",
            desc: "You experience depth differently. Meaning, identity, and emotional contrast shape how you interpret everything.",
            wound: "You felt something essential about you was missing.",
            fear: "Having no identity or significance.",
            cost: "Emotional intensity can trap you in comparison and longing.",
            growth: "Finding stability without losing depth.",
            childhood: "As a child, you experienced a sense of emotional difference or disconnection from your surroundings. This led you to feel that something essential about you was not fully seen or understood. Over time, you learned to turn inward in search of identity and emotional meaning.",
            traits: [
                { label: "Core Drive", text: "Authentic identity" },
                { label: "Strength", text: "Emotional depth and perception" },
                { label: "Blind Spot", text: "Intensity and comparison loops" }
            ]
        },
        5: {
            title: "Type 5 — The Investigator",
            image: "images/enneagram/5.png",
            desc: "You step back before you engage. Understanding comes before participation. Information creates safety.",
            wound: "The world felt intrusive, overwhelming, or draining.",
            fear: "Being invaded, overwhelmed, or incapable.",
            cost: "Detachment can turn into isolation and disconnection.",
            growth: "Engaging with life instead of only observing it.",
            childhood: "As a child, you experienced situations that felt emotionally or energetically overwhelming. This led you to associate safety with withdrawal and observation. Over time, you learned that retreating into your inner world was necessary to preserve your sense of stability and control.",
            traits: [
                { label: "Core Drive", text: "Competence through knowledge" },
                { label: "Strength", text: "Analysis and clarity" },
                { label: "Blind Spot", text: "Emotional distance" }
            ]
        },
        6: {
            title: "Type 6 — The Loyalist",
            image: "images/enneagram/6.png",
            desc: "You scan for stability and risk. Trust is not automatic — it is tested, verified, and maintained.",
            wound: "Safety and trust in the world felt uncertain.",
            fear: "Being unsafe, unsupported, or unprepared.",
            cost: "Constant doubt and scanning for risk creates anxiety loops.",
            growth: "Trusting yourself without needing certainty.",
            childhood: "As a child, you experienced environments that felt inconsistent or unpredictable. This led you to develop a heightened sense of vigilance toward potential threats or instability. Over time, you learned to rely on anticipation and caution as a way to create safety.",
            traits: [
                { label: "Core Drive", text: "Security and trust" },
                { label: "Strength", text: "Loyalty and foresight" },
                { label: "Blind Spot", text: "Anxiety and doubt loops" }
            ]
        },
        7: {
            title: "Type 7 — The Enthusiast",
            image: "images/enneagram/7.png",
            desc: "You move toward possibility. Experience, stimulation, and escape from limitation shape your direction.",
            wound: "Pain felt overwhelming or inescapable.",
            fear: "Being trapped in pain or limitation.",
            cost: "Avoiding discomfort keeps you from deeper fulfillment.",
            growth: "Staying present even when things aren’t perfect.",
            childhood: "As a child, you experienced discomfort or emotional tension that felt difficult to remain in. This led you to associate relief with shifting attention away from pain. Over time, you learned to seek stimulation and possibility as a way to avoid limitation or distress.",
            traits: [
                { label: "Core Drive", text: "Freedom and experience" },
                { label: "Strength", text: "Adaptability and optimism" },
                { label: "Blind Spot", text: "Avoidance of discomfort" }
            ]
        },
        8: {
            title: "Type 8 — The Challenger",
            image: "images/enneagram/8.png",
            desc: "You naturally push against resistance. Control, strength, and directness define your interaction with the world.",
            wound: "Vulnerability once led to being controlled or hurt.",
            fear: "Being controlled, weak, or vulnerable.",
            cost: "Your intensity can push people away before they get close.",
            growth: "Allowing vulnerability without losing strength.",
            childhood: "As a child, you experienced situations where vulnerability felt unsafe or was met with loss of control. This led you to associate strength with protection and resistance. Over time, you learned to rely on assertiveness and control as a way to ensure safety.",
            traits: [
                { label: "Core Drive", text: "Autonomy and control" },
                { label: "Strength", text: "Decisiveness and presence" },
                { label: "Blind Spot", text: "Intensity and defensiveness" }
            ]
        },
        9: {
            title: "Type 9 — The Peacemaker",
            image: "images/enneagram/9.png",
            desc: "You stabilize environments by reducing friction. Harmony often comes at the cost of your own voice.",
            wound: "Your presence felt like it could disturb harmony.",
            fear: "Conflict, disconnection, or loss of peace.",
            cost: "You disappear into others and lose your own voice.",
            growth: "Taking up space without fearing disruption.",
            childhood: "As a child, you experienced environments where conflict or tension felt disruptive to emotional stability. This led you to associate harmony with safety and acceptance. Over time, you learned to minimize your presence and avoid conflict in order to maintain peace.",
            traits: [
                { label: "Core Drive", text: "Inner and outer peace" },
                { label: "Strength", text: "Calm presence and adaptability" },
                { label: "Blind Spot", text: "Self-erasure and avoidance" }
            ]
        }
    };

    let currentQuestion = 0;
    let scores = {
        1: 0, // Reformer
        2: 0, // Helper
        3: 0, // Achiever
        4: 0, // Individualist
        5: 0, // Investigator
        6: 0, // Loyalist
        7: 0, // Enthusiast
        8: 0, // Challenger
        9: 0  // Peacemaker
    };

    function startQuiz() {
        document.getElementById('quizIntro').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';
        renderQuestion();
    }

    function renderQuestion() {
        const container = document.getElementById('questions');
        const q = quizData[currentQuestion];
        const progress = ((currentQuestion) / quizData.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        let opts = '';
        for (let i = 0; i < q.options.length; i++) {
            const t = q.options[i].type;
            const txt = q.options[i].text;
            opts += '<button class="quiz-option" data-type="' + t + '">' + txt + '</button>';
        }
        container.innerHTML = '<div class="quiz-question active"><span class="q-num">Question ' + (currentQuestion + 1) + ' of ' + quizData.length + '</span><h4>' + q.question + '</h4><div class="quiz-options">' + opts + '</div></div>';
    }

    function answerQuestion(type) {
        scores[type]++;
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('quizContainer').style.display = 'none';
        let maxScore = -1;
        let result = '';
        for (const [key, val] of Object.entries(scores)) {
            if (val > maxScore) { maxScore = val; result = key; }
        }
        const profile = resultProfiles[Number(result)];
        document.getElementById('resultTitle').textContent = profile.title;
        document.getElementById('resultImage').src = profile.image;
        document.getElementById('resultDesc').textContent = profile.desc;
        document.getElementById('resultWound').textContent = profile.wound;
        document.getElementById('resultFear').textContent = profile.fear;
        document.getElementById('resultCost').textContent = profile.cost;
        document.getElementById('resultGrowth').textContent = profile.growth;
        document.getElementById('resultChildhood').textContent = profile.childhood;
        let traitsHtml = '';
        for (let i = 0; i < profile.traits.length; i++) {
            traitsHtml += '<div class="trait-box"><h5>' + profile.traits[i].label + '</h5><p>' + profile.traits[i].text + '</p></div>';
        }
        document.getElementById('resultTraits').innerHTML = traitsHtml;
        document.getElementById('quizResult').classList.add('show');
    }

    function resetQuiz() {
        currentQuestion = 0;
        scores = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        };
        document.getElementById('quizResult').classList.remove('show');
        document.getElementById('quizIntro').style.display = 'block';
    }

    // MODAL
    const cards = document.querySelectorAll('.archive-card');
    const showMoreBtn = document.getElementById('showMoreBtn');

    let visibleCount = 3; // how many show at first

    function updateCards() {
        cards.forEach((card, index) => {
            if (index < visibleCount) {
                card.classList.add('visible');
            }
        });

        if (visibleCount >= cards.length) {
            showMoreBtn.style.display = 'none';
        }
    }

    // initial load
    updateCards();

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            visibleCount += 3;
            updateCards();
        });
    }
    
    const modalData = {
        apologize: {
            tag: "Pattern Analysis",
            title: "People Who Never Apologize",
            video: "",
            content: '<div class="modal-section"><h4>The Pattern</h4><p>The absence of accountability is often not simple refusal, but a protective response where responsibility is avoided to preserve self-image, emotional stability, or control within a relationship.</p></div><div class="modal-section"><h4>The Mechanism</h4><p>In some cases this reflects narcissistic self-protection, in others it stems from shame-based or emotionally avoidant coping strategies — where admitting fault feels unsafe, so responsibility is reframed, minimized, or redirected.</p></div><div class="modal-section"><h4>The Trap</h4><p>These interactions often lead to verbal loops where one person seeks recognition and the other continues to deflect. The more effort is spent proving the point, the further the conversation moves away from accountability and into circular justification.</p></div><div class="modal-section"><h4>The Resolution</h4><p>Progress doesn’t come from stronger arguments, but from stepping out of the loop. State your boundary clearly, avoid over-explaining, and stop repeating yourself. Clarity comes when you set boundaries and consequences instead of staying in a back-and-forth that allows avoidance to continue.</p></div>'
        },
        narcissist: {
            tag: "Pattern Analysis",
            title: "The Narcissist Playbook",
            content: '<div class="modal-section"><h4>The Framework</h4><p>Narcissists do not just seek attention — they construct entire realities where they are the protagonist and everyone else plays a supporting role. The playbook follows predictable stages: idealization, devaluation, discard.</p></div><div class="modal-section"><h4>The Tell</h4><p>Watch for the inability to acknowledge fault without deflection. "I am sorry you feel that way" is not an apology — it is a repositioning. The narcissists greatest fear is not being disliked; it is being irrelevant.</p></div><div class="modal-section"><h4>The Counter</h4><p>Do not argue the facts — they do not live in fact-based reality. Instead, observe without engaging. Your silence is their kryptonite because it denies them the reaction they need to feel real.</p></div>'
        },
        silence: {
            tag: "Signal Detection",
            title: "Why Silence Creates Power",
            content: '<div class="modal-section"><h4>The Vacuum Principle</h4><p>Silence creates a vacuum that most people rush to fill. In that rush, they reveal their anxieties, their need for validation, their inability to tolerate ambiguity. The silent person controls the frame.</p></div><div class="modal-section"><h4>Strategic Application</h4><p>Used after a statement, silence forces the other person to process without guidance. Used during conflict, it denies the opponent the emotional fuel they need to sustain their attack.</p></div><div class="modal-section"><h4>The Risk</h4><p>Silence without confidence reads as weakness. The power comes from the certainty behind it — the unspoken message that you do not need to fill the space because you already know what you need to know.</p></div>'
        },
        pressure: {
            tag: "Behavioral Analysis",
            title: "People Reveal Themselves Under Pressure",
            content: '<div class="modal-section"><h4>The Stress Response</h4><p>When resources are scarce and stakes are high, the social mask slips. The person who was generous in abundance becomes calculating in scarcity. The calm colleague becomes controlling when deadlines tighten.</p></div><div class="modal-section"><h4>What to Watch</h4><p>Notice who becomes more collaborative versus who becomes more territorial. Notice who seeks information versus who hoards it. Pressure does not create these traits — it accelerates their emergence.</p></div><div class="modal-section"><h4>The Application</h4><p>Create small pressure tests in low-stakes environments. A delayed response to a message. A minor change in plans. The reactions will tell you more than months of smooth interaction.</p></div>'
        },
        confidence: {
            tag: "Illusion Deconstruction",
            title: "The Illusion of Confidence",
            content: '<div class="modal-section"><h4>The Projection</h4><p>Confidence and competence are not the same frequency. The loudest voice often carries the most insecurity — volume compensates for substance. True confidence is quiet because it does not need to convince anyone.</p></div><div class="modal-section"><h4>The Quiet Ones</h4><p>Watch the person who speaks last, not first. The one who asks one precise question that changes the entire direction of the conversation. Their confidence is demonstrated through impact, not noise.</p></div><div class="modal-section"><h4>How to Read It</h4><p>Ask: Is this person performing confidence, or are they comfortable with uncertainty? The performer needs validation. The comfortable person does not need you to believe them — they already know.</p></div>'
        },
        guilt: {
            tag: "Emotional Weaponization",
            title: "Weaponized Guilt",
            content: '<div class="modal-section"><h4>The Mechanism</h4><p>Guilt is manufactured by reframing your boundaries as betrayals. "After everything I have done for you" is not gratitude — it is an invoice. The goal is to make you feel indebted for things you never agreed to owe.</p></div><div class="modal-section"><h4>The Pattern</h4><p>It escalates in stages: subtle hints, direct accusations, emotional withdrawal, and finally, the narrative that you are the problem. Each stage tests how much guilt you will absorb before pushing back.</p></div><div class="modal-section"><h4>The Defense</h4><p>Separate intention from obligation. Someone can have good intentions and still be manipulative. Your boundaries are not a verdict on their character — they are a statement about your needs.</p></div>'
        },
        boundaries: {
            tag: "Defense Dynamics",
            title: "The Cost of Boundaries",
            content: '<div class="modal-section"><h4>The Reaction</h4><p>When you set a boundary, the people who benefit from your lack of boundaries will resist. Aggression, guilt, withdrawal — these are not signs your boundary is wrong. They are confirmation it was necessary.</p></div><div class="modal-section"><h4>The Test</h4><p>Healthy people adjust. They may not like the boundary, but they respect it. Unhealthy people escalate. They push harder, test the edges, and try to find a crack. The escalation is the diagnostic tool.</p></div><div class="modal-section"><h4>The Payoff</h4><p>Boundaries do not just protect you — they filter your environment. The people who remain after you have set them are the ones who were genuinely there for you, not for what you could provide.</p></div>'
        }
    };

    function openModal(id) {
        const data = modalData[id];
        if (!data) return;

        document.getElementById('modalTag').textContent = data.tag;
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalContent').innerHTML = data.content;
        const videoContainer = document.getElementById('modalVideo');

        if (data.video) {
            videoContainer.innerHTML = `
                <div class="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/${data.video}"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            `;
        } else {
            videoContainer.innerHTML = `<p>No video available</p>`;
        }


        document.getElementById('modalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    // EVENT LISTENERS (replacing inline onclick handlers)

    // Quiz start button
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);

    // Quiz options - event delegation for dynamically created buttons
    document.getElementById('questions').addEventListener('click', function(e) {
        const btn = e.target.closest('.quiz-option');
        if (btn) {
            const type = btn.getAttribute('data-type');
            answerQuestion(type);
        }
    });

    // Retake quiz button
    document.getElementById('retakeQuizBtn').addEventListener('click', resetQuiz);

    // Archive cards - open modal
    document.querySelectorAll('.archive-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = this.getAttribute('data-modal');
            console.log("Opening:", id);
            openModal(id);
        });
    });

    // Modal close button
    document.getElementById('modalClose').addEventListener('click', closeModal);

    // Modal overlay click (close when clicking outside modal)
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // Prevent clicks inside modal from closing it
    document.getElementById('modalBox').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Join form
    document.getElementById('joinForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pattern logged. Welcome to the circle.');
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
