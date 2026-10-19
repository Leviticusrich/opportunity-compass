export const steps = [
 {id:'direction',name:'Your direction',eyebrow:'01 / YOUR GOALS',headline:'What does your next chapter look like?',sub:'No perfect answers. We use your answers to find options that make sense for your life.',questions:[
  {id:'goal',label:'What are you looking for right now?',type:'single',options:[['both','Explore both jobs and businesses'],['job','A job or new career'],['business','A side hustle or business']]},
  {id:'income',label:'What extra monthly income would make a real difference?',type:'single',options:[['500','Up to $500'],['2000','$500–$2,000'],['5000','$2,000–$5,000'],['more','$5,000+'],['unsure','Not sure yet']]},
  {id:'urgency',label:'How soon do you need reliable income?',type:'single',options:[['now','As soon as possible'],['quarter','Within 1–3 months'],['later','I can take 3+ months to build'],['explore','Just exploring for now']]}
 ]},
 {id:'experience',name:'Your experience',eyebrow:'02 / WHAT YOU BRING',headline:'You already have more to work with than you think.',sub:'A regular job, a hobby, or an independent project can all reveal valuable skills.',questions:[
  {id:'experience',label:'Which best describes your experience?',type:'single',options:[['none','I’m new to paid work'],['employee','I’ve had jobs, but no side hustle'],['side','I’ve tried freelance work or a side hustle'],['business','I’ve run a business or served clients']]},
  {id:'roles',label:'What jobs, projects or responsibilities have you done?',type:'text',placeholder:'E.g. retail stocking, customer service, video editing, helping family with technology…'},
  {id:'skills',label:'Which tasks do you feel confident doing? (Select any)',type:'multi',options:[['organize','Organizing & operations'],['create','Design or video editing'],['write','Writing & research'],['sell','Talking to people & sales'],['tech','Tech, coding & tools'],['hands','Hands-on or practical tasks'],['teach','Teaching & supporting others'],['none','Still figuring that out']]}
 ]},
 {id:'reality',name:'Your resources',eyebrow:'03 / REAL LIFE',headline:'The right opportunity should fit your actual life.',sub:'We’ll prioritize options that respect your time, tools, and financial constraints.',questions:[
  {id:'hours',label:'How many hours could you realistically dedicate each week?',type:'single',options:[['tiny','1–4 hours'],['some','5–10 hours'],['medium','11–20 hours'],['many','20+ hours']]},
  {id:'schedule',label:'How predictable is that time?',type:'single',options:[['unpredictable','Scattered or unpredictable'],['somewhat','Somewhat consistent'],['fixed','Regular scheduled blocks']]},
  {id:'budget',label:'What could you comfortably invest after essential expenses?',type:'single',options:[['zero','$0'],['low','Under $100/month'],['mid','$100–$499'],['high','$500+']]},
  {id:'equipment',label:'What equipment do you have access to?',type:'single',options:[['computer','Computer + reliable internet'],['phone','Mostly a smartphone'],['limited','Limited or unreliable internet']]}
 ]},
 {id:'workstyle',name:'Your work style',eyebrow:'04 / HOW YOU WORK',headline:'Build around your strengths, not a stereotype.',sub:'You can be great at a job without wanting to show your face or stay on calls all day.',questions:[
  {id:'setting',label:'Where would you prefer to work?',type:'single',options:[['remote','Remote'],['local','In person'],['either','Either works']]},
  {id:'social',label:'What kind of interaction feels sustainable?',type:'single',options:[['solo','Mostly independent / asynchronous'],['some','Some conversations and collaboration'],['outgoing','I enjoy sales and direct interaction']]},
  {id:'visibility',label:'How do you feel about being on camera or building a public brand?',type:'single',options:[['hidden','I’d rather stay behind the scenes'],['possible','I could try if it helps'],['visible','I’m happy to be visible']]}
 ]},
 {id:'preferences',name:'Your preferences',eyebrow:'05 / FINAL DETAILS',headline:'One last thing. What matters most to you?',sub:'This helps separate exciting possibilities from realistic first steps.',questions:[
  {id:'priority',label:'Which tradeoff matters most?',type:'single',options:[['stable','Consistent, dependable pay'],['flex','Flexibility and independence'],['growth','Long-term growth potential'],['learning','Learning useful skills']]},
  {id:'avoid',label:'Is there anything you want to avoid?',type:'text',placeholder:'E.g. cold calling, physical labor, unpredictable pay, fixed shifts…',optional:true},
  {id:'interests',label:'Anything you particularly enjoy or want to explore?',type:'text',placeholder:'E.g. gaming, fitness, business systems, real estate…',optional:true}
 ]}
];

const opportunities=[
 {id:'operations',title:'Remote operations assistant',kind:'job',summary:'Support scheduling, tracking, documentation, and routine business workflows.',tags:['organize','teach'],requirements:['computer'],interaction:'some',time:'some',stability:'strong',launch:'Create a sample task tracker and compare actual job postings.',tradeoff:'Some roles require fixed shifts or live responses.',cost:'Low startup costs; verify equipment requirements.',payer:'Employers or business clients pay for operational support.'},
 {id:'customer',title:'Customer support specialist',kind:'job',summary:'Help customers solve common problems through chat, email, or phone.',tags:['teach','write','sell'],requirements:['computer'],interaction:'some',time:'medium',stability:'strong',launch:'Review verified employers and draft a truthful resume emphasizing customer experience.',tradeoff:'Shifts can be fixed, and some roles involve heavy call volumes.',cost:'Usually little startup spend for employment; verify job legitimacy.',payer:'An employer pays wages for customer assistance.'},
 {id:'inventory',title:'Inventory or fulfillment associate',kind:'job',summary:'Organize, stock, pick, pack, or coordinate inventory in a local operation.',tags:['hands','organize'],requirements:[],interaction:'solo',time:'medium',stability:'strong',launch:'Check local employer requirements and compare shifts and commute.',tradeoff:'In-person shifts and physical requirements vary.',cost:'Usually low startup cost; transport may matter.',payer:'An employer pays wages for inventory and fulfillment work.'},
 {id:'sales',title:'Base-pay sales support',kind:'job',summary:'Support outreach, follow-up, and qualifying leads with structured training.',tags:['sell','teach'],requirements:['computer'],interaction:'outgoing',time:'medium',stability:'strong',launch:'Compare verified base-pay roles and rehearse a short discovery conversation.',tradeoff:'Targets and frequent interaction can be demanding.',cost:'Usually low startup cost; verify base-pay terms.',payer:'Employers pay wages, sometimes plus commission.'},
 {id:'video',title:'Short-form video editing service',kind:'business',summary:'Turn longer content into clips for gaming creators, podcasts, or small brands.',tags:['create','tech'],requirements:['computer'],interaction:'solo',time:'tiny',stability:'variable',launch:'Create two original portfolio clips and request feedback from potential buyers.',tradeoff:'You’ll still need to find clients and manage revisions.',cost:'Can start with existing tools; software may have fees.',payer:'Creators and companies pay for edited deliverables.'},
 {id:'funnel',title:'Landing page & funnel service',kind:'business',summary:'Build focused landing pages and simple lead-capture workflows for a specific niche.',tags:['create','organize','tech','write'],requirements:['computer'],interaction:'some',time:'some',stability:'variable',launch:'Build one clearly labeled sample landing page and seek buyer feedback.',tradeoff:'Requires learning conversion fundamentals and client acquisition.',cost:'Can prototype cheaply; hosting and software costs vary.',payer:'Small businesses and creators pay for completed pages and setup.'},
 {id:'admin',title:'Freelance admin support',kind:'business',summary:'Offer spreadsheet cleanup, inbox organization, and repeatable back-office tasks.',tags:['organize','write','tech'],requirements:['computer'],interaction:'solo',time:'tiny',stability:'variable',launch:'Create a sample before-and-after workflow using fictional data.',tradeoff:'Finding the first buyer and establishing trust take work.',cost:'Often possible with free tools to validate demand.',payer:'Business owners pay for a defined task or monthly support.'},
 {id:'automation',title:'Small-business automation service',kind:'business',summary:'Set up practical integrations that reduce repetitive tasks for businesses.',tags:['tech','organize'],requirements:['computer'],interaction:'some',time:'some',stability:'variable',launch:'Build one reliable demo with synthetic data and show it to a likely buyer.',tradeoff:'Technical reliability, access permissions, and ongoing support matter.',cost:'Can begin with free tiers; usage and maintenance may cost money.',payer:'Businesses pay for a measurable workflow improvement.'},
 {id:'tutoring',title:'Tutoring or skills coaching',kind:'business',summary:'Teach a subject or practical skill you can demonstrate confidently.',tags:['teach','write'],requirements:[],interaction:'outgoing',time:'some',stability:'variable',launch:'Offer one low-risk pilot lesson and collect honest feedback.',tradeoff:'Requires demonstrable expertise and scheduling with clients.',cost:'Low initial spend if you already know the subject.',payer:'Students or their families pay for instruction.'},
 {id:'local',title:'Local practical service',kind:'business',summary:'Test a tightly defined organizing, yard, pet, or household-help service.',tags:['hands','organize'],requirements:[],interaction:'some',time:'tiny',stability:'variable',launch:'Ask potential customers about one concrete task before buying equipment.',tradeoff:'Transportation, safety, insurance, and local rules may apply.',cost:'Varies greatly by service; validate before investing.',payer:'Local customers pay per task or service.'},
 {id:'affiliate',title:'Original affiliate content',kind:'business',summary:'Explain useful products or services with honest, disclosed recommendations.',tags:['write','create','teach'],requirements:['computer'],interaction:'solo',time:'some',stability:'slow',launch:'Publish one original comparison and test how people will discover it.',tradeoff:'Requires audience distribution; commissions may be delayed or nonexistent.',cost:'Low-cost start possible; growth is uncertain.',payer:'Affiliate programs may pay commissions for qualified referrals.'},
 {id:'youtube',title:'Faceless educational channel',kind:'business',summary:'Produce useful original video content around a focused subject.',tags:['create','write'],requirements:['computer'],interaction:'solo',time:'some',stability:'slow',launch:'Create a single pilot and measure time to produce it and viewer feedback.',tradeoff:'Building an audience and monetizing can take many months or longer.',cost:'Tools may be free or paid; significant time investment.',payer:'Potential future ad, sponsorship, or product revenue; not guaranteed.'}
];

export function rank(profile){
 const urgent=profile.urgency==='now';const noComputer=profile.equipment!=='computer';const limited=profile.hours==='tiny';const budget=profile.budget==='zero';const avoid=(profile.avoid||'').toLowerCase();const text=((profile.roles||'')+' '+(profile.interests||'')).toLowerCase();
 return opportunities.map(o=>{
 let score=0,why=[]; const matches=o.tags.filter(t=>(profile.skills||[]).includes(t));score+=matches.length*3;if(matches.length)why.push('Builds on your selected '+matches.slice(0,2).map(x=>({organize:'organizational',create:'creative',write:'research/writing',sell:'people',tech:'technical',hands:'practical',teach:'teaching'}[x])).join(' and ')+' strengths');
 if(profile.goal==='job'&&o.kind==='job'||profile.goal==='business'&&o.kind==='business')score+=5;
 if(urgent){score+=o.stability==='strong'?8:o.stability==='slow'?-9:-3;}else if(profile.urgency==='later'&&o.kind==='business')score+=2;
 if(profile.priority==='stable')score+=o.stability==='strong'?6:o.stability==='slow'?-5:0;
 if(profile.priority==='flex')score+=o.kind==='business'?4:-1;
 if(profile.priority==='growth'&&o.kind==='business')score+=3;
 if(noComputer&&o.requirements.includes('computer'))score-=14;
 if(limited){score+=o.time==='tiny'?4:o.time==='medium'?-5:0;if(o.kind==='job')score-=4;}
 if(profile.schedule==='unpredictable')score+=o.kind==='business'?3:o.time==='medium'?-3:0;
 if(profile.social==='solo')score+=o.interaction==='solo'?4:o.interaction==='outgoing'?-7:-1;
 if(profile.social==='outgoing')score+=o.interaction==='outgoing'?4:0;
 if(profile.setting==='remote'&&['inventory','local'].includes(o.id))score-=9;
 if(profile.setting==='local'&&['inventory','local'].includes(o.id))score+=5;
 if(profile.visibility==='hidden'&&o.id==='youtube')score+=2;
 if(budget&&['automation','funnel'].includes(o.id))score-=2;
 if((avoid.includes('call')||avoid.includes('sales'))&&['sales','tutoring'].includes(o.id))score-=7;
 if(text.includes('video')||text.includes('premier')||text.includes('gaming'))score+=o.id==='video'?6:0;
 if(text.includes('retail')||text.includes('stock'))score+=o.id==='inventory'?7:0;
 if(text.includes('spreadsheet'))score+=['admin','operations'].includes(o.id)?5:0;
 if(text.includes('code')||text.includes('software'))score+=o.id==='automation'?6:0;
 if(!matches.length&&o.kind==='business')score-=2;
 if(!why.length)why.push(o.kind==='job'?'Offers a concrete employment route worth checking against your experience':'Can be tested with a small, defined experiment');
 if(limited&&o.time==='tiny')why.push('Can be tested in short work sessions');
 if(urgent&&o.stability==='strong')why.push('More aligned with your need for dependable income');
 if(profile.social==='solo'&&o.interaction==='solo')why.push('Can involve mostly independent work');
 return {...o,score,why,fit:score<0?'Fit with preparation':'Potential fit now'};
 }).sort((a,b)=>b.score-a.score);
}
export function makePlan(o,profile){const hours=profile.hours==='tiny'?'20–40 minutes':'45–90 minutes';return [
 {day:'01',title:'Define the target',body:`Describe exactly who would pay for ${o.title.toLowerCase()} and the problem it solves.`},
 {day:'02',title:'Check reality',body:'Review 3 legitimate examples, job requirements, or buyer needs. Verify costs and eligibility.'},
 {day:'03',title:'Build one small proof',body:o.launch},
 {day:'04',title:'Improve the sample',body:'Make one practical revision; don’t buy tools before validating interest.'},
 {day:'05',title:'Get outside feedback',body:'Ask two appropriate employers, customers, or experienced people what would make the sample useful.'},
 {day:'06',title:'Make the next move',body:o.kind==='job'?'Identify 2 suitable roles and tailor a truthful application.':'Define one low-risk pilot offer and a way to reach a real potential customer.'},
 {day:'07',title:'Decide using evidence',body:'Review actual feedback, time spent and likely costs. Continue, adjust, or try the next option.'}
].map(d=>({...d,duration:hours}));}
export function brief(profile,choice){const p=rank(profile).slice(0,5);return `Opportunity Compass profile:\n${JSON.stringify(profile)}\nTop candidates:\n${p.map(o=>`${o.title} (${o.kind}): ${o.summary}. Tradeoff: ${o.tradeoff}.`).join('\n')}\nCurrent choice: ${choice?.title||'None'}.`;}
export function fallbackAnswer(message,chosen,profile){
 const q=message.toLowerCase();
 const title=chosen?.title||'this path';
 const budget=profile.budget==='zero'?'Since your discretionary budget is $0, start with free resources and avoid buying training until the opportunity is validated.':'Start with a small test before committing money.';
 const base= q.includes('money')||q.includes('earn')||q.includes('income')
 ? `For ${title}, identify who pays before estimating income. ${chosen.payer} Compare actual job listings or interview potential buyers; revenue and dependable take-home income are different. ${chosen.tradeoff}`
 :q.includes('skill')||q.includes('learn')
 ? `To prepare for ${title}, work backward from one deliverable a real employer or client would value. Build a truthful sample, request feedback, and address only the skill gaps the sample reveals. ${chosen.launch}`
 :q.includes('time')||q.includes('schedule')||q.includes('hour')
 ? `To fit ${title} into your current schedule, break the first experiment into two or three focused sessions. Start with: ${chosen.launch} Assess whether that workload is repeatable before accepting long-term commitments.`
 :q.includes('client')||q.includes('customer')||q.includes('apply')||q.includes('job')
 ? `A practical next step for ${title}: ${chosen.launch} For a job, verify genuine vacancies and tailor an honest application. For a service, find a prospective buyer and ask about the problem before pitching a paid solution.`
 :q.includes('coaching')||q.includes('mentor')||q.includes('help')
 ? 'Productivity Accelerator offers optional group coaching at www.challenge.productivityaccelerator.org and more intensive 1-on-1 coaching at www.productivityaccelerator.org/our-process. The 1-on-1 option is $1,000/month following an offered free first month; confirm conditions before enrolling. It provides more personalized attention, but faster results cannot be guaranteed.'
 :`For ${title}, I would test this before treating it as a reliable income path: ${chosen.launch} The main tradeoff is ${chosen.tradeoff.toLowerCase()} Compare it with the other recommended options if that tradeoff is unacceptable.`;
 return base+' '+budget+' Your 7-day roadmap gives you a measurable way to decide whether to continue. Optional group or 1-on-1 coaching links are shown below if accountability would help.';
}
