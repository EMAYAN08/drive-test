export type Level = "critical" | "essential" | "caution" | "note";

export type Cat =
  | "day"
  | "watch"
  | "moves"
  | "rules"
  | "signals"
  | "gdl"
  | "halifax";

export type Visual =
  | "hill"
  | "parallel"
  | "roundabout"
  | "lines"
  | "lights"
  | "hands"
  | "bus"
  | "distances"
  | "seconds"
  | "merge";

export type Card = {
  id: string;
  title: string;
  level: Level;
  cat: Cat;
  lede: string;
  bullets?: string[];
  visual?: Visual;
  source: "handbook" | "booking" | "local";
};

export const cats: { id: Cat | "all" | "saved"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "saved", label: "Saved" },
  { id: "day", label: "Test day" },
  { id: "watch", label: "Examiner" },
  { id: "moves", label: "Moves" },
  { id: "rules", label: "Rules" },
  { id: "signals", label: "Signals" },
  { id: "gdl", label: "Licence" },
  { id: "halifax", label: "Halifax" },
];

export const levelLabel: Record<Level, string> = {
  critical: "Critical",
  essential: "Essential",
  caution: "Caution",
  note: "Reference",
};

export const cards: Card[] = [
  {
    id: "what",
    title: "The Class 5 road test",
    level: "essential",
    cat: "day",
    lede: "Cars, pickups, SUVs and vans at or under 14,000 kg. You bring the vehicle. The booking page lists the test at 30 minutes and $52.54 with HST.",
    bullets: [
      "Book online at novascotia.ca, or call 902-424-5851 / 1-800-898-7668 with your receipt number.",
      "Bad weather or road conditions can cancel the test. Have a backup plan.",
      "A vehicle safety check happens before you drive, even if the inspection sticker is valid.",
    ],
    source: "booking",
  },
  {
    id: "bring",
    title: "What must be in your hand",
    level: "critical",
    cat: "day",
    lede: "The examiner starts by taking documents, not by asking you to drive. Missing one ends the appointment.",
    bullets: [
      "Your valid learner’s licence.",
      "Approved Driver Education certificate, if you have one.",
      "Vehicle permit (registration).",
      "Proof the safety inspection is valid, plus the sticker on the vehicle.",
      "A valid insurance card for that vehicle.",
    ],
    source: "handbook",
  },
  {
    id: "pretrip",
    title: "The controls they ask you to show",
    level: "critical",
    cat: "day",
    lede: "Before the route, show that these work — and that you can do hand signals. Practise the sequence out loud once.",
    bullets: [
      "Signal lights, both sides.",
      "Horn.",
      "Brake lights (have someone look, or use a window).",
      "Headlights.",
      "Parking brake.",
      "Windshield wipers.",
      "Hand signals for left, right, and stop.",
    ],
    visual: "hands",
    source: "handbook",
  },
  {
    id: "score",
    title: "What the examiner is writing down",
    level: "essential",
    cat: "watch",
    lede: "The handbook lists nine things. If a habit is not on this list, it is not the test.",
    bullets: [
      "Control while starting, stopping, turning and parking.",
      "Observation: shoulder checks, how often you use mirrors, where your eyes go.",
      "How you answer traffic, markings, signs and hazards.",
      "The space you keep around the car.",
      "Lane changes that are actually safe.",
      "How close you follow, and how you stop behind others.",
      "Communication: signals, brake lights, eye contact with drivers and people walking.",
      "Right-of-way decisions.",
      "Your speed.",
    ],
    source: "handbook",
  },
  {
    id: "quiet",
    title: "Don’t narrate the drive",
    level: "note",
    cat: "watch",
    lede: "Don’t talk to the examiner unless you need to. They are giving instructions, watching, and scoring. Save questions for the report at the end.",
    source: "handbook",
  },
  {
    id: "fail-stop",
    title: "A stop is a full stop",
    level: "critical",
    cat: "watch",
    lede: "Stop signs and red lights mean the vehicle stops. Coasting through — a “rolling stop” — is one of the faults Halifax instructors say ends tests.",
    bullets: [
      "Stop at the stop line, or at the nearest crosswalk line.",
      "No line and no painted crosswalk: stop no more than 1.5 metres back so a person can cross. That gap is the unmarked crosswalk.",
      "Wheels still, then look. Then go when it is clear.",
    ],
    source: "handbook",
  },
  {
    id: "fail-school",
    title: "School zones are 30 when kids are out",
    level: "critical",
    cat: "watch",
    lede: "If the normal limit is 50, and a child is outdoors on the road or within 30 metres of it, the limit is 30 — any hour, any day, including weekends.",
    bullets: [
      "A playground after school still counts. So does Saturday.",
      "If the normal limit is above 50, the school-area limit is 50, not 30.",
      "The sign is a fluorescent yellow-green pentagon with two children.",
      "Speeding here is treated as an automatic fail by local examiners. The handbook calls it an offence.",
    ],
    source: "handbook",
  },
  {
    id: "fail-shoulder",
    title: "Mirrors are not a shoulder check",
    level: "critical",
    cat: "watch",
    lede: "A shoulder check is a real turn of your head and upper body, toward the direction you are moving, to see the blind spot mirrors miss.",
    bullets: [
      "Do it before leaving the curb, changing lanes, turning and merging.",
      "The examiner is watching your head move. A glance at the mirror does not count.",
      "Safety scan = ahead, both sides, mirrors behind you, then the shoulder check.",
    ],
    source: "handbook",
  },
  {
    id: "fail-people",
    title: "People on foot go first",
    level: "critical",
    cat: "watch",
    lede: "Every intersection has a crosswalk, marked or not. Yield to anyone in it. Don’t pass a vehicle that has stopped for someone crossing.",
    bullets: [
      "On a green, people already crossing still finish — even if your light changes.",
      "Right turn: wait if a person or cyclist is in your path. Stay close to the right edge so nobody squeezes between you and the curb.",
      "A crossing guard’s stop paddle is the law. Ignoring one can put demerit points on your record.",
      "Leaving a driveway or lot: stop before the sidewalk and yield to people and traffic.",
    ],
    source: "handbook",
  },
  {
    id: "fail-speed",
    title: "Posted means posted",
    level: "critical",
    cat: "watch",
    lede: "Never faster than the sign. Also don’t crawl well under the limit when the road, weather and traffic are fine — the handbook says that can be a problem.",
    bullets: [
      "Unless a sign says otherwise: 50 in urban areas, 80 on highways.",
      "50 also applies in public parks (unless posted), within 30 metres of a railway crossing, and while passing a place of worship as people go in or out.",
      "Speed still has to fit rain, traffic and how far you can see. The sign is a ceiling, not a target.",
    ],
    source: "handbook",
  },
  {
    id: "lane-turn",
    title: "Finish in the lane you started",
    level: "essential",
    cat: "watch",
    lede: "Get into the correct lane before the intersection. Don’t change lanes inside it. Two turn lanes: stay in yours the whole way, and enter the matching lane on the new road.",
    bullets: [
      "Left turn: yield to oncoming traffic and to people in the crosswalk.",
      "While you wait, keep the wheels straight. If you are hit from behind with the wheels already turned, you get pushed into oncoming traffic.",
      "Slow before the turn. Don’t brake, clutch or shift once you are in the intersection.",
    ],
    source: "handbook",
  },
  {
    id: "parallel",
    title: "Parallel park, the handbook way",
    level: "essential",
    cat: "moves",
    lede: "Signal, slow, and if you must, stop early so the cars behind give you room. Curbside wheels end within 30 centimetres of the curb.",
    bullets: [
      "Pull up about one metre out, rear bumpers even with the car ahead of the space.",
      "Safety scan. Back slowly, wheel sharp right, until you are near a 40° angle — middle of the rear window lined up with the gap between the curb and the car behind.",
      "Wheels straight. Back until your front bumper clears the parked car.",
      "Wheel sharp the other way. Ease in beside the curb.",
      "Straighten, centre the car in the space.",
      "Park brake on, gear in Park, engine off. Check traffic before you open the door.",
    ],
    visual: "parallel",
    source: "handbook",
  },
  {
    id: "hill",
    title: "Which way the wheels point",
    level: "essential",
    cat: "moves",
    lede: "Park so if the car rolls, it rolls into the curb or off the road — never into traffic. Then the parking brake, then Park.",
    bullets: [
      "Downhill, curb or no curb: wheels right.",
      "Uphill with a curb: wheels left, so the back of the front tire catches the curb.",
      "Uphill with no curb: wheels right, toward the edge.",
      "Manual: reverse if you face downhill, first gear if you face uphill.",
      "Still within 30 centimetres of the curb or edge.",
    ],
    visual: "hill",
    source: "handbook",
  },
  {
    id: "angle",
    title: "Angle parking",
    level: "note",
    cat: "moves",
    lede: "Used in lots and on wide streets. Signal and slow first.",
    bullets: [
      "Stay parallel, at least 1.5 metres out from the parked cars.",
      "When your front is even with the rear of the space, turn in slowly.",
      "Straighten and stop lined up with the other cars, or when the front wheels just touch the curb.",
      "Leaving: safety scan, shoulder checks, back out straight until the front clears the cars beside you. Watch the front corner.",
    ],
    source: "handbook",
  },
  {
    id: "backing",
    title: "Backing up",
    level: "essential",
    cat: "moves",
    lede: "Look. A backup camera does not replace a safety scan in every direction.",
    bullets: [
      "You may unbuckle to turn your body and see. Buckle again before you move forward.",
      "Start slow. In the first few feet, check that the front of the car will not swing into anything.",
      "Shoulder checks while you reverse.",
    ],
    source: "handbook",
  },
  {
    id: "curb",
    title: "Leaving the curb",
    level: "essential",
    cat: "moves",
    lede: "This is often the first move of the test, and it is scored.",
    bullets: [
      "Signal.",
      "Mirrors, then a shoulder check into the lane you are entering.",
      "Yield. Move only when the gap is yours.",
      "Steer smoothly off the curb and cancel the signal.",
    ],
    source: "handbook",
  },
  {
    id: "lane",
    title: "Changing lanes",
    level: "essential",
    cat: "moves",
    lede: "Signal your plan. Look behind and to both sides. The blind-spot check is a look over your shoulder, not a mirror flick.",
    bullets: [
      "On a road with two or more lanes your way, drive in the right lane unless you are passing, turning left, avoiding something, or a sign says otherwise.",
      "The left lane is for passing. Sitting in it makes people pass you on the right, which is less safe.",
      "Signalling does not give you the right of way. The gap has to be clear.",
    ],
    source: "handbook",
  },
  {
    id: "round",
    title: "Roundabouts",
    level: "essential",
    cat: "moves",
    lede: "In Nova Scotia, traffic already in the circle goes first. You yield on the way in. People crossing still go before you.",
    bullets: [
      "Slow early. They are built for about 30–50 km/h.",
      "Pick the lane the signs and arrows tell you, before you enter.",
      "Enter when there is a gap. Travel counter-clockwise.",
      "Signal as you leave, and exit to the right.",
      "Don’t stop inside the circle unless you have to.",
    ],
    visual: "roundabout",
    source: "handbook",
  },
  {
    id: "merge",
    title: "Getting onto a 100-series highway",
    level: "essential",
    cat: "moves",
    lede: "You yield to traffic already on the highway until a safe gap lets you in. Use the whole ramp to match their speed. Creeping up at 60 beside 100 km/h traffic is the mistake.",
    bullets: [
      "Read the signs before the interchange. One group is slowing to exit while another is speeding up to enter.",
      "Shoulder check, signal, and merge without swerving.",
      "Leaving: use the deceleration lane. Most ramps have their own speed. Don’t brake on the through lane.",
    ],
    visual: "merge",
    source: "handbook",
  },
  {
    id: "twosec",
    title: "The 2-second rule",
    level: "essential",
    cat: "rules",
    lede: "Pick a fixed object the car ahead passes. You should not reach it before you have counted “one-thousand-one, one-thousand-two.”",
    bullets: [
      "Add space in rain, fog, ice, or behind a motorcycle — they can stop shorter than you.",
      "Leave a gap big enough that a car passing you can fit back in.",
      "Following too close is a leading cause of collisions. It is also obvious from the passenger seat.",
    ],
    visual: "seconds",
    source: "handbook",
  },
  {
    id: "stopdist",
    title: "How far a stop actually takes",
    level: "essential",
    cat: "rules",
    lede: "Even in great conditions. These are the handbook’s reaction-plus-braking totals.",
    bullets: [
      "50 km/h — 63 metres (35 reacting, 28 braking).",
      "80 km/h — 140 metres (56 + 84).",
      "100 km/h — 205 metres (69 + 136).",
      "At 80 you already need more than 140 metres. That is why the gap has to grow with speed.",
    ],
    visual: "distances",
    source: "handbook",
  },
  {
    id: "multistop",
    title: "All-way stops",
    level: "essential",
    cat: "rules",
    lede: "First to stop is first to go, after a complete stop. Two vehicles at the same time: the one on the left yields to the one on the right.",
    bullets: [
      "Still yield if taking your turn would cause a crash. Right-of-way is not a dare.",
      "A vehicle already in the intersection goes before one that has not entered.",
      "Two facing cars can both go straight, or both turn right. If one is turning left across the other, the left turn waits.",
      "Dark traffic lights: treat the intersection as an all-way stop.",
    ],
    source: "handbook",
  },
  {
    id: "parkwhere",
    title: "Where you must not stop",
    level: "essential",
    cat: "rules",
    lede: "Signs don’t list every ban. The handbook does. “Stopped” counts even if you are still in the car.",
    bullets: [
      "On the crest of a hill or in a curve if you block someone’s view.",
      "Blocking a driveway, sidewalk, crosswalk or another parked car.",
      "Within 5 metres of a crosswalk, fire hydrant, or fire-station driveway.",
      "Within 7.5 metres of an intersection.",
      "Within 10 metres of a flashing light, stop sign, yield sign, or traffic signal.",
      "Within 15 metres of the nearest rail at a railway crossing.",
      "Double-parked, beside road work if you’d block traffic, or in an accessible space without a permit.",
      "If you leave the car: parking brake on, engine off, wheels within 30 cm of the curb.",
    ],
    source: "handbook",
  },
  {
    id: "lines",
    title: "Yellow divides. White separates.",
    level: "essential",
    cat: "rules",
    lede: "Yellow is between traffic going opposite ways. White is between lanes going the same way.",
    bullets: [
      "Broken yellow centre line: careful passing is allowed both ways.",
      "On a two-lane road, pass only when the broken yellow is on your side.",
      "Two solid yellow lines: do not cross them to pass, either direction.",
      "Don’t hug the centre line. Stay inside one lane.",
    ],
    visual: "lines",
    source: "handbook",
  },
  {
    id: "bus",
    title: "School bus lights",
    level: "critical",
    cat: "rules",
    lede: "Amber means the bus is about to stop — you may pass, but be ready. Red means stop, from in front and from behind.",
    bullets: [
      "Red lights come with a stop arm. Do not pass.",
      "The exception is the other side of a divided highway.",
      "Buses are busiest about 7–9 a.m. and 2–4 p.m. Kids run.",
      "This is not the transit-bus rule. A city bus with its signal on, on a road posted 60 or less, gets the right-of-way back into traffic when it is safe.",
    ],
    visual: "bus",
    source: "handbook",
  },
  {
    id: "emergency",
    title: "Lights and sirens",
    level: "critical",
    cat: "rules",
    lede: "Ambulance, police, fire, Vehicle Transportation and Inspection, and public-safety vehicles (sheriffs, bridge patrol) have the right-of-way with lights and/or a siren.",
    bullets: [
      "From ahead or behind: move to the right edge or curb and stop. Stay stopped until they pass or an officer waves you on.",
      "Does not apply if they are on the other side of a divided highway.",
      "Never follow a fire vehicle within 150 metres.",
      "Never drive or park within 150 metres of an emergency vehicle stopped at a collision or to help.",
      "Never drive over a fire hose unless police or a firefighter tells you to.",
    ],
    source: "handbook",
  },
  {
    id: "moveover",
    title: "A stopped emergency vehicle",
    level: "essential",
    cat: "rules",
    lede: "Lights flashing on the shoulder: slow to 60, or to the posted limit if it is already under 60. Pass only if it is safe.",
    bullets: [
      "Two or more lanes on your side: also move a lane farther away, if you can do it safely.",
      "Skip both the slow-down and the lane change if they are on the far side of a divided highway’s median.",
      "Recovery trucks and service trucks with red or amber lights, stopped at a fire, collision, or to help a vehicle, are in this group.",
    ],
    source: "handbook",
  },
  {
    id: "rail",
    title: "Railway crossings",
    level: "critical",
    cat: "rules",
    lede: "The X-shaped crossbuck is the crossing. A yellow warning sign comes before it. Trains cannot stop in the distance you can.",
    bullets: [
      "Slow to 50 within 30 metres if that is the rule for the approach, look both ways, and listen.",
      "Flashing red lights: stop, the same as a flashing red signal. Go only when it is safe.",
      "Don’t start across unless the traffic ahead will clear you off the tracks.",
      "If lights start while you are on the tracks, keep going. Don’t stop and don’t reverse.",
      "After one train, look for a second. Some crossings have a sign for the number of tracks.",
      "Stuck: everyone out and away from the tracks first.",
    ],
    source: "handbook",
  },
  {
    id: "belts",
    title: "Belts, and zero alcohol",
    level: "essential",
    cat: "rules",
    lede: "Wear a seat belt and make sure passengers do too. On a learner’s licence, and later on 5N and 5R, alcohol and drugs in your body must be zero.",
    bullets: [
      "The only belt exception in the handbook’s parking chapter: you may undo it to turn and see while backing. Put it back on before you drive forward.",
      "Learner limit: a licensed supervisor in the front seat, and nobody else in the vehicle.",
    ],
    source: "handbook",
  },
  {
    id: "signals",
    title: "Red, amber, green",
    level: "essential",
    cat: "signals",
    lede: "Green means go when it is safe — after people in the crosswalk and vehicles already in the intersection. It is not a command to launch.",
    bullets: [
      "Amber: stop before the intersection if you can do it safely. If you are too close, go through carefully. Don’t accelerate to beat the red.",
      "Red: stop at the line or the near side of the crosswalk.",
      "Right on red: allowed after a full stop, if there is no sign forbidding it, and the turn is safe.",
      "Left on red: illegal, except from a one-way street onto another one-way street.",
      "Green arrow: go in the direction it points. Amber arrow: stop if you safely can.",
    ],
    visual: "lights",
    source: "handbook",
  },
  {
    id: "flash",
    title: "Flashing lights, including green",
    level: "essential",
    cat: "signals",
    lede: "Nova Scotia’s flashing green is the one people from other provinces get wrong.",
    bullets: [
      "Flashing red: same as a stop sign. Stop, then go when you won’t interfere.",
      "Flashing amber: same as a warning. Slow down and go carefully.",
      "Flashing green: you may turn left, go straight, or turn right.",
      "A red X over a lane: do not drive in that lane, no matter what other signs say. A green signal over a lane: you may, and you still obey every other sign.",
    ],
    source: "handbook",
  },
  {
    id: "class7",
    title: "Class 7, the learner stage",
    level: "critical",
    cat: "gdl",
    lede: "You can apply at 16. The licence lasts 2 years. Two limits, and both are strict.",
    bullets: [
      "A supervising driver with a valid licence sits in the front. No one else in the vehicle.",
      "Zero alcohol or drugs in your body.",
      "Break either rule and you can collect demerit points and a suspension.",
      "4 or more demerit points: you cannot drive for 6 months, which delays the road test.",
      "The written tests are 20 signs and 20 rules. You need 16 right on each, plus a vision test.",
    ],
    source: "handbook",
  },
  {
    id: "wait",
    title: "How long until you can book",
    level: "essential",
    cat: "gdl",
    lede: "12 months on a learner’s licence. 9 months if you passed the longer Approved Driver Education course for Class 5.",
    bullets: [
      "Renewing a learner’s licence that already expired: you don’t wait again. You can book.",
      "If the 2 years run out before you pass, you reapply as a learner, but you don’t restart the 9- or 12-month wait.",
      "Fail the road test: wait at least 2 weeks, pay again, book again.",
      "Pass: upgrade the card to newly licensed. If you don’t upgrade within 12 months, you repeat the road test.",
    ],
    source: "handbook",
  },
  {
    id: "class5n",
    title: "After you pass: Class 5N",
    level: "critical",
    cat: "gdl",
    lede: "You can drive alone, but not freely. You stay newly licensed at least 2 years, and you must finish an Approved Driver Education course.",
    bullets: [
      "Blood alcohol and drugs stay at zero.",
      "Handbook wording: only one person in the front seat, and only as many people in the back as there are seat belts.",
      "No driving midnight to 5 a.m. unless a fully licensed supervisor is in the front and there are no other passengers — or you carry a curfew-exemption letter and follow it, with no other people in the vehicle.",
      "Exemption reasons: work, school, or volunteering as a firefighter or with ground search and rescue. There is a fee. Keep the letter with you.",
      "6 demerit points: 6-month suspension. You then cannot move to the restricted stage for 2 years after the suspension ends.",
    ],
    source: "handbook",
  },
  {
    id: "class5r",
    title: "Then Class 5R, condition 47",
    level: "note",
    cat: "gdl",
    lede: "Two more years. Still zero alcohol and drugs. You cannot be the supervising driver for a newly licensed driver during the midnight–5 a.m. curfew.",
    bullets: [
      "Full Class 5 comes only after the restricted stage ends.",
      "You also need the 5N held for at least 2 years, the driver-education course on file with Access Nova Scotia, and the full 2 years as 5R.",
      "You cannot move up to a commercial class (1–4) while you are a learner or newly licensed.",
    ],
    source: "handbook",
  },
  {
    id: "where",
    title: "Where Halifax-area tests happen",
    level: "note",
    cat: "halifax",
    lede: "Book any Access Nova Scotia office that does driver exams, or a partner provider. Local schools send people to three sites. Confirm yours when you book — this is instructor practice, not a handbook list.",
    bullets: [
      "Halifax — Mount Hope. Residential streets, multi-lane commercial roads, busier intersections, and a possible look at Highway 111 or 102.",
      "Sackville. Quieter loops (Stokil, Pine Hill), Sackville Drive, Highway 101 access. Often the calmer first test.",
      "Dartmouth — Baker Drive. Portland Street, Woodlawn school zones, Highway 111 merges, Dartmouth Crossing, and rotaries.",
    ],
    source: "local",
  },
  {
    id: "hfx-school",
    title: "Practise the school zones on your route",
    level: "critical",
    cat: "halifax",
    lede: "Drive the neighbourhood at the hour of your test, not on a Sunday night. Sackville and Woodlawn both put school zones on typical routes. If children are outside, it is 30.",
    source: "local",
  },
  {
    id: "hfx-hwy",
    title: "The merge is part of the city test",
    level: "essential",
    cat: "halifax",
    lede: "Mount Hope can include 111 or 102. Dartmouth often includes 111. Sackville can include 101. Use the full ramp, match highway speed, and pick a gap without hesitating or swerving.",
    bullets: [
      "If highway speed still feels rushed, practise those exact ramps before test day. The examiner can feel a late merge.",
    ],
    source: "local",
  },
  {
    id: "rotary",
    title: "Dartmouth rotaries",
    level: "essential",
    cat: "halifax",
    lede: "Same rule as any Nova Scotia roundabout: yield to whoever is already circulating, signal your exit, don’t stop in the circle, choose the lane before you enter.",
    source: "handbook",
  },
];

export type SignItem = {
  id: string;
  name: string;
  kind: string;
  meaning: string;
  level: Level;
};

export const signs: SignItem[] = [
  { id: "stop", name: "Stop", kind: "Regulatory · octagon", meaning: "Full stop at the line or crosswalk. No paint: stop within 1.5 m so people can cross.", level: "critical" },
  { id: "yield", name: "Yield", kind: "Regulatory · triangle", meaning: "Slow as you arrive and give way to traffic in or near the intersection.", level: "critical" },
  { id: "school", name: "School zone", kind: "Regulatory · pentagon", meaning: "Fluorescent yellow-green. Kids present and the normal limit is 50: you drive 30, any day, any hour.", level: "critical" },
  { id: "speed", name: "Speed limit", kind: "Regulatory · rectangle", meaning: "A maximum, not a suggestion. Unposted: 50 urban, 80 highway.", level: "essential" },
  { id: "donotenter", name: "Do not enter", kind: "Regulatory · square", meaning: "Wrong way. The road ahead is for traffic coming toward you.", level: "critical" },
  { id: "noleft", name: "No left turn", kind: "Regulatory · square", meaning: "Red ring and slash. The turn is prohibited.", level: "essential" },
  { id: "nopass", name: "No passing", kind: "Regulatory · square", meaning: "Two cars in a red circle with a slash. Do not pass.", level: "essential" },
  { id: "nopark", name: "No parking", kind: "Regulatory · square", meaning: "P with a slash. Don’t leave the vehicle here. Stopping rules may still differ — read the sign.", level: "caution" },
  { id: "oneway", name: "One way", kind: "Regulatory · rectangle", meaning: "All traffic on this road travels the way the arrow points.", level: "essential" },
  { id: "crossbuck", name: "Railway crossbuck", kind: "Regulatory · X", meaning: "You are at the tracks. Stop if lights flash or a stop sign is posted. Look both ways.", level: "critical" },
  { id: "warnrail", name: "Railway ahead", kind: "Warning · diamond", meaning: "Tracks are coming. The symbol shows the angle. Slow, look, listen.", level: "essential" },
  { id: "curve", name: "Curve ahead", kind: "Warning · diamond", meaning: "Reduce speed before the bend. Momentum pushes you outward.", level: "caution" },
  { id: "merge", name: "Merge", kind: "Warning · diamond", meaning: "Two lanes become one. Both sides are responsible for a smooth join. Be ready to yield.", level: "essential" },
  { id: "slip", name: "Slippery when wet", kind: "Warning · diamond", meaning: "The surface loses grip in rain. Ease off and lengthen the gap.", level: "caution" },
  { id: "ped", name: "Pedestrian crossing", kind: "Warning · diamond", meaning: "People cross here. Be ready to stop. Marked or not, an intersection crosswalk is real.", level: "critical" },
  { id: "signal", name: "Signals ahead", kind: "Warning · diamond", meaning: "Lights are coming. Start covering the brake if the light is stale.", level: "note" },
  { id: "worker", name: "Road work", kind: "Temporary · orange", meaning: "Workers may be present. Slow down. Follow the flag person and the cones, not your usual lane.", level: "critical" },
  { id: "guide", name: "Guide sign", kind: "Guidance · green", meaning: "Directions, route numbers, distances. Blue is often services. They inform — they don’t give orders.", level: "note" },
];

export const checklist = [
  { id: "licence", label: "Learner’s licence in your wallet" },
  { id: "course", label: "Driver-education certificate, if you earned one" },
  { id: "permit", label: "Vehicle permit" },
  { id: "insure", label: "Insurance card for this vehicle" },
  { id: "inspect", label: "Inspection sticker valid, and the certificate" },
  { id: "lights", label: "Signals, brake lights, headlights tested" },
  { id: "horn", label: "Horn, wipers, parking brake tested" },
  { id: "hands", label: "Hand signals rehearsed" },
  { id: "glass", label: "Glass and mirrors clean, no dash warnings" },
  { id: "shoes", label: "Flat shoes you can feel the pedals in" },
  { id: "early", label: "Plan to arrive about 15 minutes early" },
  { id: "route", label: "School zones on your route driven this week" },
];
