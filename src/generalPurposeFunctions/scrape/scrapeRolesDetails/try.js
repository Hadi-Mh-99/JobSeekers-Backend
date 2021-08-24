let arr = [
    {
        role: 'Web-Developer',
        li: [
          'Understanding the company requirements or team requesting the website',
          'Writing front and back end code to set up the parameters of the website',
          'Working with designers on the website appearance',
          'Creating a method to collect user feedback',
          'Analyzing user feedback to fix errors and improve user experience (UX)',
          'Implementing testing tools to continuously monitor the website',
          'Keeping all software current and updated',
          'Ensuring websites and related applications are secure '
        ]
      },
      {
        role: 'Web-Designer',
        li: [
          'Client meetings: Most web designers begin each job by meeting with clients to assess their needs. They identify what kind of information clients need to convey online and how they want the site to appear.',
          'Website coding: After assessing client needs, web designers code websites using computer programming languages. They use these languages to create individual web pages and the overall appearance of the website.',
          'Team collaboration: Many web designers work on larger teams with graphic designers, media creators and computer programmers. They typically collaborate with team members to create more specialized elements, such as animations or e-commerce portals.',
          'Creative integration: After collaborating with their teams, web designers integrate all required elements into a cohesive website. Once they have finished testing the site, the finished product is delivered to the client.'
        ]
      },
      {
        role: 'Warehouse-Worker',
        li: [
          'Picking merchandise from the distribution center and transporting it to the shipping by for loading',
          'Receiving goods for return or delivery and verifying its contents against the purchase order to ensure it is accurate and free from damage',
          'Identifying lost, damaged or missing merchandise and notifying the supervisor',
          'Training new employees on the company’s and department’s processes and procedures for rapid onboarding',
          'Packing orders in an orderly manner so they are prepared for shipping',
          'Counting and stocking merchandise based on the inventory control log'
        ]
      },
      {
        role: 'Veterinary-Technician',
        li: [
          'Obtaining and testing blood, urine and stool samples',
          'Preparing animals for surgery, including administering anesthesia',
          'Assisting the veterinarian during surgery',
          'Administering vaccinations and medications under the direction of the veterinarian',
          'Interviewing pet owners to discover and record patient case histories',
          'Monitoring and reporting on patient behavior and condition'
        ]
      },
      {
        role: 'Veterinary-Assistant',
        li: [
          'Aiding veterinarians and veterinary technicians as they treat and care for animals',
          'Greeting patients and owners as they enter the facility, checking them in and guiding them to the examination areas',
          'Collecting required paperwork from pet owners',
          'Assisting pet owners with insurance paperwork or in obtaining records from prior facilities',
          'Helping take pets’ vital signs and weight',
          'Sanitizing equipment and tools and preparing examination and operating rooms for procedures',
          'Feeding, bathing and exercising pets staying overnight',
          'Cleaning and sterilizing kennels and cages',
          'Maintaining pet food inventory and keeping track of animals’ feeds',
          'Helping obtain medication and explaining how to dose pets'
        ]
      },
      {
        role: 'Veterinarian',
        li: [
          'Examining and treating animals, testing and vaccinating for diseases and prescribing medication',
          'Operating medical equipment such as x-ray machines',
          'Cultivating positive relationships with customers and their animals through regular communication and detailed record-keeping',
          'Euthanize animals if they cannot be treated',
          'Educating clients on the importance of regular vaccinations and treatments for preventative care',
          'Training veterinary assistants and other staff members'
        ]
      },
      {
        role: 'Vascular-Surgeon',
        li: [
          'Meeting with patients to discuss their conditions and assess them for any illnesses',
          'Performing surgeries to provide relief to patients or lower their risk levels of certain diseases',
          'Create post-operational treatment plans for patients to follow to maximize the positive benefits of the procedure',
          'Prescribing medication to reduce the patient’s exposure to a recurrence of prior issues or the development of new medical concerns'
        ]
      },
      { role: 'UX-Designer', 
        li: [
            'A UX designer addresses the digital experience needs of end-users, such as developing usage scenarios, identifying flaws in existing designs and proposing improvements to digital products. They may also develop prototypes of design solutions and ensure cross-platform and cross-browser functionality of their products.',
            'To identify weaknesses in digital products, a UX designer will conduct usability tests on each URL of a website or mobile app.',
            'To gain a full understanding of competitor offerings and customer needs, a UX designer will research the target market, develop research-based insights on user experience, aid in the creation of a content development strategy and align their design solutions to brand standards.',
            'A UX designer collaborates with others to develop and finalize design improvements for their product. Potential collaborations include coordinating with development and design teams to create product page designs with intuitive page routing and navigation features.'
        ]
    },
      { role: 'Urologist', li: [
        'Meeting with patients and getting their medical histories',
        'Placing catheters',
        'Diagnosing conditions using methods such as blood work, urine testing, ultrasound and X-ray',
        'Interpreting test results',
        'Performing surgeries to treat kidney stones, cancerous tumors, genital abnormalities or urinary tract obstructions',
        'Prescribing medications to treat infections',
        'Working closely with nursing staff and patients’ main doctors',
        'Communicating conditions and treatment plans with patients and answering their questions'
      ] },
      {
        role: 'Urban-Planner',
        li: [
          'Assess community needs: Professional planners generally start each project by speaking with public officials, members of the community and local developers to assess needs and options for land use.',
          'Research local trends: Urban planners use a variety of resources, including census data, community studies, environmental reports and market research to assess the viability of proposed projects.',
          'Develop and recommend plans: After conducting initial research, urban planners prepare designs to develop neighborhoods, public transportation networks, sustainable initiatives and similar projects. They may also review and recommend plans submitted by developers and other vendors.',
          'Introduce plans to stakeholders: Once they have begun to develop projects, urban planners meet with community groups, local politicians and other key figures. They present their plans, promote anticipated benefits, discuss potential drawbacks and solicit feedback.',
          'Understand legal regulations: Urban planners must follow building codes, zoning restrictions and environmental regulations. Because these restrictions change over time and vary from area to area, they must research regulations everywhere they work.',
          'Collaborate with colleagues: Because they usually work with large teams, urban planners spend much of their time collaborating with their colleagues. They meet with developers, public officials, community leaders and architects regularly.'
        ]
      },
      {
        role: 'Underwriter',
        li: [
          'Examining applications for loans, mortgages, insurance or initial public offerings (IPOs)',
          'Calculating the risk based on information provided through the application process',
          'Conducting research to evaluate an application',
          'Using computer software to help make an approval decision',
          'Approving or declining each application based on the risk'
        ]
      },
      {
        role: 'Ultrasound-Technician',
        li: [
          'Ensure that the equipment and clinic room is clean and ready to receive patients',
          'Use the ultrasound equipment to record images of the appropriate organ',
          'Write a report for each patient and outline any abnormalities as appropriate',
          'Ensure that this report is delivered to the appropriate physician',
          'Assist in various procedures, including ultrasound-guided biopsies and vascular work-ups',
          'Abide by the ethical and confidentiality regulations of the institution and state'
        ]
      },
      {
        role: 'Treasurer',
        li: [
          'Overseeing the organization’s in-house financial department, including supervising the day-to-day operations of financial staff',
          'Preparing financial forecasts based on an analysis of past and projected financial activity reports',
          'Preparing final financial documents used to make recommendations regarding finances to executives and board of directors',
          'Discovering strategies to reduce organizational costs and improve efficiency',
          'Preparing tax returns and compiling regulatory filings'
        ]
      },
      {
        role: 'Travel-Agent',
        li: [
          'Research travel options for customers: Travel agents typically begin by talking with customers about their travel needs, desires and preferences. Then they use vendor databases to research hotels, flights, trains, cruises, tours and excursion tickets for their customers.',
          'Discuss arrangements and costs with customers: Once they have found travel options that meet the specified requirements, they calculate costs and discuss arrangements with customers. Travel agents often use sales skills to help customers make decisions about their travel plans.',
          'Advise clients about itineraries and plans: After booking travel arrangements for clients, travel agents provide their customers with itineraries that include the details of their accommodations, transportation and excursions. They may also help clients plan for travel essentials like passports, visas and other documents.',
          'Modify reservations based on client needs: Because unexpected weather and personal emergencies can cause travel delays, cancelations or alterations, travel agents often modify reservations as necessary. They may have to handle last-minute changes and cancellations at a moment’s notice.',
          'Visit popular destinations: Since travel agents often advise clients about destinations and excursions, they frequently travel to experience these elements firsthand. Travel agents may visit specific destinations, take newly offered tours or travel on certain cruise ships or airplanes as they research.'
        ]
      },
      {
        role: 'Training-Coordinator',
        li: [
          'Designing and creating teaching materials to be used in employee training',
          'Planning schedules for HR training',
          'Promoting training opportunities to employees within the company',
          'Assessing and reporting the effectiveness of training programs to management',
          'Managing the budget allotted for employee training',
          'Maintaining an online library of training resources'
        ]
      },
      {
        role: 'Toxicologist',
        li: [
          'Collecting samples for testing and evaluation',
          'Studying the short- and long-term effects related to toxins and radiation',
          'Writing reports and presenting them to related parties',
          'Identifying and analyzing harmful chemicals',
          'Performing research on the effects of chemicals, including how to treat symptoms'
        ]
      },
      {
        role: 'Telemarketer',
        li: [
          'Answer clients’ queries about products or services',
          'Communicate questions, concerns or issues to supervisory staff',
          'Maintain records of customer accounts',
          'Contact potential and current customers to promote products or services',
          'Schedule appointments with prospective clients',
          'Train other telemarketers when necessary'
        ]
      },
      {
        role: 'Technical-Writer',
        li: [
          'Determining the best form of documentation for the project',
          'Conducting research to gather information',
          'Collaborating with technical professionals to understand products and procedures',
          'Editing the work of other technical writers'
        ]
      },
      {
        role: 'Technical-Support-Specialist',
        li: [
          'Walking customers through the process of installing software on their computers and launching those programs for the first time',
          'Helping troubleshoot software problems and provide actionable tips to resolve the issue',
          'Sending technical documentation to customers and end-users',
          'Making recommendations to employees or customers for hardware changes when a computer cannot support a particular software',
          'Referring difficult cases to support technicians or a senior analyst',
          'Taking over control of a customer’s computer remotely to resolve issues'
        ]
      },
      {
        role: 'Teaching-Assistant',
        li: [
          'Taking attendance each day to report to the teacher',
          'Buying or gathering supplies necessary for lessons',
          'Supervising students at lunch or outside',
          'Reviewing class lessons in small groups of students',
          'Meeting with the teacher to discuss upcoming assignments',
          'Helping with meal times in classrooms with small children or students with disabilities'
        ]
      },
      {
        role: 'Teacher-Assistant',
        li: [
          'Helping develop lesson plans based on state standards',
          'Working with a lead teacher to monitor student development',
          'Promoting the learning and development of students of various ages and abilities',
          'Communicating with parents about their child’s development and any changes or concerns'
        ]
      },
      {
        role: 'Teacher',
        li: [
          'Researching, planning, creating and delivering classroom lessons via writing, lecture, discussion or video',
          'Creating, assigning, collecting and grading assessments, such as quizzes, tests, essays and other projects',
          'Communicating with students, parents, counselors and administrators about each student’s progress and needs',
          'Providing support to students during all stages of the learning process, including explaining coursework, assisting with school assignments and providing emotional support',
          'Advising, monitoring or directing extracurricular activities, such as school clubs, honor societies, athletics or after-school programs'
        ]
      },
      {
        role: 'Tax-Preparer',
        li: [
          'Performing administrative duties, such as answering phone calls and setting up appointments',
          'Gathering and organizing personal and confidential paperwork on clients’ income, expenses, allowances and more',
          'Understanding adjustments, credits and deductions, as well as federal and state tax laws',
          'Doing math equations and double-checking calculations and data entries to make sure they are correct',
          'Working with financial and accounting software',
          'Providing clients with future tax planning advice and recommendations',
          'Processing billing for time spent doing clients’ tax returns'
        ]
      },
      {
        role: 'Systems-Engineer',
        li: [
          'Studying and monitoring existing systems to ensure structural integrity and assess required upgrades',
          'Researching available software, hardware and equipment necessary to optimize output',
          'Installing new software, operating systems and equipment',
          'Designing and implementing security systems',
          'Ensuring safety procedures are in place',
          'Providing technical assistance and backup to others involved in the process',
          'Monitoring all software, hardware, equipment and systems continuously and setting up protocols for feedback',
          'Working with professionals in other fields, such as marketing and management, to troubleshoot and find optimal solutions'
        ]
      },
      {
        role: 'Systems-Analyst',
        li: [
          'Maintaining and troubleshooting our data warehouse',
          'Researching and evaluating emerging technologies, including both hardware and software',
          'Discussing users’ needs, identifying vulnerabilities or areas of poor performance to boost productivity, efficiency and accuracy',
          'Preparing cost benefits and analysis reports for upgrades',
          'Communicating the strategic decisions with other IT department employees',
          'Training the end-users and writing instruction manuals for employee or customer use'
        ]
      },
      {
        role: 'System-Administrator',
        li: [
          'Providing technical support for software and hardware issues that users encounter',
          'Managing the configuration and operation of computer operating systems',
          'Monitoring the system daily and responding immediately in the event of security or usability concerns',
          'Upgrading systems and processes as necessary for enhanced functionality and security issue resolution',
          'Installing and testing computer-related equipment and reviewing application logs',
          'Responding to and resolving help desk requests and creating and verifying backups of data'
        ]
      },
      {
        role: 'Surveyor',
        li: [
          'Measuring distances between reference points to determine locations of boundaries and other important features of land, water and air spaces',
          'Recording the results of surveying, comparing them with previous records and verifying accuracy of data',
          'Presenting survey results to government agencies and other clients',
          'Advising cartographers, architects and construction managers in the building of maps and new construction projects',
          'Writing descriptions of surveyed lands for property deeds, leases and other legal documents'
        ]
      },
      {
        role: 'Surgical-Technician',
        li: [
          'Prepare the surgical room with all necessary equipment and tools',
          'Sterilize and clean all medical equipment before use',
          'Test medical equipment and replace as needed',
          'Prepare patients for surgery by disinfecting the surgical site',
          'Monitor surgical procedures and assist the surgeon as needed',
          'Hand instruments to the surgeon during procedures'
        ]
      },
      {
        role: 'Surgical-Assistant',
        li: [
          'Conducting pre-surgery interviews to determine important information about the patient’s health history and identifying any areas of concern that will require additional consideration',
          'Speaking with patients before surgery to explain what will be happening during the surgical procedure',
          'Preparing an operating room for surgery, ensuring that all necessary tools are readily accessible and the room is clean and sanitized',
          'Monitoring electronic displays during surgery for changes in the patient’s vitals and relaying information to the surgeon or nurses when necessary',
          'Binding, dressing and applying pressure when needed to control bleeding during surgery',
          'Performing follow-up visits with patients who have received surgery to check for any warning signs that need further assessment'
        ]
      },
      {
        role: 'Surgeon',
        li: [
          'Diagnosing injuries and illnesses ',
          'Counseling patients on the best treatment options ',
          'Coordinate with other medical professionals like nurses and anesthesiologists to ensure safe and successful operations ',
          'Use surgical tools to fix or remove parts of the body ',
          'Adhere to standards of safety and cleanliness in the operating room ',
          'Work under the supervision of hospital administration to follow facility guidelines',
          'Maintain detailed patient records digitally and on paper ',
          'Develop post-operation treatment plans to promote overall patient health ',
          'Prescribe medications for aftercare and preventive measures'
        ]
      },
      {
        role: 'Structural-Engineer',
        li: [
          'Preparing building designs and calculating the load and stress that a building can withstand',
          'Using computer-aided software to calculate a building’s reaction to weather',
          'Obtaining the regulatory permits for construction of a building',
          'Preparing cost estimates of structures and selecting materials for a building',
          'Supervising building construction and advising project managers',
          'Liaising with other professionals like architects, engineers and builders to deliver a project',
          'Managing projects and administering contracts'
        ]
      },
      {
        role: 'Store-Clerk',
        li: [
          'Operating cash registers and product scanning devices to facilitate customer purchases',
          'Collecting payments from customers',
          'Greeting customers upon entry to the store and asking if they need guidance',
          'Unpacking inventory shipments and restocking store shelves',
          'Directing customers to items they ask about the location of and offering complementary products when appropriate'
        ]
      },
      {
        role: 'Store-Associate',
        li: [
          'Stocking shelves and removing dated products',
          'Assisting with stock-taking and inventory records',
          'Assisting with janitorial duties',
          'Creating window and shop displays and keeping the store floor presentable',
          'Handling customer complaints and involving management when necessary to resolve issues',
          'Keeping the storeroom tidy and organized',
          'Motivating clients to purchase additional or complementary products',
          'Explaining warranties and return policies to clients',
          'Building client relationships by offering incentives, discounts and loyalty program memberships'
        ]
      },
      {
        role: 'Stocker',
        li: [
          'Stocking store shelves with product shipments',
          'Assembling and removing manufacturer marketing displays on the sales floor',
          'Ensuring each stocking order has the correct products in the correct quantities',
          'Maintaining the store’s product warehouse area',
          'Processing shipment orders using the company’s inventory management software',
          'Contacting vendors to resolve issues of missing or damaged product deliveries'
        ]
      },
      {
        role: 'Stockbroker',
        li: [
          'Manage client portfolios, deciding about when to buy or trade financial securities',
          'Work closely with clients to understand their financial goals and risks',
          'Consult clients on the buying and selling price of different stocks',
          'Stay updated on the latest regulations regarding stocks, taxes and financial news',
          'Use market knowledge to maximize client returns'
        ]
      },
      {
        role: 'Statistician',
        li: [
          'Utilizing statistical modeling to identify trends and solve problems',
          'Collecting data from outside sources and compiling it into a single data set for analysis',
          'Creating and administering tests and polls to create new data sets for analysis',
          'Suggesting changes to a company’s course of action to respond to indicators identified in data analysis',
          'Explaining complicated statistical concepts and findings to company employees in ways that they can be understood without advanced math skills',
          'Differentiating between relevant and superfluous data when compiling data sets to avoid inaccurate results based on incorrect or unimportant factors'
        ]
      },
      {
        role: 'State-Trooper',
        li: [
          'Respond to and clean up after traffic accidents',
          'Educate the public on laws and safety concerns',
          'Prepare court reports',
          'Testify in court',
          'Serve as backup for county and local police officers',
          'Enforce laws that promote public safety',
          'Conduct investigations of accidents',
          'Issue citations to those breaking motor vehicle laws',
          'Enforce laws on heavy motor vehicles, including semi-trucks and large-capacity vehicles driving on highways and interstates'
        ]
      },
      {
        role: 'Staff-Accountant',
        li: [
          'Maintain records: Staff accountants are primarily responsible for creating accounting entries for the organization’s journals and registers. In many cases, you will create general ledger entries and reconcile accounts, too.',
          'Prepare financial statements: At the end of each month, staff accountants typically settle accounts and reconcile balance sheets. In this position, you may also gather data from the general ledger to produce financial statements.',
          'Support accounts payable and receivable: In many cases, staff accountants assist accounts payable and receivable colleagues. This responsibility might involve providing transaction details or creating invoices.',
          'Analyze internal procedures: Staff accountants are responsible for following internal processes, but they may also recommend improvements to reduce costs or labor. In this role, you might review existing workflows, test new methods and analyze the results before making a recommendation.',
          'Assist with audits: If the company undergoes reorganization, staff accountants often provide accounting support. In this position, you might review financial details, translate data to fit new ledger formats or generate information for reports.'
        ]
      },
      {
        role: 'Speech-Therapist',
        li: [
          'Diagnose and treat patients in a clinical setting',
          'Work with teachers to treat children at school ',
          'Collaborate with other therapists, counselors, social workers and others in order to care for patients',
          'Teach parents and families how to practice therapy strategies at home',
          'Teach sign language to non-verbal patients ',
          'Train and supervise other personnel '
        ]
      },
      {
        role: 'Speech-Pathologist',
        li: [
          'Evaluating and diagnosing patients’ language disorders',
          'Administrative duties such as recording-keeping and billing',
          'Creating a treatment plan for each individual',
          'Teaching patients how to make sounds, form words and speak correctly',
          'Teaching muscle-building exercises to help patients speak and swallow better',
          'Advising patients’ families on how to handle communication disorders',
          'Performing routine follow-up exams and monitoring patients’ progress',
          'Collaborating with other professionals, such as doctors, therapists, psychologists, teachers and counselors ',
          'Hosting group programs and classroom activities for individuals or students with similar conditions'
        ]
      },
      {
        role: 'Special-Education-Teacher',
        li: [
          'Help develop and keep updated each student’s Individualized Education Program (IEP). Every special education student in the United States public school system has an IEP developed by their parents, a case manager, the administrator of their school, and their special education teacher. This IEP helps determine the best accommodations and placements that can be made for each special education student.',
          'Work with students individually and conduct class as a whole.',
          'Adapt general lesson plans to fit the abilities and needs of students.',
          'Assess and discuss student progress with parents, counselors and school administrators.'
        ]
      },
      {
        role: 'Sous-Chef',
        li: [
          'Writing and redesigning menus ',
          'Properly pricing items on the menu',
          'Creating new menu items',
          'Hiring aspiring chefs and training staff ',
          'Scheduling staff shifts ',
          'Ensuring kitchen staff members follow rules and regulations',
          'Tracking, organizing and ordering inventory',
          'Ensuring kitchen equipment complies with industry standards and is repaired or replaced as needed',
          'Alternate shifts with the executive chef, with each running the kitchen during their scheduled time ',
          'Creating a smooth workflow within the kitchen so that diners receive service in a timely manner '
        ]
      },
      {
        role: 'Sonographer',
        li: [
          'Preparing patients for imaging tests, such as dressing patients safety gear and using supplemental tools',
          'Talking patients through a testing procedure to keep them informed as well as comfortable during the experience',
          'Operating ultrasound machines to capture images of a specific area of a patient’s body, such as their heart, muscles and tendons or reproductive organs',
          'Reviewing captured images and consulting with medical professionals on the results and possible diagnoses, especially on abnormalities',
          'Cleaning and maintaining ultrasound equipment after each procedure'
        ]
      },
      {
        role: 'Software-Engineer',
        li: [
          'Working with users to determine their software needs',
          'Designing, developing and testing a system or application according to the users’ specifications',
          'Drawing diagrams and models that help developers create the appropriate code for the system or application',
          'Documenting the system or application in detail to help those responsible for future maintenance',
          'Maintaining the system or application with updates and fixes as necessary',
          'Recommending software upgrades for existing systems or applications',
          'Collaborating with developers and other engineers to create software'
        ]
      },
      {
        role: 'Software-Developer',
        li: [
          'Assessing new and existing software systems',
          'Improving existing computer systems',
          'Performing maintenance to existing systems by identifying and correcting errors or defects',
          'Creating code for new software and updates',
          'Creating operational manuals and systems specifications',
          'Consulting with project managers or clients on the progress of developing software to review possible suggestions, improvements or requirements',
          'Submitting reports on the project’s progress'
        ]
      },
      {
        role: 'Software-Architect',
        li: [
          'Researching and evaluating technical standards and tools for a project and determining which ones are the optimal choice',
          'Separating a project’s goal into several smaller solvable problems',
          'Communicating business requirements, criteria and needs to software development teams',
          'Designing and revising a project’s structure and UML (Unified Modeling Language) diagram',
          'Distributing development tasks to a team of software engineers',
          'Quality assurance testing segments of project code and checking for errors',
          'Writing sections of code as part of development in a project'
        ]
      },
      {
        role: 'Social-Worker',
        li: [
          'Evaluating patients’ needs based on their current situation and limitations',
          'Communicating with patients, helping to address their concerns and work toward their goals with a positive mindset',
          'Collaborating with physical and occupational therapists to ensure the comfort of patients',
          'Adhering to facility policies as well as government regulations',
          'Building and implementing care plans for patients, providing therapeutic support as needed'
        ]
      },
      {
        role: 'Social-Media-Intern',
        li: [
          'Ideating, creating and posting content to different social media platforms',
          'Planning and adhering to content calendars to schedule posts on different social media platforms',
          'Optimizing content, tracking user traffic and assessing user response to different content posted',
          'Help plan social media campaigns to reach a wider audience, increase brand awareness and drive sales',
          'Photography, graphic design and video content creation'
        ]
      },
      {
        role: 'Shipping-Clerk',
        li: [
          'Printing shipping documents such as sales receipts and cross-checking with the computer to ensure accuracy',
          'Preparing and printing the shipping labels and scheduling pick-ups',
          'Tracking inventory and updating records or reporting shortages to the sales team',
          'Processing orders based on the buyer’s preferred shipping system or identifying the most cost-effective shipping solution for the company',
          'Maintaining a clean and safe workspace for the team and updating supplies as needed'
        ]
      },
      {
        role: 'Service-Advisor',
        li: [
          'Greeting incoming customers and directing them to available mechanics',
          'Providing customers with detailed information about all available parts options provided by the original equipment manufacturer (OEM) and by aftermarket parts manufacturers',
          'Advising customers about part warranties and potential cost savings',
          'Helping the customer decide between repairing a vehicle and trading it in for another one',
          'Consulting with mechanics on behalf of the customer about necessary repairs and possible alternatives to expensive repairs',
          'Managing the service center’s scheduling and the workflow of the mechanics',
          'Contacting customers to update them on the status of their service, notifying them of any possible changes in their service and when their vehicle is ready to be picked up',
          'Answering customer questions about the outcome of their service'
        ]
      },
      {
        role: 'Server',
        li: [
          'Taking food and drink orders: Servers take orders from customers and relay them to the kitchen or bar. They also answer any questions about the menus and make recommendations to help customers make decisions.',
          'Serving food and drinks to customers: Servers collect orders from the kitchen or bar and bring them to customers’ tables. They also ask customers whether they would like more food and drink, and clear empty plates, glasses and tableware away.',
          'Cleaning and preparing tables: Servers clean tables and set them with glasses, tableware, condiments, napkins and tablecloths. These efforts help restaurants, bars and similar establishments maintain high cleanliness standards.',
          'Processing customer payments: Servers give customers their itemized bills and process their payments. They then give customers receipts for their payments.',
          'Resolving customer problems: As the point of contact for customers, servers are responsible for resolving any customer issues. They take food and beverages back to the kitchen and bar if they are not made to the customer’s specifications or the establishment’s standards. They also attempt to resolve any issues with customer bills and refer any complex issues to their supervisors. Servers also relay customer feedback to their supervisors.'
        ]
      },
      {
        role: 'Senior-Accountant',
        li: [
          'Prepares and records asset, revenue, liability and expense entries by compiling and analyzing account data and with input from the rest of the accounting team ',
          'Conduct monthly and quarterly account reconciliations to ensure accurate reporting and ledger maintenance ',
          'Analyze financial statements for discrepancies and other issues to bring to the attention of the Chief Financial Officer (CFO)',
          'Review all inter-company transactions and generate invoices as necessary ',
          'Reconcile balance sheet accounts ',
          'Delegate financial responsibilities to the rest of the accounting team ',
          'Coordinate semi-annual audits and assist CFO with conducting audits',
          'Conduct regular ledger maintenance ',
          'Generates payroll with computer processing or printing checks '
        ]
      },
      {
        role: 'Security-Officer',
        li: [
          'Responding to emergencies to assist employees and customers',
          'Protecting a property against theft or other criminal acts',
          'Complying with all federal, state and local regulations',
          'Providing exceptional customer service to all patrons',
          'Cooperating with local police during investigations'
        ]
      },
      {
        role: 'Security-Guard',
        li: [
          'Check for and issue guest passes to those entering a given facility',
          'Monitor video screens connected to security cameras',
          'Manage security procedures such as metal detectors or bag checks',
          'Secure areas during maintenance emergencies and other issues',
          'Perform routine inspections of specific areas ',
          'Communicate with local enforcement about any incidents',
          'Prevent or detain suspects in dangerous or criminal activity'
        ]
      },
      {
        role: 'Secretary',
        li: [
          'Scheduling appointments and update event calendars',
          'Helping visitors or clients navigate the workspace ',
          'Managing customer files and other documents in the office',
          'Implementing new procedures and administrative systems',
          'Recruiting, onboarding and supervising new employees',
          'Creating reports, presentations and documents'
        ]
      },
      {
        role: 'Scrum-Master',
        li: [
          'Work with team members to establish timelines for project stages, called “sprints”',
          'Ensure their team has all the resources needed to complete tasks',
          'Remove any impediments, or obstacles, that could slow down a timeline',
          'Schedule and attend a variety of meetings, referred to as “ceremonies”',
          'Ensure the team follows best Scrum practices throughout a project',
          'Hold retrospects or meetings after sprints to review progress and setbacks',
          'Encourage a positive working environment for all team members'
        ]
      },
      {
        role: 'School-Social-Worker',
        li: [
          'Communicating with parents, teachers and administrators',
          'Assessing areas in which students may need assistance or counseling',
          'Helping students function effectively in the school environment',
          'Evaluating student transcripts',
          'Maintaining accurate case files and reports of student progress and issues',
          'Participating in the Individual Education Plan (IEP) process as necessary'
        ]
      },
      {
        role: 'School-Nurse',
        li: [
          'Assessing the general health, development and growth of school children',
          'Adhering to the state standards for school nurses ',
          'Promoting health education to students and their families',
          'Providing first aid to injured students',
          'Administering any prescription medications for students',
          'Providing care and certain necessary procedures for disabled students',
          'Providing disease prevention programs and education',
          'Monitoring the well-being of all students, especially those with chronic conditions like asthma, diabetes or severe allergies',
          'Advocating for the well-being of children and identifying abusive situations that require the intervention of social services'
        ]
      },
      {
        role: 'School-Counselor',
        li: [
          'Assessing students’ skills, interests and characteristics through personality and aptitude tests',
          'Advising students on personal issues related to their classmates, school experiences and family life to ensure students are comfortable and focused',
          'Promoting mental and emotional wellness through educational materials, guest speaker events and other activities on relevant topics, such as peer pressure, bullying and maturation',
          'Working alongside teachers, administrative staff and parents to address behavioral or situational issues to ensure student success',
          'Collaborating with students on setting short- and long-term goals, especially those that relate to academic achievements, personal growth and career development after school',
          'Helping students select coursework and other educational opportunities that align with their passions and goals',
          'Hosting college visits and postsecondary education information sessions for high school students interested in furthering their education after graduation'
        ]
      },
      {
        role: 'School-Bus-Driver',
        li: [
          'Learning bus routes and when to arrive at each bus stop',
          'Helping students, particularly those with disabilities, on and off the bus',
          'Following traffic laws',
          'Making sure students are acting safely',
          'Maintaining order on the bus',
          'Reporting issues to school supervisors',
          'Making sure the bus is in good condition by checking things like tire pressure, lights and gas levels',
          'Cleaning the bus interior and making sure it looks presentable'
        ]
      },
      {
        role: 'Scheduler',
        li: [
          'Scheduling patient appointments for consultations, medical procedures and follow-up visits',
          'Answering phones and greeting patients',
          'Performing reminder calls for upcoming appointments ',
          'Communicating with other health care professionals about changes to preparation',
          'Filing paperwork',
          'Submitting billing or insurance claims',
          'Performing basic bookkeeping duties',
          'Coordinating daily schedules of medical professionals ',
          'Resolving scheduling conflicts'
        ]
      },
      {
        role: 'Sales-Support-Specialist',
        li: [
          'Giving customers real-time assistance, such as answering questions about pricing and availability and helping them select the right product',
          'Contacting customers to determine how the company’s products or services can meet their needs',
          'Following up with and getting feedback from customers',
          'Handling basic administrative duties for sales supervisors, such as answering phone calls, filing expenses, scheduling meetings and corresponding with clients',
          'Maintaining records of interactions with customers',
          'Performing data entry for metrics such as sales and returns',
          'Preparing sales contracts and making sure all the information they contain is correct',
          'Reporting problems or unusual activity to supervisors',
          'Working with team members and supervisors to come up with improved selling techniques'
        ]
      },
      {
        role: 'Sales-Representative',
        li: [
          'Meeting or exceeding sales goals',
          'Negotiating and closing sales contracts',
          'Understanding and educating consumers on product features',
          'Handling payments and closing transactions',
          'Completing daily, weekly and monthly sales reports'
        ]
      },
      {
        role: 'Sales-Engineer',
        li: [
          'Collaborating with sales teams to understand customer requirements',
          'Consulting with customers and engineers to assess needs and determine system requirements',
          'Planning and modifying product configuration to meet customer needs',
          'Preparing and delivering presentations to explain products or services to customers'
        ]
      },
      {
        role: 'Sales-Coordinator',
        li: [
          'Taking the lead on organizing resources to create high-quality sales presentations',
          'Ensuring the inventory of sales presentation materials are up-to-date, including brochures and presentation slides',
          'Acting as the primary contact for clients who have questions about accounts or products',
          'Hiring and training sales staff and assuring that each member of the sales team meets its quotas and goals',
          'Inputting orders and confirming they are accurate and delivered on time',
          'Making an organization’s products and services as attractive as possible to potential customers'
        ]
      },
      {
        role: 'Sales-Consultant',
        li: [
          'Train sales representatives to use technology to improve sales conversions',
          'Create and maintain mutually beneficial relationships with clients',
          'Increase product knowledge and understanding of the market and competition to help sales representatives find the most effective selling strategies',
          'Manage junior staff and hire additional sales professionals',
          'Set appointments with prospects and follow up with them afterward',
          'Teach sales reps to keep detailed, organized records',
          'Assist in the creation of procedures and protocols designed to increase conversion of leads into sales',
          'Work with the marketing department to help improve brand awareness and online presence'
        ]
      },
      {
        role: 'Sales-Clerk',
        li: [
          'Greeting customers shopping in-store',
          'Locating products in the store, stock room or another affiliated store for customers',
          'Answering customer questions about products and store policies',
          'Bagging products during the checkout process',
          'Processing customer payments for goods',
          'Organizing stock and displays on the sales floor according to the store’s visual standards'
        ]
      },
      {
        role: 'Sales-Associate',
        li: [
          'Welcoming new guests as they enter the store',
          'Conversing with customers to understand what product they’re looking for',
          'Suggesting various products for the guest based on their needs',
          'Explaining product uses and benefits ',
          'Starting a fitting room with clothing selected, if in apparel sales',
          'Having a strong knowledge of current product offerings and inventory levels',
          'Processing customer payments',
          'Assisting in creating store displays',
          'Unpacking and placing new merchandise on the sales floor',
          'Informing guests of current promotions and sales'
        ]
      },
      {
        role: 'Sales-Assistant',
        li: [
          'Ensuring that all sales materials are positioned clearly and in the correct places',
          'Updating customer information in the company’s database as needed',
          'Communicating with customers to answer questions or to determine their level of satisfaction with their purchases',
          'Collaborating with other sales staff to monitor inventory and receive delivery orders',
          'Reporting any inventory, service or safety issues to management immediately',
          'Performing clerical support, such as tracking sales commissions and managing inventory databases',
          'Keeping work areas and shopping areas clean and organized.'
        ]
      },
      {
        role: 'Rheumatologist',
        li: [
          'Order diagnostic imaging to identify signs of a systemic or autoimmune disorder',
          'Monitor the progress of an existing rheumatic disorder',
          'Prescribe medications to improve symptoms or slow the progression of the disorder',
          'Perform a physical assessment to better understand the symptoms',
          'Educate the patient on the autoimmune disorder and discuss a treatment plan'
        ]
      },
      {
        role: 'Retail-Sales-Associate',
        li: [
          'Recommend solutions: Some of the most important tasks for retail sales associates include talking with customers, assessing their needs and desires and recommending appropriate solutions. In a sales associate job, you may need to become a subject matter expert on the merchandise you sell to provide practical suggestions that meet customers’ requirements.',
          'Answer questions: Retail sales associates often handle basic customer service tasks like answering questions and explaining policies. As a retail specialist, you might help customers locate merchandise in the store or respond to customer inquiries about price or function.',
          'Demonstrate merchandise: Many retail associates use product or service demonstrations to generate sales. In this job, you might guide customers through a technology tutorial, prepare a recipe or assist shoppers who are trying on clothing.',
          'Advice about promotions: To encourage the sale of goods and services, retail associates are often responsible for telling customers about discounts. In this role, you might explain promotion guidelines and calculate sale prices for customers.',
          'Process purchases: In many cases, retail sales associates handle customer payments and calculate amounts owed. In this position, you might scan barcodes or enter merchandise details into a point-of-sale system before accepting cash, checks, credit cards or other forms of payment.'
        ]
      },
      {
        role: 'Retail-Associate',
        li: [
          'Recommending specific products to meet a customer’s needs',
          'Answering questions related to products or the location of merchandise',
          'Demonstrating how the merchandise works',
          'Informing customers about special promotions or discounts',
          'Accepting cash, credit cards and other forms of payment and processing exchanges or refunds'
        ]
      },
      {
        role: 'Restaurant-Server',
        li: [
          'Welcoming the patrons to the restaurant and taking food and drink orders',
          'Explaining the restaurant’s specials and menu items as necessary',
          'Recommending food and drink pairings',
          'Giving customer orders to the kitchen staff',
          'Ensuring all meals are created correctly and brought to the table promptly',
          'Clearing dishes from the table as each customer finishes their meal',
          'Preparing checks and taking payment from patrons',
          'Assisting in re-arranging tables to accommodate larger parties'
        ]
      },
      {
        role: 'Respiratory-Therapist',
        li: [
          'Interviewing patients and diagnosing breathing and lung disorders and recommending treatments',
          'Performing necessary procedures with noninvasive methods such as CPAP and BIPAP therapies',
          'Consulting with physicians to recommend a change in therapy',
          'Analyzing breath, tissue and blood specimens to evaluate the levels of oxygen and other gases',
          'Responding to urgent calls for care, such as for patients who have experienced heart attacks or drowning',
          'Managing ventilators and artificial airway devices for patients unable to breathe on their own'
        ]
      },
      {
        role: 'Resident-Assistant',
        li: [
          'Maintaining all care records in accordance with company policy and auditing care records to ensure accuracy',
          'Responding to medical or safety issues as needed',
          'Communicating any problems or issues to the family members of the residents',
          'Making sure all residents take medications as directed by the physician',
          'Leading daily individual or group activities for entertainment'
        ]
      },
      {
        role: 'Reporter',
        li: [
          'Research news events and stories, uncovering important details about each one',
          'Fact-check details of a story or event before publishing',
          'Pitch topic ideas to editors',
          'Interview witnesses or subjects to develop the story',
          'Report details of an event live'
        ]
      },
      { role: 'Registered-Nurse-(RN)', li: [
          'Conducting physical examinations to evaluate patient health issues',
          'Directly administering care to injured, sick, disabled or recovering patients',
          'Creating and enforcing nursing care plans',
          'Educating patients regarding their medical conditions and the treatment plan they need to follow',
          'Supervising other medical professionals, such as other licensed nurses, nursing aides and assistants',
          'Ensuring a hygienic and hazard-free working environment',
          'Providing patients and their families with emotional support',
          'Running and analyzing certain medical tests',
          'Helping doctors during medical procedures',
          'Promoting healthy habits for patients and their families'
      ] },
      {
        role: 'Recruiter',
        li: [
          'Identifying candidates: Using their research skills and their network of connections, recruiters seek out candidates who have the skills, education, experience and aspirations necessary for a job opening. Many recruiters use online job portals to post listings or search the same portals for published resumes that match the skill set they need. Others identify candidates in person via industry networking events.',
          'Attending job fairs: Recruiters often attend job fairs and college career events in their local areas or across the country. During these events, they represent industries or employers, answer questions about employment and careers and seek out candidates for future job openings.',
          'Interviewing applicants: After finding and screening candidates, recruiters interview applicants over the phone, via video or in person. They assess whether candidates meet employers’ needs and contact references to learn more about the applicants’ skills and backgrounds. Recruiters then recommend qualified candidates to employers.',
          'Making employment offers: Many recruiters also offer jobs to candidates and negotiate employment details. They may communicate with candidates and employers to reach agreements regarding job titles, salary, benefits and other terms of the job offer.'
        ]
      },
      {
        role: 'Receptionist',
        li: [
          'Scheduling appointments and meetings',
          'Greeting clients and visitors and connecting them with the appropriate party',
          'Entering customer or appointment information into the company database',
          'Managing documents and records',
          'Managing paper correspondence and phone calls',
          'Creating and managing filing systems ',
          'Making travel arrangements '
        ]
      },
      {
        role: 'Receiving-Clerk',
        li: [
          'Collaborate with the marketing department to develop a schedule for displaying manufacturer products on the sales floor',
          'Look for damage to goods that may have occurred during shipping',
          'Update product inventory in the database',
          'Operate forklifts or hand trucks to unload shipments from trucks',
          'Remove packaging materials and stock items with inventory'
        ]
      },
      {
        role: 'Realtor',
        li: [
          'Networking and prospecting to locate clients and sell them on the benefits of working with them at their agency',
          'Traveling with clients to show them the features of each home and compare different properties based on their needs',
          'Guiding clients through the process of preparing a home for sale, including bringing in extra furniture and decor to stage the home for prospective buyers',
          'Negotiating the contract to obtain the best possible purchase price for a home',
          'Hosting open houses for clients who are motivated to sell quickly',
          'Looking for comparable sales, or comps, to identify the best price a home should be listed at or what offer should be made on a home'
        ]
      },
      {
        role: 'Real-Estate-Broker',
        li: [
          'Mentoring and assisting real estate salespersons with their client transactions',
          'Assisting buyers in viewing and inspecting a home and submitting a purchase agreement',
          'Helping sellers prepare their home for sale and list it on the market',
          'Oversee contracts and buying agreements for both buyers and sellers',
          'Market the listing to attract interested buyers'
        ]
      },
      {
        role: 'Real-Estate-Agent',
        li: [
          'Develop a client roster: To cultivate a list of people interested in purchasing, selling or renting property, real estate agents actively seek out potential clients. They typically meet prospective clients at community events, through word of mouth or by posting advertisements.',
          'Publish and review real estate listings**:** Agents publish listings that describe the property, its features and benefits, the local area and the asking price. Real estate agents who are helping clients purchase or rent property review published listings to find options that meet their needs. Many agents also use published real estate listings to determine market values and compare prices for similar properties.',
          'Arrange and attend property viewings: When they sell a property for clients, agents schedule, advertise and oversee real estate viewings. At open houses, they typically greet potential buyers, answer questions and advise about making offers. When assisting with real estate purchases, agents usually plan and attend property viewings with clients.',
          'Make and negotiate purchase offers: Real estate agents handle negotiations between buyers and sellers and assist clients with writing or responding to purchase offers. In most cases, agents for buyers and sellers communicate directly with each other while serving as mediators between their clients.',
          'Create contracts and deeds: Once negotiations are complete, real estate agents create contracts, deeds and other legal documents that transfer ownership of the property. Agents may also assist with filing signed documents with the appropriate local agencies.'
        ]
      },
      {
        role: 'Radiology-Technician',
        li: [
          'Sonography: Obstetric imagers use sonography, a technology that involves high-frequency sound waves, to take images of the fetus.',
          'X-rays: Some radiographers, like mammographers, use low-intensity X-rays to take images of breast tissue when screening for breast cancer. ',
          'Computed tomography (CT): CT scans involve a series of two-dimensional X-rays that radiology technicians splice together to create three-dimensional images of certain parts of the body. These kinds of images are useful when physicians are searching for internal tumors, traumas or growths.',
          'Magnetic resonance imaging (MRI): MRI technology also produces three-dimensional images from multiple images. Unlike X-rays and CT technology, it uses non-ionizing radio frequency, which diminishes the threat of radiation exposure. MRIs are typically used when diagnosing herniated disks, torn ligaments and soft tissue issues.'
        ]
      },
      {
        role: 'Radiologist',
        li: [
          'Reviewing the results from X-rays, MRIs, CT scans, mammograms and ultrasounds and interpreting the results',
          'Recommending testing to aid in the patient’s diagnosis and treatment ',
          'Performing imaging procedures to test for conditions such as cancer and track patient progress during treatments',
          'Supervising imaging technicians who may have questions or need help and guidance during imaging tests',
          'Reviewing and prescribing medications as well as performing interventional procedures, such as ultrasound-guided biopsy and angioplasty'
        ]
      },
      {
        role: 'Radiologic-Technologist',
        li: [
          'Providing technical radiological information to patients with questions and offering recommendations',
          'Assisting in the development of a patient appointment schedule',
          'Keeping an inventory of the clinic’s radiographic supplies and developing purchase orders to maintain a clinic’s supplies',
          'Analyzing, discerning and reporting results of radiographic tests and scans to a team of physicians',
          'Making use of radiographic scanning tools'
        ]
      },
      {
        role: 'Radiation-Therapist',
        li: [
          'Describing treatments to patients and answering questions',
          'Giving support and reassurance to nervous patients',
          'Practicing safety techniques to protect patients and themselves from radiation',
          'Making sure machines are working properly',
          'Taking X-rays to identify treatment areas ',
          'Calibrating the linear accelerator',
          'Making sure radiation doses are correct',
          'Watching patients to ensure they do not have negative reactions to the radiation treatment',
          'Maintaining detailed treatment records'
        ]
      },
      {
        role: 'Quality-Inspector',
        li: [
          'Establishing quality standards for all products and services provided and received by a company',
          'Creating rules for adherence to standards and communicating them to all relevant staff to ensure quality levels are maintained',
          'Writing documents to outline all standards clearly to create references for employees to use during assessments',
          'Working with management-level employees to enact and maintain new standards',
          'Performing random quality inspections on products or services to assess quality levels'
        ]
      },
      {
        role: 'Quality-Engineer',
        li: [
          'Work with suppliers to make sure all the components and raw materials meet the organization’s quality standards',
          'Analyze customer feedback to identify potential flaws in the manufactured products and implement changes when necessary',
          'Monitor the quality of employee training and the safety standards required in the manufacturing process',
          'Document any issues in the production process and develop ways to fix them',
          'Stay up to date with legal standards the manufactured products must meet and ensure all products are within those standards',
          'Create and present quality reports that analyze internal and external quality standards'
        ]
      },
      {
        role: 'Quality-Control-Inspector',
        li: [
          'Monitoring manufacturing operations and making sure that systems are functioning properly',
          'Maintaining and testing instruments and equipment',
          'Testing a percentage of all the products made in a particular facility based on industry standards',
          'Reporting defects, malfunctions or any other problems to senior staff',
          'Training and managing new quality assurance team members',
          'Inspecting products at various stages, from raw materials to final item',
          'Writing, teaching, maintaining and updating testing protocols'
        ]
      },
      {
        role: 'Purchasing-Assistant',
        li: [
          'Review purchase agreements with vendors',
          'Monitor deliveries and purchase orders and contact vendors when there are discrepancies',
          'Conduct vendor research to enhance profitability within the organization',
          'May also conduct administrative activities to help the department run efficiently'
        ]
      },
      {
        role: 'Purchasing-Agent',
        li: [
          'Review requisition requests, prepare purchase orders and solicit bids for goods and services',
          'Negotiate and administer contracts with suppliers and vendors',
          'Analyze financial reports, price proposals and other financial data to determine reasonable prices for goods and services',
          'Balance cost and quality to procure the best quality of goods or services for the lowest price in adequate amounts',
          'Monitor and adhere to applicable laws, regulations and policies regarding the purchase of goods and services'
        ]
      },
      {
        role: 'Pulmonologist',
        li: [
          'Meeting with patients to discuss symptoms',
          'Examining patients by using tools such as stethoscopes, x-rays and other diagnostic items',
          'Diagnosing illnesses and recommending treatment',
          'Following up with patients during and after treatment'
        ]
      },
      {
        role: 'Publicist',
        li: [
          'Speeches',
          'Press releases ',
          'Press kit materials ',
          'Media alerts',
          'Social media content ',
          'Bios ',
          'Website content ',
          'Pitches '
        ]
      },
      {
        role: 'Psychotherapist',
        li: [
          'Conduct sessions with patients under a tailored therapy program',
          'Gain an understanding of the emotions and feelings of the client through conversation',
          'Guide the client to address their inner conflicts and help them develop methodologies to manage disorders',
          'Use cognitive behavioral therapy to treat clients as appropriate',
          'Maintain a record of client consultations '
        ]
      },
      {
        role: 'Psychologist',
        li: [
          'Determining goals for psychotherapy',
          'Performing diagnostic evaluations for patients',
          'Understanding a patient’s needs',
          'Devising and implementing psychotherapeutic plans',
          'Providing consultation to patients and groups',
          'Attending program development'
        ]
      },
      {
        role: 'Psychiatrist',
        li: [
          'Assessing a patient’s symptoms and determining their source, which could include mental illness, physical illness or a combination',
          'Diagnosing a patient’s mental health condition through the use of tests and examinations',
          'Prescribing a treatment plan for a patient depending on their needs, making use of medication and psychotherapy',
          'Referring a patient to a mental health counselor or psychologist for specialized therapy'
        ]
      },
      {
        role: 'Prosecutor',
        li: [
          'Reviewing police reports and researching supporting documentation for a criminal case',
          'Preparing evidence and determining the sufficiency of the evidence that will lead to a trial in a court of law',
          'Interviewing police officers, victims, witnesses and experts to gather required evidence for starting a trial',
          'Drafting case motions, issuing subpoenas and ordering lab reports',
          'Presenting gathered evidence in court to convict a suspect'
        ]
      },
      {
        role: 'Project-Engineer',
        li: [
          'Preparing, scheduling, coordinating and monitoring all assigned projects',
          'Communicating effectively during daily interactions with clients to interpret their requirements and needs',
          'Maintaining quality control in every area, including team dynamics, personnel performance, planning, scheduling and budget',
          'Submitting reports on project status',
          'Monitoring compliance in all aspects of the project',
          'Communicating effectively with the project manager and other team members to provide assistance and technical support',
          'Reviewing engineering deliverables and initiating appropriate corrective actions throughout the project lifecycle'
        ]
      },
      {
        role: 'Project-Coordinator',
        li: [
          'Assisting and supporting project managers with tasks such as the development of standard operating procedures, compiling documents and making appointments',
          'Tracking, analyzing and communicating project liabilities and opportunities',
          'Collecting data and tracking project success metrics',
          'Scheduling meetings to coordinate project work and provide status updates',
          'Monitoring budgets and other financial documents and resolving any financial queries',
          'Updating and using the risk/opportunity registers to mitigate financial risks',
          'Developing training materials'
        ]
      },
      {
        role: 'Programmer-Analyst',
        li: [
          'Developing and distributing support documentation for applications and software patches created in-house',
          'Responding to all support ticket requests within the time frame outlined in the IT support policies',
          'Updating and maintaining the company website and intranet site',
          'Monitoring the creation of new network support documentation for accuracy and value as a user resource',
          'Migrating current internal and internet-based applications to a new platform'
        ]
      },
      {
        role: 'Program-Coordinator',
        li: [
          'Determining and implementing policies and procedures',
          'Maintaining program budgets',
          'Scheduling employees as needed to execute programs',
          'Organizing and maintaining a program agenda',
          'Managing internal and external communications related to the programming'
        ]
      },
      {
        role: 'Program-Assistant',
        li: [
          'Create training documents and assist with the development of program materials',
          'Schedule meetings and take and distribute minutes',
          'Manage program calendars',
          'Draft contracts and budgets under supervision of management',
          'Liaise with project consultants and field office staff',
          'Keep program plans updated so that team members can have a clear view of the status of the program',
          'Maintain a program’s website and social media accounts',
          'Assist with the recruitment of new team members',
          'Provide background material and other documentation for external meetings'
        ]
      },
      {
        role: 'Program-Analyst',
        li: [
          'Organizing information about a problem to be addressed or a procedure to be improved',
          'Proposing recommendations to management through presentations or written reports',
          'Interviewing personnel and conducting onsite observations to determine the equipment, methods and personnel needed',
          'Developing solutions or alternative practices',
          'Recommending new procedures, systems, procedures or organizational changes',
          'Analyzing financial and other data, including expenditure, revenue and employment reports',
          'Conferring with managers to make sure changes are working'
        ]
      },
      {
        role: 'Production-Worker',
        li: [
          'Assembling parts or products by hand or using power tools to solder, drill, weld and attach',
          'Monitoring equipment and machinery and fixing any problems detected or referring them to a supervisor',
          'Keeping workstation and facility floor clean and free of hazards',
          'Observing assembly line and removing faulty parts or products detected',
          'Inspecting assembled products to ensure they meet quality and safety specifications',
          'Attaching labels, company logos and other details to finished products',
          'Packing up finished products for shipping',
          'Unloading, organizing and stocking shipments'
        ]
      },
      { role: 'Production-Supervisor', li: [
          'Scheduling the production process, including setting specific targets for phases of production',
          'Troubleshooting problems during the production process to get the system up and running again as quickly as possible',
          'Delegating responsibilities for production to team members and creating team leadership positions to oversee groups of employees',
          'Conducting performance assessments and compiling reports on the production process to identify areas where efficiency can be increased',
          'Learning all relevant federal and local regulations on production and maintaining compliance throughout the process'
      ] },
      {
        role: 'Production-Assistant',
        li: [
          'Preparing and delivering daily call sheets that describe the scenes being filmed and the actors and items needed',
          'Making sure actors get their makeup and costumes',
          'Announcing when each shoot starts and ends',
          'Identifying issues that occur during filming and communicating those to the director or producer',
          'Running errands and gathering supplies'
        ]
      },
      {
        role: 'Process-Engineer',
        li: [
          'Testing, monitoring and maintaining equipment, including conducting regular tests to make sure equipment is in compliance with national and internal standards',
          'Researching, pricing and assisting in the purchase of new equipment',
          'Designing new equipment as required or redesigning the flow of the process in the factory or plant',
          'Designing, modifying and overseeing processes to guarantee maximum output with minimum defects in the production line',
          'Overseeing the operations of the plant ',
          'Overseeing the safety of employees',
          'Writing, maintaining and collecting required paperwork to show compliance with safety protocols',
          'Collecting and interpreting data on efficiency and budgets to report to senior management ',
          'Analyzing every detail and step of the production process to cut costs, increase productivity and optimize the production line'
        ]
      },
      {
        role: 'Probation-Officer',
        li: [
          'Meeting with probationers at home, school, work, court or other settings to discuss progress during probation',
          'Scheduling job interviews, training sessions, counseling appointments and substance abuse treatment programs for probationers as required',
          'Filing reports on probationers’ progress and compliance with the court',
          'Meeting with employers, family members, judges, lawyers, community leaders and other interested parties to discuss probationers’ progress',
          'Suggesting amendments to probation requirements, when appropriate'
        ]
      },
      {
        role: 'Principal',
        li: [
          'Hiring teachers and other staff members',
          'Establishing and upholding school codes and policies',
          'Managing the school’s budget and continued funding',
          'Communicating with staff and parents',
          'Maintaining disciplinary policies',
          'Attending functions as the public face of the school'
        ]
      },
      {
        role: 'Preschool-Teacher',
        li: [
          'Teaching children to identify colors, shapes and letters',
          'Teaching children to count or do basic math',
          'Encouraging children to try new things',
          'Teaching rules, respect and good behavior',
          'Offering children periods of exercise and rest',
          'Teaching children about routines and hygiene',
          'Recording each child’s progress and interests and sharing that information with parents'
        ]
      },
      {
        role: 'Prep-Cook',
        li: [
          'Clean and sanitize prep areas before and after use, making sure that all kitchen equipment is clean and ready to use',
          'Monitor ingredient and inventory levels, reporting to the chef or sous chef at regular intervals throughout the shift',
          'Ensure the consistency, quality and accuracy of each order ',
          'Prepare dishes for banquets and fulfill any special requests, when applicable',
          'Order and oversee inventory deliveries',
          'Assist in creating menus',
          'Adhere to food storage standards'
        ]
      },
      {
        role: 'Porter',
        li: [
          'Ensuring hotel lobbies, amenities and other public areas are kept clean and neat',
          'Greeting guests at the entrance to a hotel or resort and assisting them with luggage',
          'Helping travelers in airports and on cruise ships load and unload their bags',
          'Completing minor repairs and maintenance, such as changing light bulbs and fastening loose bolts',
          'Putting away stray shopping carts in shopping malls',
          'Communicating the maintenance team’s supplies needs to the building’s management',
          'Helping guests in need of custodial service',
          'Providing information to guests who may be unfamiliar with their location',
          'Placing and removing signage to show wet floors, wet paint and areas that have been marked off-limits for maintenance'
        ]
      },
      {
        role: 'Police-Officer',
        li: [
          'Responding to emergencies',
          'Investigating crimes, gathering evidence and securing crime scenes',
          'Observing the activities of suspects, obtaining warrants and making and processing arrests',
          'Taking eyewitness statements and interviewing suspected criminals',
          'Writing detailed reports about cases they are involved in',
          'Preparing cases and testifying in court'
        ]
      },
      {
        role: 'Podiatrist',
        li: [
          'Meeting with patients and performing physical exams',
          'Ordering X-rays and laboratory tests to diagnose issues',
          'Prescribing special shoes, arch support and inserts to relieve pain or improve mobility',
          'Prescribing medications',
          'Advising how to rehabilitate injuries or properly care for feet and ankles',
          'Doing research and reading about the latest podiatry advances',
          'Collaborating with patients’ main doctors or other specialists as needed'
        ]
      },
      {
        role: 'Plumber',
        li: [
          'Installing plumbing systems—including pipes and fixtures—in new construction and rehab residential and commercial properties',
          'Performing routine maintenance of plumbing systems in residential and commercial buildings',
          'Responding to plumbing emergencies and service calls from the general contracting team',
          'Inspecting equipment and performing tests to determine the cause and location of trouble',
          'Making recommendations and communicating estimated costs of installations and repairs to customers',
          'Working alongside other construction workers and helping get necessary permits for plumbing work',
          'Adhering to current rules and regulations related to plumbing so systems pass inspection the first time'
        ]
      },
      {
        role: 'Plastic-Surgeon',
        li: [
          'Examining patients to assess any deformity or illness and applying the appropriate medical treatment, either reconstructive or cosmetic',
          'Explaining the treatment solution to patients, including the risks and dangers of surgical treatments',
          'Following up with patients after treatment and providing any necessary follow-up care',
          'Performing non-invasive procedures as necessary to restore the appearance',
          'Assessing a patient’s psychological health before and after treatment',
          'Maintaining the confidentiality of patient information'
        ]
      },
      {
        role: 'Physiotherapist',
        li: [
          'Help patients manage pain',
          'Help prevent recurring illnesses and maintain overall patient health',
          'Facilitate recovery and encourage physical improvement',
          'Enable patients to continue working and leading better quality lives for as long as possible',
          'Assess patients’ conditions and implement treatment programs ',
          'Devise programs aimed at preventing physical dysfunction'
        ]
      },
      {
        role: 'Physicist',
        li: [
          'Developing theories about the properties of space, matter, energy and time',
          'Conducting experiments to test scientific theories',
          'Developing new scientific equipment and computer software to evaluate and model data',
          'Writing proposals and applications for research funding',
          'Writing scientific papers',
          'Presenting research findings at physics events'
        ]
      },
      {
        role: 'Physician-Assistant',
        li: [
          'Performing physical examinations ',
          'Taking the patient’s medical history',
          'Ordering laboratory tests, scans and X-rays and interpreting the results',
          'Diagnosing illnesses and conditions',
          'Prescribing medicines',
          'Providing counseling to patients',
          'Supporting surgical staff during procedures',
          'Setting fractures',
          'Stitching wounds'
        ]
      },
      {
        role: 'Physician',
        li: [
          'Reviewing patients’ medical histories',
          'Documenting findings and treatment plans in patient medical records',
          'Performing physical and mental assessments on patients to diagnose medical conditions',
          'Ordering and performing medical tests ',
          'Designing and recommending treatment plans',
          'Addressing concerns and answering questions from patients',
          'Reviewing test results',
          'Prescribing medication',
          'Performing surgery, closing wounds, setting broken bones and administering other medical procedures'
        ]
      },
      {
        role: 'Physical-Therapy-Assistant',
        li: [
          'Verifying patients are performing their home exercises properly and correcting them if necessary',
          'Communicating with the physical therapist to update exercise programs',
          'Evaluating a patient’s condition using medical and biological science',
          'Teaching patients and their family how to take care of their injury after therapy finishes',
          'Creating objectives and goals for treatment'
        ]
      },
      {
        role: 'Physical-Therapist-Assistant',
        li: [
          'Use rehabilitative techniques to improve patient’s mobility, strength and range of motion',
          'Observe and review patients’ progress and discuss notes with the physical therapist',
          'Record patient progress and share with medical professionals',
          'Educate family members on techniques and exercises the patient can use at home',
          'Work closely to assist the primary physical therapist in developing strengthening routines'
        ]
      },
      {
        role: 'Physical-Therapist',
        li: [
          'Restore motor function ',
          'Prevent future disability',
          'Help people recover after an injury or surgery  ',
          'Work with patients to develop a treatment plan',
          'Treat chronic illness through exercise plans'
        ]
      },
      {
        role: 'Phlebotomist',
        li: [
          'Greeting blood draw patients and explaining the process to them',
          'Ensuring patients’ intake paperwork is correct and complete and that their identity is clear',
          'Calming patients if they are nervous',
          'With pediatric patients, preparing distractions, special toys and smaller needles',
          'In case of geriatric patients, making sure all conditions are noted and necessary precautions have been undertaken',
          'Sterilizing and organizing all equipment according to procedures and protocols',
          'Conducting the blood draw',
          'Following all special instructions on patients’ order forms',
          'Labeling and properly storing the sample',
          'Properly disposing of used needles and bandages',
          'Making sure the patient has no adverse reactions',
          'Inventorying equipment',
          'Sterilizing and cleaning the area for the next patient'
        ]
      },
      {
        role: 'Pharmacy-Technician',
        li: [
          'Ensure that the pharmacy and dispensary areas are kept clean and organized',
          'Supervise junior staff',
          'Provide information to patients',
          'Follow the law and confidentiality regulations of the institution and state',
          'Compound or mix solutions, ointments and creams'
        ]
      },
      {
        role: 'Pharmacologist',
        li: [
          'Planning and directing pharmacology studies',
          'Standardizing drug doses and treatment plans',
          'Preparing and writing research grants ',
          'Following safety procedures',
          'Performing research on subjects'
        ]
      },
      {
        role: 'Pharmacist',
        li: [
          'Working with physicians to discuss potential compatibilities or incompatibilities',
          'Managing and maintaining an accurate inventory of a pharmacy’s medications',
          'Providing information to help patients better understand what their prescribed medications do and how to take them properly',
          'Assisting patients in solving pharmaceutical challenges such as identifying medication with damaged labels',
          'Recommending over-the-counter medical solutions to minor health issues'
        ]
      },
      {
        role: 'Petroleum-Engineer',
        li: [
          'To design and improve petroleum extraction and treatment facilities',
          'To facilitate the construction of petroleum extraction devices and drilling activities',
          'To utilize current technologies to enhance industry techniques and the petroleum creation process',
          'To develop plans and methods that will improve the oil and gas extraction industry’s environmental impact'
        ]
      },
      {
        role: 'Personal-Trainer',
        li: [
          'Show clients how to exercise: Personal trainers demonstrate exercises and teach clients how to use fitness equipment correctly. They regularly use fitness machines, such as treadmills, elliptical machines and weight machines. They also use free weights, dumbbells, kettle bells, fitness ropes and other exercise equipment.',
          'Create personalized workout plans: These fitness professionals talk with clients to determine their fitness goals. They then design customized exercise and fitness plans to help clients achieve their objectives within a specific timeframe.',
          'Monitor client progress: Most personal trainers work with clients for extended periods of time ranging from weeks to years. During this time, they track clients’ progress, including metrics like weight, muscle mass and workout times.',
          'Advise clients about diet and nutrition: Many personal trainers also talk with clients about diet, nutrition and lifestyle issues. They may advise clients to make changes to their diet or lifestyle so they can reach their fitness goals.',
          'Provide emergency first aid: If their clients experience a medical emergency or cardiac arrest, personal trainers act as first responders. Personal trainers typically have experience with cardiopulmonary resuscitation (CPR) and automated external defibrillator (AED) devices.'
        ]
      },
      {
        role: 'Personal-Assistant',
        li: [
          'Complete errands and chores: Personal assistants often spend the majority of their working hours doing personal errands for their employers. These errands often include everything from shopping for gifts and groceries to retrieving dry cleaning and meals to overseeing car repairs. Personal assistants often drive, walk or use public transportation to accomplish these errands.',
          'Schedule appointments: From doctor and dentist appointments to meetings with colleagues, personal assistants often schedule appointments for their employers. They may do so over the phone, via email or through online portals. Personal assistants also update their employers’ calendars to ensure that they attend these appointments.',
          'Manage correspondence: Answering phones, opening and distributing mail and forwarding or responding to emails are also standard responsibilities for personal assistants. Since they often handle confidential correspondence, personal assistants must be discreet.',
          'Plan travel: Many personal assistants also make travel arrangements for employers and their family members. From work-related trips to vacations, personal assistants often book flights, arrange rental cars and reserve hotel rooms. They also create itineraries and recommend activities for their employer’s destination.',
          'Manage households: Personal assistants who work for individual employers often handle various household management tasks, too. They might schedule appointments for their employer’s children, update family calendars or transport family members to appointments and other events. Personal assistants may also arrange for household cleaning and maintenance and manage other service providers while they complete contracted jobs.'
        ]
      },
      {
        role: 'Perfusionist',
        li: [
          'Monitor the vitals and health of the patient during surgery and take action when vitals are compromised',
          'Coordinate and communicate with the surgical team to adjust machine use, as needed',
          'Assess the blood rate of the patient to choose the right setting when using the perfusion machine',
          'Choose the right equipment based on the patient’s needs',
          'Evaluate the condition of the machine during surgery'
        ]
      },
      {
        role: 'Pediatrician',
        li: [
          'Monitoring and answering parents’ questions about children’s milestones in growth, behavior and skills',
          'Diagnosing and treating illnesses, infections, injuries and other health problems',
          'Educating parents with information about a child’s health, nutrition, safety and fitness needs',
          'Referring a specialist in the event that the child needs expert care',
          'Writing prescriptions for medications'
        ]
      },
      {
        role: 'Payroll-Specialist',
        li: [
          'Prepare and submit paper payroll checks for employees who do not have direct deposit ',
          'Collect banking information for direct deposit setup and process deposits on paydays ',
          'Familiarize yourself and keep current with policies relating to the taxation of salaries, benefits and other payroll factors ',
          'Process and monitor garnishment orders and other issues that impact payroll specifications ',
          'Document and maintain all payroll records',
          'Conduct semi-annual audits of all payroll records ',
          'Reconcile general ledger regarding payroll transactions',
          'Detect and process issues related to uncollected payroll ',
          'Respond to employee inquiries regarding payroll issues or concerns '
        ]
      },
      {
        role: 'Payroll-Clerk',
        li: [
          'Verify timekeeping records and consult employees about any discrepancies ',
          'Record payroll data in the company’s payroll software system and verify all amounts prior to cutting checks ',
          'Alter employee tax status or withholding information as needed ',
          'Prepare manual checks for distribution to employees ',
          'Process direct deposits',
          'Change employee banking records when necessary for accurate payment processing ',
          'Record employee complaints, questions and concerns about payroll services and communicate those issues to the HR manager',
          'Maintain complaint policies and procedures for processing payroll checks '
        ]
      },
      {
        role: 'Patient-Care-Technician',
        li: [
          'Providing basic patient care including bathing and feeding',
          'Conducting regular patient rounds and meeting with the patient’s family members when necessary',
          'Monitoring patients’ food and liquid intake, making note of any irregularities',
          'Obtaining specimens, conducting tests and recording results',
          'Checking blood pressure, heart rate and pulse on a routine basis',
          'Escorting patients to X-rays and other diagnostic imaging procedures'
        ]
      },
      {
        role: 'Patient-Advocate',
        li: [
          'Accompanying patients to appointments or visiting them during hospital stays',
          'Maintaining contact with insurance companies to resolve billing issues quickly',
          'Making referrals to patients for healthcare services or helping patients choose doctors',
          'Interviewing patients and identifying care problems',
          'Acting as the support person for patients who have questions on insurance issues',
          'Monitoring patient payments and reporting significant issues to management'
        ]
      },
      {
        role: 'Pathology-Assistant',
        li: [
          'Examine and describe individual specimens removed from the human body',
          'Assist in determining the cause of death',
          'Preserve samples to assist with student training',
          'Test samples for disease or inconsistencies',
          'Operate medical equipment to gather additional information'
        ]
      },
      {
        role: 'Pathologist',
        li: [
          'Studying bodily fluids and tissues to determine the cause of a patient’s ailments',
          'Working with imaging specialists to create analysis algorithms based on laboratory samples',
          'Conducting tissue biopsies to determine whether a tissue sample is benign or cancerous',
          'Collating data from multiple sources into single clinical studies',
          'Performing autopsies to gather information about a disease’s genetic progression and growth',
          'Conducting analyses of the clinical data available to reach more definitive conclusions',
          'Analyzing genetic material and testing for potentially effective treatments for conditions based on genetic information',
          'Supervising physical examinations on a patient to offer recommendations on actions a patient can take to maintain health and cure illnesses'
        ]
      },
      {
        role: 'Pastry-Chef',
        li: [
          'Preparing the desserts and breads on a menu',
          'Training or supervising other pastry chefs or line cooks in preparing desserts and their components',
          'Along with the sous chef and executive chef, refining the menu as needed and adding or altering existing dessert selections',
          'If working for a custom bakery or caterer, coordinating with clients to create cakes and desserts for weddings, special events and banquets',
          'Managing inventory and ingredients',
          'Ensuring the work area is kept clean and equipment is properly maintained',
          'Preparing samples for pastry or cake tastings'
        ]
      },
      {
        role: 'Pastor',
        li: [
          'Leading religious worship services',
          'Providing counseling to parish members, including comforting them when they are distressed, visiting those who are sick or offering advice in important decisions',
          'Performing religious ceremonies, such as baptisms, weddings and funerals',
          'Fundraising for the church or community',
          'Overseeing church finances, including accounting and budgeting',
          'Organizing and directing charitable efforts',
          'Fostering a sense of community',
          'Composing and delivering sermons',
          'Teaching theology classes',
          'Leading prayer groups',
          'Instructing the parish and the public in moral and ethical matters',
          'Responding to crisis situations to comfort the injured or dying',
          'Overseeing ministry efforts of a church or congregation'
        ]
      },
      {
        role: 'Parole-Officer',
        li: [
          'Visit parolees at home or work: To monitor former offenders and ensure they are reintegrating into society successfully, parole officers visit parolees regularly. They typically make scheduled visits to parolees’ homes and workplaces, and they may also check in with parolees by phone or via office visits. Parole officers may request frequent updates from family members as well.',
          'Evaluate parolees’ environments: In addition to talking with parolees and their families, parole officers evaluate former offenders’ surroundings. They assess the safety of their home and work environments and check for mental health issues that may be present.',
          'Provide job and education assistance: To help parolees reenter society after imprisonment, parole officers help their clients access job and education resources. They may connect parolees with organizations that hire former offenders or provide information about trade schools and vocational programs that may help parolees secure a job.',
          'Help parolees access rehabilitation resources: When necessary, parole officers can provide their clients with access to substance abuse counseling and other rehabilitation resources.',
          'Work with people on probation: In some smaller districts, many parole officers also manage people on probation. They perform similar tasks in this role: supervising probationers and ensuring they reintegrate into their communities.'
        ]
      },
      {
        role: 'Park-Ranger',
        li: [
          'Enforcing laws related to safety and cleanliness as well as fire and disaster prevention',
          'Providing tours and educational lessons on the environment, local wildlife, the historical and cultural relevance of landmarks and other information relevant to the park or site they serve',
          'Working in the visitor center of a park or site, providing information to hikers, campers and other patrons',
          'Contributing to environmental conservation efforts to protect wildlife, plants and other aspects of nature from natural and human impacts',
          'Maintaining quality of both indoor and outdoor spaces by removing litter, clearing trails and protecting artifacts'
        ]
      },
      {
        role: 'Paramedic',
        li: [
          'Working with emergency dispatchers to determine the best route to the hospital',
          'Managing large crowds of people or concerned friends and family by clearing them away from the patient',
          'Filling out paperwork regarding the patient’s condition and actions taken in a legible format',
          'Performing life-saving techniques such as CPR',
          'Keeping track of inventory in the ambulance and ordering more supplies as necessary'
        ]
      },
      {
        role: 'Paralegal',
        li: [
          'Drafting legal documents and reports requested by lawyers',
          'Developing legal arguments, motions and case filings with lawyers',
          'Conducting case research using existing files and other relevant resources',
          'Gathering case evidence, including affidavits and formal statements',
          'Maintaining and organizing legal files for ongoing and resolved cases',
          'Monitoring pertinent changes to government regulations and guidelines'
        ]
      },
      {
        role: 'Paleontologist',
        li: [
          'Conducting research on possible and probable locations for undiscovered fossils',
          'Attending digs to excavate fossils and other samples',
          'Reviewing collected items in a lab and performing a variety of tests to identify markers such as age and species',
          'Comparing findings to that of their colleagues, either in an educational or museum setting or through published articles',
          'Writing and publishing hypotheses and other significant developments based on their collections and lab testing'
        ]
      },
      {
        role: 'Outside-Sales-Representative',
        li: [
          'Scheduling and conducting face-to-face meetings with potential clients or customers',
          'Monitoring and reaching sales goals as set by the sales team leader',
          'Networking and maintaining strong relationships with previous customers',
          'Highlighting the most appealing product or service features to sell to customers',
          'Developing customer service skills'
        ]
      },
      {
        role: 'Orthopedic-Surgeon',
        li: [
          'Meeting with patients to diagnose injuries',
          'Deciding whether an issue requires surgery and, if not, recommending nonsurgical treatment',
          'Recommending and interpreting diagnostic imaging, such as radiographs, ultrasound and magnetic resonance imaging (MRI)',
          'Performing surgeries such as bone grafting and internal fixation with screws and plates to stabilize fractures',
          'Consulting and working with radiologists, anesthesiologists, physical therapists and other medical professionals',
          'Performing follow-up exams on patients post-surgery'
        ]
      },
      {
        role: 'Orthodontist',
        li: [
          'Consult with patients about dental concerns: Orthodontists talk with patients about common dental issues ranging from underbites to overcrowding. They also discuss aesthetic issues, such as a misaligned jaw, with patients.',
          'Diagnose dental issues: To diagnose dental problems, orthodontists use tools like X-rays and study models. After examining bite impressions or X-rays, orthodontists suggest treatment plans, such as braces to straighten teeth or headgear to align the jaw.',
          'Treat patients for dental problems: After starting a treatment plan, orthodontists perform regular checkups for patients. Over the course of months or years, they may tighten braces or provide additional equipment, such as face masks or retainers.',
          'Track patients’ progress: Since many orthodontic treatment plans last for a year or more, orthodontists monitor patient progress closely. They may take additional X-rays or bite impressions to confirm results or make adjustments to address new concerns.',
          'Teach patients how to maintain good oral health: Orthodontists also show patients how to clean teeth and maintain oral health over the course of treatment plans. They may demonstrate brushing or flossing techniques that accommodate orthodontic implements like braces.'
        ]
      },
      {
        role: 'Optometrist',
        li: [
          'Evaluate eye-related health symptoms',
          'Prescribe eyeglasses and contact lenses',
          'Provide outpatient care for those with eye-related conditions ',
          'Refer patients to ophthalmologists and other specialists ',
          'Take detailed medical histories for patients ',
          'Advise patients about proper eye care practices '
        ]
      },
      {
        role: 'Optician',
        li: [
          'Determine the correct fit for glasses and lenses: To ensure that eyewear fits correctly, opticians measure the width of customers’ faces and the distance between their pupils.',
          'Advise customers about choosing frames and lenses: Opticians help customers select frames and contact lenses that work with their prescriptions, fit comfortably and meet their lifestyle preferences. Many opticians make sales suggestions as they advise customers about advanced features, such as tints and coatings.',
          'Transmit orders to lab technicians: Once opticians have helped customers choose eyewear and determined appropriate fits, they send orders to ophthalmic laboratory technicians to complete. These orders generally include the frame or lens type, the fit measurements and the prescription.',
          'Adjust and repair eyewear: After providing customers with their new eyewear, opticians often adjust frames to achieve the optimal fit. They also repair broken frames or advise customers about replacing damaged eyeglasses.',
          'Educate customers about their purchases: Opticians also inform customers about their eyewear to help them get maximum wear out of their purchases. They show them how to clean eyeglasses and how to store and sanitize contact lenses.'
        ]
      },
      {
        role: 'Ophthalmologist',
        li: [
          'Evaluate eye-related health symptoms',
          'Perform surgery to correct vision problems ',
          'Prescribe eyeglasses and contact lenses',
          'Provide outpatient care for those with eye-related conditions ',
          'Take detailed medical histories for patients ',
          'Advise patients about proper eye care practices '
        ]
      },
      {
        role: 'Operations-Coordinator',
        li: [
          'Offer clerical support to all operations and manage team members',
          'Communicate directly with customers in setting appointments, improving their experience and resolving conflict',
          'Onboard new employees and train them in their appropriate department',
          'Improve operations efficiency',
          'Coordinate all office and staff events'
        ]
      },
      {
        role: 'Operations-Analyst',
        li: [
          'Identify operational problems. Operations analysts usually begin by talking with stakeholders about potential concerns and identifying the source of the issue. These operational problems can range from cost and staffing issues to supply chain and production concerns.',
          'Use models to research issues. To resolve the issues they identify, operations analysts use a variety of modeling strategies. They collect information from employees and internal tools, and they use software programs for statistical modeling and data analysis. During this research phase, operations analysts often forecast the results of multiple solutions before determining the most effective option.',
          'Recommend solutions. After researching operational issues, operations analysts prepare reports and presentations to demonstrate their recommended solutions. They often assist with implementing these solutions and monitoring their results, too.',
          'Collaborate with colleagues. Because they handle such complex problems, operations analysts often work on teams. They usually collaborate with other analysts, researchers and project managers as they research, model and implement solutions.'
        ]
      },
      {
        role: 'Oncologist',
        li: [
          'Examining patients for signs of cancer and discussing symptoms with them',
          'Ordering medical tests like blood tests and biopsies and analyzing their results',
          'Explaining cancer and its treatment options with patients and developing personalized cancer treatment plans',
          'Administering chemotherapy or radiotherapy or performing surgery to remove cancerous tumors',
          'Monitoring progress of patients during their cancer treatment and recovery, making any adjustments required during these periods',
          'Helping patients manage cancer and treatment side effects'
        ]
      },
      {
        role: 'Office-Coordinator',
        li: [
          'Developing efficient office procedures for filing documents, tracking expenses, paying suppliers and other tasks',
          'Monitoring stock levels for the office and submitting purchase orders to management when supplies are low',
          'Greeting customers visiting and calling the office, directing their questions to the appropriate staff',
          'Managing conference and meeting room schedules for executive staff',
          'Preparing and distributing company-wide correspondence in paper and online formats',
          'Planning and coordinating social events and travel for business'
        ]
      },
      {
        role: 'Office-Clerk',
        li: [
          'Performing basic bookkeeping and banking transactions.',
          'Preparing agendas for meetings, attending meetings and taking minutes.',
          'Operating and maintaining office equipment such as computers, printers, copiers and fax machines. Troubleshooting technical problems with office equipment and placing service calls as needed.',
          'Directing phone calls to appropriate staff members and taking messages.',
          'Communicating with coworkers to answer client inquiries and respond to issues or complaints via phone or email.',
          'Keeping an inventory of office supplies and reordering supplies as needed.'
        ]
      },
      {
        role: 'Office-Assistant',
        li: [
          'Answering phone calls, emails and other written communications in a timely manner',
          'Ordering, monitoring, distributing and restocking office supplies',
          'Designing and implementing essential organizational systems',
          'Record keeping of meeting notes, agendas and other key documents',
          'Data entry, accounts payable or light accounting duties',
          'Organizing the daily schedule and travel arrangements for office staff and leaders'
        ]
      },
      {
        role: 'Office-Administrator',
        li: [
          'Overseeing administrative functions and supervising other members of the administrative staff',
          'Greeting clients, answering phones and replying to client emails',
          'Operating and maintaining office equipment such as copy machines, fax machines and computers',
          'Conducting research and compiling reports for supervisors and other employees',
          'Scheduling meetings and events, and organizing any necessary materials for them',
          'Assisting human resources with hiring and onboarding new employees'
        ]
      },
      {
        role: 'Occupational-Therapy-Assistant',
        li: [
          'Moving and repositioning bedridden patients',
          'Explaining and demonstrating exercises ',
          'Preparing reports and patient notes',
          'Abiding by ethical and confidentiality regulations'
        ]
      },
      {
        role: 'Occupational-Therapist-Assistant',
        li: [
          'Helping patients perform different tasks.',
          'Teaching patients how to use special equipment to aid them in daily life.',
          'Recording a patient’s progress and reporting to an occupational therapist',
          'Assisting children with disabilities in play activities that help coordination. '
        ]
      },
      {
        role: 'Occupational-Therapist',
        li: [
          'Evaluate patients: To understand patients’ needs, occupational therapists review medical histories and observe patients performing everyday activities.',
          'Design treatment plans: Occupational therapists develop treatments that include activities to perform, methods to use and goals to reach.',
          'Assist with activities and exercises: Most occupational therapists show patients how to perform activities, and some guide patients through exercises by manipulating their limbs or bodies.',
          'Recommend improvements: To help patients increase their skills, occupational therapists often suggest ways to improve their home or work environments. Improvements may include rearranging rooms, adding labels or purchasing specialized equipment and technology.',
          'Collaborate with families and caregivers: Most occupational therapists work closely with patients’ families and caregivers, especially when assisting pediatric or elderly patients. These professionals may review treatment plans or share progress reports with families.',
          'Monitor patient progress: To ensure that their patients are improving successfully, occupational therapists monitor their progress closely. They often use handheld devices and computers to track data and goals.'
        ]
      },
      {
        role: 'Obstetrician',
        li: [
          'Meeting with patients for monitoring during the pregnancy, labor and postpartum stages',
          'Conducting timely interventions like episiotomies, assisted delivery or induced labor and cesarean deliveries',
          'Overseeing the childbirth process and leading nurses and other medical personnel assisting the delivery',
          'Performing corrective and preventative surgeries, such as hysterectomies, those that repair the female reproductive organs and those that remove harmful growths',
          'Diagnosing female reproductive conditions, polycystic ovary syndrome, endometriosis and others',
          'Ordering additional testing or referring patients to specialists for treatment on medical conditions impacting the reproductive system, including cancer screenings',
          'Conducting fertility treatments and providing resources and guidance to patients and their partners'
        ]
      },
      {
        role: 'OB-GYN',
        li: [
          'Screening for health issues such as sexually transmitted diseases or reproductive disorders',
          'Ordering tests, reviewing results and recommending treatment plans',
          'Discussing family planning and providing both pre-and post-natal care',
          'Performing delivery procedures, including surgery',
          'Answering patient questions and discussing health concerns',
          'Reviewing patient history and updating medical records as necessary'
        ]
      },
      {
        role: 'Nutritionist',
        li: [
          'Assessing a patient’s health status, including weight, blood pressure and body mass index',
          'Establishing health and wellness goals with each patient ',
          'Creating individualized diet plans to treat specific needs',
          'Educating patients on the correct amounts of nutrients and calorie consumption recommendations',
          'Creating specialized meal plans and educational materials, such as recipes and nutrition guides',
          'Tracking and documenting a patient’s progress',
          'Adjusting or updating patient goals and diet plans as needed'
        ]
      },
      {
        role: 'Nursing-Assistant',
        li: [
          'Monitoring patient health and vital signs',
          'Reporting all changes or important observations to the nurse',
          'Keeping patient documentation up to date and taking medical histories',
          'Toileting assistance and care of catheters',
          'Making beds and changing bedding',
          'Helping the patient get dressed',
          'Bathing, showering and teeth cleaning',
          'Feeding and helping the patient drink',
          'Turning bedridden patients on a schedule',
          'Guiding the patient with exercises'
        ]
      },
      {
        role: 'Nurse-Practitioner',
        li: [
          'Performing patient screenings, reviewing their medical history and conducting physical examinations',
          'Verifying patient medical records for accuracy during appointments and updating the records as necessary',
          'Analyzing test results, identifying the appropriate treatment options and determining the need for a follow-up appointment',
          'Serving as a patient resource for information, counseling and guidance',
          'Consult with physicians and other health care professionals as necessary'
        ]
      },
      {
        role: 'Nurse-Informaticist',
        li: [
          'Contributing to the national database of healthcare information',
          'Maintaining electronic medical records',
          'Researching new methods to improve patient care',
          'Advancing the use of information technologies within their workplace',
          'Improving communication in the workplace by ensuring the accuracy of patient data'
        ]
      },
      {
        role: 'Nurse-Educator',
        li: [
          'Develop course curriculum for nursing students',
          'Mentor and consult with aspiring nurses',
          'Create and oversee continuing education courses for current nurses',
          'Monitor and oversee nursing residencies and practicums',
          'Evaluate students on their nursing knowledge'
        ]
      },
      {
        role: 'Nurse-Anesthetist',
        li: [
          'Evaluating the patient and determining the best anesthetic plan based on allergies, sensitivities and other relevant healthcare factors',
          'Prepping an operating room, making sure the right equipment for surgery and/or any procedure that takes place there',
          'Advising the patient of the process before and after anesthesia is administered',
          'Administering anesthesia to the patient',
          'Monitoring the patient’s vitals during and after the procedure',
          'Communicating with physicians, nurses or other medical staff before, during and after procedures to ensure adequate patient care'
        ]
      },
      {
        role: 'Nurse',
        li: [
          'Monitoring and observing patient health and vital signs ',
          'Performing diagnostic tests',
          'Operating medical devices',
          'Dispensing medications and treatments as necessary',
          'Taking medical histories from patients',
          'Providing advice and education about health and well-being and how to manage illnesses',
          'Creating plans for patient care in collaboration with the medical team',
          'Assisting doctors in performing medical procedures'
        ]
      },
      {
        role: 'Nuclear-Engineer',
        li: [
          'Develop nuclear equipment including radiation shielding and reactor cores',
          'Operation and maintenance of a nuclear power plant and ensuring safety standards are being met',
          'Design instructions on how to properly dispose of nuclear waste in a power plant operation',
          'Perform tests on nuclear materials and their use, including disposal of nuclear waste and reclamation of nuclear fuel',
          'Design preventative measures to ensure safety where nuclear energy and radiation are used'
        ]
      },
      {
        role: 'Night-Auditor',
        li: [
          'Greeting and checking in guests upon arrival and providing them with relevant hotel information ',
          'Auditing and balancing reports from the day shifts',
          'Answering phones, scheduling wake-up calls and taking reservations',
          'Verifying that all end-of-day tasks have been completed by other departments',
          'Responding to guest inquiries, concerns and complaints as needed',
          'Running end-of-day reports before the close of the shift',
          'Preparing guest invoices for next-day checkouts ',
          'Processing and verifying reservation payments',
          'Balancing cash drawers and reconciling with receipts',
          'Supervising and managing the hotel safe, ensuring the safety of guests’ valuables',
          'Communicating with maintenance and housekeeping departments to ensure reliability and cleanliness of hotel amenities',
          'Acting as concierge by making reservations for guests at local restaurants, entertainment venues or other local attractions and arranging for taxi or shuttle services, offering helpful recommendations when asked',
          'Providing information about rooms, rates and hotel amenities',
          'Answering calls from hotel guests and documenting the details of each call for later reference',
          'Up-selling guest rooms and promoting hotel features and services'
        ]
      },
      {
        role: 'News-Anchor',
        li: [
          'Researching news stories',
          'Pitching story ideas to supervisors',
          'Scheduling and conducting interviews to gain information or opinions about a story',
          'Providing news and story updates as more information becomes available',
          'Choosing which stories to air and organizing them in a logical order',
          'Writing scripts to read on-air',
          'Collaborating with field reporters during live broadcasts',
          'Collaborating with photographers, videographers, writers and editors to produce a story',
          'Participating in daily news briefings with the news director, reporters and other staff',
          'Establishing a social media presence and using it to engage with the audience',
          'Maintaining a network of industry contacts'
        ]
      },
      {
        role: 'Neurosurgeon',
        li: [
          'Meeting with patients to discuss symptoms',
          'Ordering tests to assist in diagnoses, such as MRIs, biopsies and CT scans',
          'Performing medical procedures that can last several hours',
          'Using special medical equipment in a sterile environment',
          'Working closely with a surgical team to provide the best care for patients'
        ]
      },
      {
        role: 'Neuropsychologist',
        li: [
          'Conduct research to better understand the psychological component behind neurological disorders',
          'Administer tests to diagnose a neurological disorder',
          'Collaborate with other medical professionals to create a treatment plan',
          'Assist patients with the rehabilitation of cognitive functions following a brain injury',
          'Determine the cause of neurological symptoms'
        ]
      },
      {
        role: 'Neurologist',
        li: [
          'Counsel patients on their medical history and any neurological disorders they are experiencing',
          'Order neurological tests for patients and interpret the results of neuroimaging studies',
          'Prescribe and/or administer medication and other forms of treatment. Monitor the behavioral and cognitive impact of any medication or treatment prescribed to patients',
          'Order supportive services to care for patients and their needs throughout management or treatment of their condition',
          'Maintain an up-to-date understanding of the ever-changing treatments and approaches in neuroscience. Take part in research activities to contribute to the growing knowledge about various management and treatment techniques',
          'Interact with other medical professionals, hospitals and community boards to share and garner knowledge relevant to specific conditions and cases',
          'Research and understand the fields that explore how neuroscience relates to the immune system (neuroimmunology), brain and spinal cord neoplasms (neuro-oncology), behavior, memory, cognition (behavioral neurology) and human genetics (neurogenetics)'
        ]
      },
      {
        role: 'Network-Technician',
        li: [
          'Troubleshooting computer software and hardware issues, making repairs and performing scheduled updates',
          'Partnering with the IT team to ensure that the software is correctly installed and launching and employee computers',
          'Provide technical support for clients and end-users through various lines of communication, including phones and live chat support',
          'Securing the computer’s computer network against cyber-attacks, which includes installing antivirus software and ensuring it is regularly updated',
          'Educating employees on different facets of the network and briefing senior management on possible causes and solutions of problems',
          'Selecting the best equipment and programs for a company and requesting new equipment if what’s being currently used becomes unreliable'
        ]
      },
      {
        role: 'Network-Engineer',
        li: [
          'Maintaining computer networks and all associated systems including software, hardware and applications',
          'Maintaining firewalls, updating virus protection software, implementing data security systems and performing data backups to protect important information',
          'Installing and configuring network equipment such as routers, switches, load balancers, VPNs, WAN accelerators and proxy servers',
          'Performing ongoing monitoring and troubleshooting to find innovative ways to improve network performance',
          'Conducting regular maintenance tasks such as scheduling updates, performing network upgrades, managing security configurations and installing patches or service packs',
          'Collaborating with third-party support services and service providers to ensure networks are operating optimally'
        ]
      },
      {
        role: 'Network-Administrator',
        li: [
          'Working closely with departmental managers to determine future network needs and plan for network changes',
          'Develop methods and tools to be used to test and implement new LAN/WAN equipment',
          'Creating projects that are designed to either add functionality required by the company or address network failure issues',
          'Engaging in regular network troubleshooting activities and resolving network connectivity issues',
          'Analyzing the network structure and submitting quarterly comprehensive reports to the executive team for increasing efficiencies'
        ]
      },
      {
        role: 'Neonatologist',
        li: [
          'Assisting during high-risk births',
          'Care, medication and treatment of an infant born with a medical condition',
          'Use of specialized equipment to support babies in the NICU',
          'Empathy and support of parents of newborns',
          'Clinical research, teaching and follow-up of newborn cases'
        ]
      },
      {
        role: 'Neonatal-Nurse',
        li: [
          'Attending deliveries to assist the doctor and/or mother during the birthing process',
          'Providing basic care to infants after birth by weighing and measuring infants, bathing them and monitoring their condition',
          'Monitoring infants and providing specialized care after birth, including starting and maintaining IV lines, managing ventilators and assessing vital signs',
          'Assisting doctors in the NICU with intensive care procedures using specialized equipment such as incubators, ventilators, surgery and other support equipment',
          'Teaching new parents about caring for their newborn and helping mothers learn to breastfeed'
        ]
      },
      { role: 'MRI-Technician', li: [
          'Injecting a special dye into the patient that allows the images to appear on the scanner',
          'Maintaining the imaging equipment',
          'Taking patients’ medical histories and keeping records up to date',
          'Explaining the procedure to patients and answering questions',
          'Preparing and positioning patients for scans',
          'Using proper safety methods',
          'Operating the MRI equipment under the doctor’s instruction and supervision to image parts of the body',
          'Working with doctors and radiologists to read images'
      ] },
      {
        role: 'Mortgage-Broker',
        li: [
          'Establishing professional relationships with mortgage lenders to recommend them to clients',
          'Gathering documents, credit history and employment verification for prospective homebuyers',
          'Applying for mortgage loans with established lenders on behalf of the borrower',
          'Comparing lender fees such as interest rates and closing costs to present options to the borrower',
          'Advising clients on their options and clearly explaining the legal and repayment details of any available loan',
          'Ensuring loans are compliant with all relevant regulations and laws',
          'Completing all closing paperwork with the lender, title company, insurance broker and any other relevant agency'
        ]
      },
      {
        role: 'Millwright',
        li: [
          'Reading and interpreting schematics, diagrams, service manuals and blueprints for machinery and equipment',
          'Dismantling, categorizing and storing or moving equipment when it is no longer needed in an area',
          'Assembling, balancing and calibrating new machinery to prepare it for safe operation ',
          'Inspecting machinery and performing the appropriate repairs or preventative maintenance to keep equipment in good working order, such as fitting bearings, adjusting belts and aligning gears',
          'Following appropriate safety procedures and protocols to prevent workplace hazards',
          'Using equipment ranging from cranes, hoists, trucks and backhoes to engine lathes, hand tools, welding equipment, calipers, micrometers, gauges and scales'
        ]
      },
      {
        role: 'Midwife',
        li: [
          'Advising pregnant patients on prenatal care, including diet, exercise and supplements',
          'Providing emotional support for expecting parents, especially during labor',
          'Establishing birth plans, including preparing the birth space',
          'Consulting with obstetricians, gynecologists and other medical professionals',
          'Ordering medical tests as necessary',
          'Guiding female patients during labor with a focus on a safe, comfortable experience',
          'Assisting new parents with infant care during the baby’s first 28 days of life',
          'Instructing new parents on feeding and swaddling methods',
          'Educating patients in a variety of ages on family planning and disease prevention'
        ]
      },
      {
        role: 'Merchandiser',
        li: [
          'Monitoring warehouse inventory levels and submitting comprehensive inventory reports',
          'Communicating customer problems to the company and addressing customer issues',
          'Assisting in the creation of an organized warehouse environment to enable product accessibility',
          'Stocking shelves and displays on the sales floor where additional inventory management assistance is required',
          'Working to create attractive sales floor displays that prominently feature relevant products and sales'
        ]
      },
      {
        role: 'Mental-Health-Counselor',
        li: [
          'Encouraging patients to talk about their experiences and feelings',
          'Diagnosing and treating various mental wellness issues',
          'Maintaining an accurate record of the care given to the patient',
          'Working with patients to define life goals and plan for the future',
          'Helping patients develop coping skills for difficult situations',
          'Referring patients to psychologists or social workers when necessary'
        ]
      },
      {
        role: 'Medical-Transcriber',
        li: [
          'Transcribe recordings: These healthcare professionals listen to a doctor’s recorded notes and convert them into written reports. They are responsible for performing accurate transcriptions that include all essential information and convey the doctor’s statements correctly.',
          'Use speech recognition software: Many medical transcribers edit and update drafts produced by speech recognition software programs. They listen to doctors’ recordings and correct the drafts for grammar and context.',
          'Translate medical terms and abbreviations: Medical transcribers work with a variety of recordings, including patient histories, discharge and examination notes and doctor referral letters. They often have to translate medical abbreviations and jargon into complete words.',
          'Check reports for irregularities: After completing transcriptions, these health care professionals review their reports for errors and omissions. ',
          'Update electronic health records: Many medical transcribers input their written reports into patients’ EHRs. These notes become part of patients’ permanent health records.',
          'Understand patient confidentiality requirements: Because medical transcribers work with personal information, they must understand and abide by relevant legal and confidentiality requirements. They are responsible for keeping their reports private and secure.'
        ]
      },
      {
        role: 'Medical-Technologist',
        li: [
          'Verify that the test result matches the given specimen',
          'Perform tests on fluids, tissue and blood',
          'Collaborate with laboratory supervisors or physicians while working with patient data',
          'Determine the cell count, chemical content, blood type or drug levels in a given specimen',
          'Search for the presence of certain microorganisms, parasites or bacteria in a given specimen'
        ]
      },
      {
        role: 'Medical-Technician',
        li: [
          'Organizing and sanitizing the lab in preparation for collection and testing ',
          'Understanding and using sensitive and complicated testing equipment, including computers, microscopes, cell counters, analyzers and centrifuges',
          'Receiving and cataloging medical samples for testing, with attention to organizational systems and privacy and safety regulations',
          'Preparing specimens for testing',
          'Performing specialized tasks such as phlebotomy, urinalysis or blood typing',
          'Drawing blood for testing or donation',
          'Assisting physicians with equipment in surgical rooms and sample collection for medical testing'
        ]
      },
      {
        role: 'Medical-Secretary',
        li: [
          'Interact with patients daily in person, over the phone and through text communication',
          'Manage appointments and ensure that doctors have ample time for each patient ',
          'Manage files and records, both on paper and digitally, to provide easy access when required',
          'Oversee finances of the facility, including both payments from patients and insurers and those made by the facility to outside vendors.',
          'Handle sensitive medical information with care while respecting all state and federal laws and regulations regarding patient privacy'
        ]
      },
      {
        role: 'Medical-Scribe',
        li: [
          'Watching for incoming tests and notifying the physician when the results are available',
          'Entering medical records into a portal, such as the Electronic Health Record (EHR)',
          'Helping with the electronic prescribing of medicine',
          'Assisting the physician with fundamental patient care',
          'Helping with the training of newly hired medical scribes'
        ]
      },
      {
        role: 'Medical-Records-Clerk',
        li: [
          'File important documents such as X-rays, medical records and slips ',
          'Process admission and discharge records ',
          'Supply nursing staff with forms and documents ',
          'Maintain patient files and face sheets ',
          'Maintain strict confidentiality ',
          'Review records for policy compliance',
          'Create digital images of paperwork '
        ]
      },
      {
        role: 'Medical-Receptionist',
        li: [
          'Call patients to remind them of upcoming appointments ',
          'Process patient information in a computer or filing system',
          'Process payments from patients ',
          'Provide patients with intake forms and answer any questions they might have',
          'Answer multi-line phones and direct calls to the appropriate departments ',
          'Transcribe physician notes'
        ]
      },
      {
        role: 'Medical-Office-Assistant',
        li: [
          'Answering the telephone',
          'Updating patient records',
          'Replying to and sending emails ',
          'Keeping the reception area and front desk presentable',
          'Supervising medical supply deliveries and inventory',
          'Performing general accounting and billing services',
          'Arranging hospital stays for patients',
          'Helping doctors or nurses with patient examinations'
        ]
      },
      {
        role: 'Medical-Examiner',
        li: [
          'Evaluating bodies and crime scene photographs, toxicology reports, laboratory reports, police reports and past medical evidence to determine the probable cause of death, who died and when',
          'Collecting samples of bodily fluids, photographs and other evidence of the deceased and the crime scene',
          'Performing medical tests, including X-rays, CT scans and toxicology tests',
          'Reporting autopsy findings',
          'Preparing death certificates',
          'Communicating autopsy findings to law enforcement and the deceased’s loved ones',
          'Sharing autopsy findings and theories about violent and otherwise suspicious deaths as expert witnesses in court cases'
        ]
      },
      {
        role: 'Medical-Coder',
        li: [
          'Collaborating with the billing department to ensure all bills are satisfied on time',
          'Communicating with insurance companies regarding any coding errors and disputes',
          'Submitting statistical data for analysis and research by other departments',
          'Contacting physicians and other healthcare professionals with questions about diagnostic test and treatments given to patients, concerning coding procedures'
        ]
      },
      {
        role: 'Medical-Biller',
        li: [
          'Creating invoices based on filing codes assigned to medical procedures',
          'Submitting claims to insurance companies electronically and via mail',
          'Sending invoices to patients for remaining balances after insurance payouts',
          'Communicating with insurance company representatives to track payments and confirm patient coverage information',
          'Investigating denied claims and outstanding patient invoices to ensure the provider receives payment',
          'Managing patient payments and updating information over the phone and in person',
          'Balancing sent claims and payments received to accurately record the provider’s monthly and quarterly earnings'
        ]
      },
      {
        role: 'Medical-Assistant',
        li: [
          'Filling out billing and patient forms',
          'Evaluating samples taken from patients',
          'Administering patient refills of prescriptions',
          'Performing exams on an as-needed basis'
        ]
      },
      {
        role: 'Mechanical-Engineer',
        li: [
          'Studying various issues and determining how mechanical and thermal devices can act as solutions for those issues',
          'Analyzing equipment malfunctions, identifying the faulty operations and recommending solutions',
          'Designing mechanical and thermal devices that are suitable for particular tasks, using computer design software',
          'Using the created designs to develop prototypes',
          'Continuously testing mechanical and thermal devices and adjusting their parameters according to the test results',
          'Supervising the entire manufacturing process of any thermal or mechanical device, from early planning to full functionality'
        ]
      },
      {
        role: 'Mechanic',
        li: [
          'Operate diagnostic equipment to identify problems with a vehicle',
          'Discuss repair costs and plans with customers',
          'Repair mechanical problems with the transmission, brakes, electronics and engine',
          'Evaluate the condition and safety of each repair',
          'Complete preventative maintenance on vehicles'
        ]
      },
      { role: 'Material-Handler', li: [
          'Receiving and processing new shipments of materials and goods',
          'Maintaining an inventory and keeping a database of the locations of all materials',
          'Filling client orders',
          'Maintaining accurate documentation for all materials shipped',
          'Using computerized scales to count and weigh goods',
          'Safely operating mechanical tools, including clamp trunks, manual jacks, lift trucks and dollies',
          'Ensuring equipment is inspected and facilitating repairs if necessary.'
      ] },
      {
        role: 'Massage-Therapist',
        li: [
          'Talking with clients about medical history, symptoms and desired results',
          'Assessing clients to identify painful or tense areas of the body',
          'Maintaining treatment records',
          'Treating clients in professional settings or traveling to clients’ homes and offices',
          'Providing clients with information and guidance about techniques for postural improvement and relaxation, strengthening, stretching and rehabilitative exercises',
          'Consulting with other professionals, such as psychologists, physicians, chiropractors and physiotherapists, to develop treatment plans for clients'
        ]
      },
      {
        role: 'Marketing-Specialist',
        li: [
          'Manage the company websites and social media accounts',
          'Ensure consistent branding across digital and traditional channels ',
          'Work closely with the sales team to develop effective campaigns ',
          'Lead generation ',
          'Competitive analysis'
        ]
      },
      {
        role: 'Marketing-Intern',
        li: [
          'Research current market trends',
          'Identify ways to improve the company’s marketing efforts',
          'Manage the companies’ social media accounts and engage with followers',
          'Write content for marketing materials',
          'Meet with the marketing manager to discuss upcoming events'
        ]
      },
      {
        role: 'Marketing-Coordinator',
        li: [
          'Create and maintain creatives for marketing materials',
          'Coordinate meetings with marketing partners and executive team members',
          'Update and gather marketing sales and trends reports',
          'Attend team meetings to discuss upcoming sales goals and objectives',
          'Monitor marketing trends and company social media accounts'
        ]
      },
      {
        role: 'Marketing-Assistant',
        li: [
          'Monitoring active marketing campaigns, making improvements as needed',
          'Brainstorm ideas for campaigns designed to enhance brand recognition and loyalty',
          'Work closely with artistic departments to create digital and physical marketing deliverables ',
          'Collaborate with the marketing team to produce innovative methods of gaining exposure for client brands',
          'Assist marketing team with completing projects'
        ]
      },
      {
        role: 'Manufacturing-Engineer',
        li: [
          'Studying existing manufacturing processes and identifying strengths and weaknesses',
          'Identifying potential improvements in product design and assembly line processes',
          'Designing new systems for a product, including the design of entire factories',
          'Creating protocols to improve optimization of the product line, in technical and budgetary aspects',
          'Designing new products ',
          'Working with design teams to create prototypes',
          'Working with financial and marketing teams to provide them with information that will affect pricing and advertising decisions',
          'Assisting with inventory control',
          'Managing the procurement process for raw materials'
        ]
      },
      {
        role: 'Makeup-Artist',
        li: [
          'Preparing individuals for photo shoots by applying makeup',
          'Consulting with clients about how to apply their makeup',
          'Emphasizing certain physical features of clients through the application of cosmetics',
          'Applying cosmetic products on actors for theatrical or film productions ',
          'Using creative and analytical skills to determine what products will look best on individuals'
        ]
      },
      {
        role: 'Maintenance-Technician',
        li: [
          'Communicating daily with a facility’s management about issues in the building ',
          'Responding to building occupants’ requests for service and maintenance',
          'Evaluating and repairing any plumbing not in good working order',
          'Making sure that electrical systems are in safe and working condition',
          'Cleaning and performing routine maintenance on HVAC systems ',
          'Staying current on safety measures for fire, carbon monoxide and other alarms',
          'Working with and maintaining tools and equipment necessary to perform work duties',
          'Helping evacuate the building or facility in case of an emergency',
          'Painting and fixing up parts of the building or facility that may be in disrepair',
          'Contacting outside experts if required to handle more specialized jobs'
        ]
      },
      {
        role: 'Machine-Operator',
        li: [
          'Milling and planing machine operators',
          'Injection mold machine operators',
          'Drilling and boring machine operators',
          'Rolling machine operators',
          'Packing machine operators',
          'Moving machine operators',
          'Construction machine operators '
        ]
      },
      {
        role: 'Logistics-Specialist-Coordinator',
        li: [
          'Overseeing the shipping and receiving process in a warehouse',
          'Day-to-day management of the warehouse, inventory control, transportation and scheduling',
          'Monitoring the transportation process from beginning to end to continually improve the movement of goods',
          'Some roles may require data analysis to identify the most efficient and cost-effective method of moving goods'
        ]
      },
      {
        role: 'Logistics-Coordinator',
        li: [
          'Managing the maintenance, preparation and routing of purchase orders',
          'Preparing accurate bills of lading and satisfying airbills in a timely manner',
          'Reviewing purchase orders and shipment contents prior to releasing them from the facilities',
          'Responding to customer inquiries and referring clients to the appropriate channels',
          'Communicating with van lines and airlines to ensure prompt pick-up and delivery of shipments',
          'Ensuring the quality of all processes and services within a facility'
        ]
      },
      {
        role: 'Lobbyist',
        li: [
          'Conducting public relations exercises like preparing press releases, appearing in news conferences and drafting brochures on behalf of clients',
          'Assisting in drafting legislation',
          'Leading or coordinating activities of community movements',
          'Fundraising for popular causes',
          'Promoting corporate investment activities like acquisitions and mergers',
          'Acting as liaisons between associations and their membership'
        ]
      },
      {
        role: 'Loan-Processor',
        li: [
          'Collecting and organizing the required documentation and place it in a file for submission to the underwriter',
          'Making sure all conditions are satisfied with the underwriter',
          'Communicating with the title company, county clerk, attorneys or other professionals as required',
          'Making sure the approval is within lending guidelines'
        ]
      },
      {
        role: 'Loan-Officer',
        li: [
          'Meeting with customers to determine their needs and recommending loan products to meet their needs',
          'Maintaining an active knowledge of the organization’s loan products and the qualifications required',
          'Reviewing active loans to determine if any documents are missing and whether anything can be done to speed up the process for each customer',
          'Utilizing professional opinion to determine whether a potential borrower is a good risk for the organization '
        ]
      },
      {
        role: 'Line-Cook',
        li: [
          'Preparing food before meal service begins, including chopping vegetables, breaking down meat into serving sizes, making sauces and dividing herbs',
          'Setting up and stocking kitchen stations',
          'Cooking assigned foods during restaurant service, complying with senior chefs’ instructions and recommendations',
          'Plating cooked foods',
          'Keeping food stations clean and organized',
          'Complying with mandatory food safety standards and regulations'
        ]
      },
      {
        role: 'Lifeguard',
        li: [
          'Keep the pool, beach or other areas clean and free of debris',
          'Open and close the facility to visitors',
          'Conduct light administrative duties',
          'Oversee swimmers, lead swim lessons and coach swim teams',
          'Monitor weather reports and direct swimmers out of the area in the case of danger',
          'Regularly treat the pool with the appropriate chemicals '
        ]
      },
      {
        role: 'Life-Coach',
        li: [
          'Promoting a more balanced life or fruitful career through frequent meetings, continuous encouragement and objective support',
          'Meeting with clients one-on-one, over the phone or via video chat to discuss events and progress since their last appointment',
          'Collaborating with clients on setting short- and long-term goals related to their personal lives or career',
          'Providing clients with personality assessments to better tailor their coaching and allow clients to better understand themselves',
          'Helping clients analyze thoughts, emotions, reactions and actions to find areas that they can better align with their goals',
          'Assisting clients in developing skills and qualities, such as communication, leadership, reliability and confidence',
          'Encouraging clients as they work toward goals, making progress and adjusting methods as needed'
        ]
      },
      { role: 'Licensed-Practical-Nurse-(LPN)', li: [
          'Providing routine care for patients during visitations',
          'Assisting doctors and registered nurses in the administration of treatment plans and performance of health checks and diagnosis',
          'Observing patients and making notes of any potential areas to discuss with a doctor',
          'Communicating with patients and their families to provide a more thorough understanding of their treatment plans'
      ] },
      {
        role: 'Librarian',
        li: [
          'Managing books, periodicals, audio and video recordings and digital resources including cataloguing, organization and storage',
          'Aiding individuals with research, including locating appropriate databases or books and overseeing the use of those materials',
          'Ordering subscriptions and other materials to keep libraries stocked and updated',
          'Managing specialized documents, records and manuscripts',
          'Maintaining library systems, including databases and digital and physical methods of organization and record-keeping',
          'Advocating education and literacy and assisting with reading programs for children or adults',
          'Overseeing or directing support staff'
        ]
      },
      {
        role: 'Legal-Secretary',
        li: [
          'Preparing correspondence to various parties',
          'Transcribing and proofreading legal documents, including briefs, motions, pleadings and subpoenas',
          'Maintaining docket control systems to track legal filing deadlines',
          'Creating and populating spreadsheets',
          'Updating and indexing pleadings and discovery binders',
          'Scheduling meetings, closing, hearings, site inspections and depositions',
          'Drafting correspondence and routine legal documents, such as legal invoices and deposition notices',
          'Assisting legal research and communicating with lawyers, experts, vendors, opposing counsel and other staff'
        ]
      },
      {
        role: 'Legal-Nurse-Consultant',
        li: [
          'Using their knowledge and expertise to ensure that patients received quality care in a legal situation',
          'Reviewing, researching, and interpreting medical records to provide insight to a legal team',
          'Having a current and thorough understanding of healthcare standards ',
          'Acting as a liaison between medical facilities, insurance companies and the court',
          'Testifying as an expert witness during court proceedings'
        ]
      },
      {
        role: 'Legal-Assistant',
        li: [
          'Performing basic administrative and customer service tasks, such as answering phone calls, responding to emails and greeting clients',
          'Keeping all legal documents or correspondence organized and up to date',
          'Gathering all documents, statements and evidence a lawyer will need for trail',
          'Providing help during a trial',
          'Creating drafts of contracts, letters and other legal documents',
          'Scheduling meetings, appointments and interviews with clients, lawyers, witnesses and more.',
          'Performing accounting and billing duties'
        ]
      },
      {
        role: 'Leasing-Consultant',
        li: [
          'Responding to prospective tenant inquiries for the rental property through digital platforms and in-person',
          'Showing the property, answering tenant questions and negotiating lease terms',
          'Establishing expectations for an initial security deposit, monthly rent procedures and building amenities included in the lease agreement',
          'Processing tenant background information, including a completed lease application, income verification, rental history and reference letters, if applicable',
          'Ensuring proper execution of all lease terms in accordance with legal requirements and taking necessary steps in cases of tenant default',
          'Responding to tenant maintenance issues in a timely manner, ensuring full resolution of the complaint'
        ]
      },
      {
        role: 'Leasing-Agent',
        li: [
          'Meet with prospective tenants, take them on tours of the units they are interested in and highlight the benefits of the units and property.',
          'Prepare and execute lease documents according to property standards and regulations. ',
          'Conduct credit and background checks to qualify potential tenants. ',
          'Confirm information and references provided by potential tenants on the application. ',
          'Collect application fees and security deposits from potential tenants and monthly rental payments from existing tenants. ',
          'Coordinate any necessary property maintenance. ',
          'Inform residents of any changes to their rental agreement or upcoming events or issues associated with the property. ',
          'Create marketing and promotional materials to advertise vacant units on their property.',
          'Monitor the use of community facilities and common areas including the office, pool, laundry, mail and fitness centers. '
        ]
      },
      { role: 'Lead-Teacher', li: [

      ] },
      {
        role: 'Lawyer',
        li: [
          'Working with paralegals, investigators, police and clients to prepare comprehensive cases for mediations and trials, including preparing legal documents and collecting evidence',
          'Attending hearings, trials and other legal meetings with clients',
          'Scheduling and administering full depositions of case witnesses and relevant experts',
          'Interpreting laws, regulations and rulings for clients and informing them of their legal rights',
          'Preparing legal documents for clients, including wills, business contracts and divorce agreements',
          'Reviewing discovery documents and determining the best legal action for each client'
        ]
      },
      {
        role: 'Law-Clerk',
        li: [
          'Researching laws and legal precedents from past cases to guide a judge’s or lawyer’s decisions about current cases',
          'Advising the judge and other legal team members of case facts before oral arguments',
          'Managing evidence, taking statements from witnesses and providing additional assistance to judges during courtroom proceedings as requested',
          'Drafting legal documents, including records of legal proceedings and trial briefs',
          'Delivering subpoenas to witnesses and experts',
          'Maintaining the chamber’s library if working in a courtroom setting'
        ]
      },
      {
        role: 'Landscape-Architect',
        li: [
          'Meeting with clients to discuss projects and goals',
          'Drawing designs and creating site plans and models',
          'Putting together specifications and cost estimates',
          'Collaborating with engineers, surveyors, architects, contractors, laborers and other professionals',
          'Using software and Geographic Information Systems (GIS) to create models of landscape plans',
          'Analyzing the land and its drainage and runoff',
          'Overseeing projects to completion and staying on budget',
          'Restoring natural areas such as wetlands and streams'
        ]
      },
      {
        role: 'Laborer',
        li: [
          'Dig pits and trenches and prepare foundations for job site construction',
          'Set up and prepare job sites by cleaning and removing obstacles and hazards',
          'Lift heavy loads and navigate construction job site terrain',
          'Climb to heights and conduct work with proper safety restraints',
          'Operate heavy machinery, including construction vehicles',
          'Direct traffic to ensure the safety of pedestrians, motorists and work crew',
          'Back-fill trenches and pits when necessary and clean up the job site',
          'Provide labor support as needed for specialty crew',
          'Perform general maintenance of construction equipment and vehicles'
        ]
      },
      {
        role: 'Laboratory-Scientist',
        li: [
          'Locating and identifying infectious microorganisms in samples',
          'Identifying abnormalities in patients’ blood which can affect the ability to clot correctly',
          'Testing blood samples for concentrations of drugs provided during treatments',
          'Interpreting test results and relaying information to the clinical staff to assist in diagnosis and treatment',
          'Breaking down sample fluids from patients and identifying components'
        ]
      },
      {
        role: 'Lab-Technician',
        li: [
          'Conducting experiments, gathering data and performing basic investigations',
          'Adjusting, calibrating and ensuring the proper function of laboratory equipment and instruments',
          'Disinfecting and cleaning working area and equipment',
          'Preparing catalogs and identifying biological samples for storage or examination',
          'Maintaining accurate and detailed records of research findings and entering results in a database',
          'Ordering and stocking lab supplies'
        ]
      },
      {
        role: 'Lab-Assistant',
        li: [
          'Receiving and processing samples to identify suitability',
          'Preparing test samples using laboratory equipment',
          'Performing laboratory testing and preparing and maintaining accurate lab records',
          'Labeling specimens and distributing them to appropriate departments',
          'Performing quality control as directed by the Laboratory Manager',
          'Cleaning and maintaining the work area as well as all lab equipment and supplies'
        ]
      },
      {
        role: 'Junior-Accountant',
        li: [
          'Prepare financial statements: Entry-level accountants work closely with accounting supervisors to prepare financial statements. They also review and examine financial statements to ensure that they are accurate and that they comply with state and federal regulations.',
          'Reconcile bank statements: Junior accountants are often responsible for comparing bank statements with general ledgers to confirm that the two are identical. They also strive to identify and resolve discrepancies between the two.',
          'Post journal entries: Many junior accountants perform financial data entry tasks, such as posting expenses and revenues in accounts in the company’s general ledger. These data entry tasks require careful attention to detail, especially when managing ledgers with multiple accounts.',
          'Document fixed assets: Junior accountants frequently take responsibility for recording, updating and maintaining documentation of fixed assets. They may also depreciate assets to reflect their reduced value over time or dispose assets when they are no longer in use.',
          'Assist with compliance reporting: Since accounting departments must abide by state and federal regulations, junior accountants often assist with preparing, reviewing and filing reports that confirm compliance.',
          'Communicate with vendors: Because junior accountants assist with managing accounts and updating the general ledger, they are often responsible for communicating with vendors about billing issues. In this role, they answer questions and provide basic customer service.'
        ]
      },
      {
        role: 'Journalist',
        li: [
          'Research public records and databases to find information to support articles',
          'Interview witnesses to add a level of personalization to each piece',
          'Attend local events to investigate and report findings',
          'Write articles and journal excerpts that give readers a unique view of the event',
          'Identify topics and create content for news reporters'
        ]
      },
      {
        role: 'IT-Technician',
        li: [
          'Troubleshooting and resolving IT-related issues for employees, customers and clients',
          'Upgrading systems to ensure compatible software is installed on all computers and other equipment',
          'Installing and configuring new hardware and software',
          'Inspecting computer hardware to ensure functionality and repairing or replacing items as needed',
          'Monitoring the performance of networking equipment and servers to ensure efficiency and prevent downtimes',
          'Installing and testing firewalls, servers, software and hardware for functionality'
        ]
      },
      {
        role: 'IT-Specialist',
        li: [
          'Developing innovative network troubleshooting methods to reduce downtime and lower repair costs',
          'Monitor changing network technology and deliver a technology update to the executive team each quarter',
          'Work closely with the managers in each department to determine the maintenance and growth of a network',
          'Work with external parties to identify the most appropriate system or integration of multiple systems',
          'Protect customer data from outside infiltration through encryption, secure data storage and other necessary means'
        ]
      },
      {
        role: 'IT-Business-Analyst',
        li: [
          'Gathering intelligence from executives and senior managers about the needs and future growth of an organization',
          'Evaluating, testing and recommending new opportunities for enhancing software, hardware and IT processes',
          'Designing and executing A/B testing procedures to extract data from test runs',
          'Consulting with executives and the IT department about the newest technology and its implications in the industry',
          'Evaluating and concluding data related to customer behavior',
          'Assuming responsibility for project tasks and ensuring they are completed in a timely fashion'
        ]
      },
      {
        role: 'Inventory-Specialist',
        li: [
          'Conducting inventory counting processes to ensure a shipment’s accuracy',
          'Evaluating and managing stock rotation procedures',
          'Maintaining inventory storage space in the store’s warehouse',
          'Training store staff in stocking procedures and product dating methods',
          'Planing store warehouse space usage',
          'Placing inventory restock orders',
          'Communicating with store management about any inventory issues that arise if products are missing or damaged within a shipment',
          'Managing and maintaining inventory records using an inventory management software system'
        ]
      },
      {
        role: 'Inventory-Clerk',
        li: [
          'Reviewing and applying inventory activities, including movements and deletions',
          'Updating and maintaining inventory records',
          'Reconciling inventory discrepancies',
          'Implementing a loss prevention program',
          'Creating and implementing effective inventory management procedures',
          'Preparing a list of depleted items and a survey of unusable items'
        ]
      },
      {
        role: 'Internal-Auditor',
        li: [
          'Maintaining and cultivating a master inventory of the company’s policies, practices and processes',
          'Testing the operation and altering the design of existing financial controls to improve efficiency and customer care',
          'Performing inquiries and testing as needed to identify and resolve any vulnerabilities',
          'Creating and updating the internal audit plan by developing new audit programs to ensure adequate financial controls',
          'Making recommendations to financial management about software, policies and audit triggers'
        ]
      },
      {
        role: 'Interior-Designer',
        li: [
          'Draw, read and edit blueprints',
          'Research building codes, regulations and standards',
          'Select paint colors, lighting and other elements',
          'Participate in client presentations',
          'Work within specific budgets and schedules'
        ]
      },
      {
        role: 'Intelligence-Analyst',
        li: [
          'Monitor technology and other forms of communication for security and data breaches',
          'Create filtering programs that identify risky communication and threats',
          'Create and distribute reports that offer recommendations to improve security',
          'Analyze technology and data to solve a case or work problem',
          'Follow up on information to prevent a breach or crime'
        ]
      },
      {
        role: 'Insurance-Agent',
        li: [
          'Calling potential customers to inquire about their current policies and adding to their customer base',
          'Interviewing prospective clients about their financial resources and the coverage they require',
          'Analyzing customer policies and needs and suggesting changes or additions to their policies',
          'Customizing insurance programs to suit the needs of individual clients',
          'Maintaining electronic and paper records and handle all policy renewals',
          'Helping policyholders settle claims'
        ]
      },
      {
        role: 'Inside-Sales-Representative',
        li: [
          'Finding new sales opportunities: Although some inside sales representatives manage incoming sales calls, many also seek new customers. They may use mailing lists, industry directories, trade shows or other events to identify opportunities to gain new clients.',
          'Researching customers and accounts: To make effective sales pitches, inside sales representatives research potential customers. They may determine the customer’s annual revenue, business needs or current vendors before they contact a potential client.',
          'Following up with customers and building relationships: Many inside sales representatives contact potential customers multiple times before making a sale. They often perform several follow-up calls to assess customer needs and discuss solutions. After making a sale, representatives may remain in contact to foster strong clientele relationships and sell additional products or services.',
          'Offering product demonstrations: Inside sales representatives often show products to increase sales. These displays may take place through an online portal or during an in-person visit.',
          'Negotiating sales terms: Inside sales representatives often negotiate customized packages with customers. They may discuss product amounts, rates or service terms before agreeing on a sale.',
          'Collaborating with sales executives: Inside sales representatives are essential sales team members. While they often handle straightforward sales and negotiations, they may work with sales executives on larger clients or more complex contracts.'
        ]
      },
      { role: 'Information-Security-Analyst', li: [
          'Identifying a computer network’s potential risks and vulnerabilities',
          'Monitoring and investigating security breaches',
          'Installing defenses, such as data encryption, virus protection and firewalls',
          'Educating employees or clients about security procedures and programs',
          'Helping employees troubleshoot security or access issues',
          'Testing protection programs to make sure they work',
          'Creating plans for emergencies and how to protect, store or recover data during power outages and natural disasters',
          'Researching new viruses and cyberattacks and how to prevent them'
      ] },
      {
        role: 'Industrial-Engineer',
        li: [
          'Evaluate productivity and offer recommendations to improve procedures',
          'Assess machinery and identify ways to improve its efficiency',
          'Develop quality control standards and regularly test and report on results',
          'Predict and improve financial planning for industrial equipment',
          'Monitor employee schedules and tasks and make improvements to meet demands'
        ]
      },
      { role: 'HR-Generalist', li: [
          'Recruiting, interviewing and hiring new staff',
          'Advising and helping supervisors manage employee relationships and evaluate performance concerns',
          'Developing employee policies and identifying areas for improvement',
          'Organizing and implementing programs to train new employees, educate staff about new processes and teach employees about occupational safety and welfare',
          'Administering employee wages and benefits',
          'Issuing employee communications, such as emails about company events'
      ] },
      { role: 'HR-Assistant', li: [
          'To help your department operate smoothly, you might create and maintain files, sort and distribute mail, or schedule meetings and appointments.',
          'To ensure accurate internal records, you might enter employment details in a database or track employee hours in a payroll application.',
          'To support your organization’s goals of attracting new talent, you may publish or update job listings online or in industry publications. As the hiring process advances, you might schedule interviews or communicate with candidates.',
          'To assist with employee onboarding, you might coordinate orientation programs or training sessions. You might also provide new employees with benefits information or access to internal resources.'
      ] },
      {
        role: 'Home-Health-Nurse',
        li: [
          'Monitoring patient health and vital signs and ',
          'Completing medical histories ',
          'Dispensing medications and treatments as prescribed',
          'Aiding with personal needs such as bathing and dressing',
          'Providing services such as IV therapy, wound care and insertion of catheters',
          'Educating patients about nutrition, pain management, care procedures and general information about their condition',
          'Making referrals for treatment based on patient progress'
        ]
      },
      {
        role: 'Home-Health-Aide',
        li: [
          'Monitors and records patient information',
          'Does light housekeeping duties such as cooking, laundry and dishes ',
          'Assists with medical tasks such as administering medication and checking vital signs',
          'Assists with personal care such as bathing, grooming and getting dressed ',
          'Accompanies patients to doctor’s visits and/or other errands',
          'Provides emotional and social support to patients regularly '
        ]
      },
      {
        role: 'High-School-Teacher',
        li: [
          'Manage student attendance and progress reports',
          'Develop lesson plans and curriculum for the full year or semester by semester',
          'Know and reinforce school policies and procedures',
          'Help students prepare for college',
          'Communicate and work with parents on student progress',
          'Chaperone school events and field trips',
          'Assist with school-related extracurricular activities',
          'Standard test preparation determined by the state',
          'Tutor students after class or school who need extra help in grasping harder content and work with their learning styles to help them improve'
        ]
      },
      {
        role: 'Hematologist',
        li: [
          'Communicate with patients to gather information on symptoms',
          'Diagnose illnesses based on tests',
          'Develop treatment plans for various illnesses',
          'Working with other healthcare professionals to deliver excellent care to patients',
          'Use specialized tests and tools to determine blood disorders.'
        ]
      },
      {
        role: 'Help-Desk-Clerk',
        li: [
          'Responding to emails or phone calls from employees and customers who need help with software or computer-related issues',
          'Learning the functions and back end of software so they can walk users through the installation or other processes remotely',
          'Help the development team in conceptualizing updates and upgrades based on customer feedback that will enhance the user experience',
          'Provide excellent customer service '
        ]
      },
      {
        role: 'Helicopter-Pilot',
        li: [
          'Inspect aircraft, instruments, systems and controls for safety before a flight',
          'Perform pre-flight checks, which includes checking weather forecasts and consulting with dispatchers',
          'Create flight plans to determine the most efficient and safest routes',
          'Operate a helicopter’s controls and systems, as well as monitor instruments to ensure safety and proper functionality',
          'Complete all required post-flight paperwork after each flight, including a duty hours log '
        ]
      },
      {
        role: 'Health-Administrator',
        li: [
          'Arranging and attending meetings with high-level management, investors, other organizations and governing bodies',
          'Staff recruitment',
          'Ensuring that all staff and services provided comply with the healthcare laws and policies of the state and country',
          'Streamlining systems to make sure they are as efficient as possible',
          'Writing grant proposals for funding',
          'Managing the facilities and keeping records'
        ]
      },
      {
        role: 'Head-Cashier',
        li: [
          'Resolving cash tills at the end of every shift and generating accurate till reports for each register',
          'Managing the checkout area to ensure each station remains clean and is running efficiently',
          'Serving as the primary point-of-contact for customer service associates',
          'Ensuring all stations have sufficient cash and change at all times',
          'Responding to price check requests and other functions for customer service',
          'Managing and performing all checkout functions on a daily basis'
        ]
      },
      {
        role: 'Gynecologist',
        li: [
          'Meeting with patients for annual or otherwise routine checkups and testing, including cancer screenings, STI testing and fertility monitoring',
          'Diagnosing female reproductive conditions, such as STIs, polycystic ovary syndrome, endometriosis and others',
          'Prescribing contraceptives and other medication to manage reproductive wellness or treat STIs',
          'Ordering additional testing or referring patients to specialists for treatment on medical conditions impacting the reproductive system',
          'Monitoring other conditions that impact reproductive health, including diabetes, heart disease and weight management',
          'Educating patients on family planning, fertility and prevention',
          'Documenting patient appointments to maintain the accuracy of patient medical history and billing'
        ]
      },
      {
        role: 'Guidance-Counselor',
        li: [
          'Helping students develop learning skills, such as time management and study practices',
          'Assessing students’ strengths and interests to help them choose classes, colleges and careers',
          'Teaching students how to build resumes, interview for scholarships or jobs and more',
          'Counseling students individually or in groups',
          'Helping teachers manage common social issues that affect students in the classroom',
          'Meeting with teachers, school administration and parents about academic performance',
          'Helping students apply for college'
        ]
      },
      {
        role: 'Groundskeeper',
        li: [
          'Performing regular tasks for basic lawn care',
          'Maintaining lawn equipment',
          'Keeping inventory of maintenance equipment and materials',
          'Ordering materials, such as mulch and soil and arranging for delivery or pickup',
          'Operating vehicles, such as riding lawn mowers, tractors and pickup trucks',
          'Controlling weeds and pests',
          'Performing some janitorial duties, such as trash pickup and gutter cleaning to maintain a healthy property',
          'Planting flowers and plants for ground cover',
          'Laying and spreading mulch',
          'Watering plants and grass'
        ]
      },
      {
        role: 'Graphic-Designer',
        li: [
          'Selecting fonts, colors and photos for layouts',
          'Designing logos',
          'Using software to create digital illustrations ',
          'Turning data and ideas into images',
          'Presenting designs to clients or managers and making changes as needed'
        ]
      },
      {
        role: 'Grant-Writer',
        li: [
          'Search for upcoming grant applications and keep a calendar or spreadsheet of deadlines',
          'Write donor appeals and acknowledgment letters ',
          'Edit or review other organization documents',
          'Organize fundraising initiatives '
        ]
      },
      {
        role: 'General-Counsel',
        li: [
          'Providing accurate legal guidance to company executives',
          'Managing compliance, risk management and legal services groups',
          'Attending executive meetings related to pending mergers and acquisitions, changes in policy or future direction of an organization',
          'Monitoring to ensure the company is in compliance with current business laws',
          'Creating contracts and contractor agreements'
        ]
      },
      {
        role: 'Gastroenterologist',
        li: [
          'Meeting with and assessing patients',
          'Running diagnostic tests',
          'Performing colonoscopies and endoscopies to see within the colon and digestive system',
          'Taking X-rays, MRIs, CT scans and ultrasounds',
          'Referring patients for surgery and continuing their treatment post-surgery ',
          'Treating patients for conditions such as irritable bowel syndrome, colitis, gastritis, hemorrhoids, Crohn’s disease, lactose intolerance, heartburn, gastroesophageal reflux disease, ulcers, celiac disease, gallbladder disease and certain cancers',
          'Completing administrative tasks such as filling out paperwork and patient records',
          'Meeting with medical staff and contributing to business decisions'
        ]
      },
      {
        role: 'Front-End-Developer',
        li: [
          'Implementing responsible web design principles to ensure the company website renders well across multiple devices ',
          'Designing a framework for creating user apps that grow with the needs of the company ',
          'Monitoring website performance, watching for traffic drops related to site usability problems and rectifying the issues ',
          'Reviewing app and feature coding and planning website upgrades with the development team ',
          'Assisting in the development of applications and features that will go on the website and in internal functions'
        ]
      },
      {
        role: 'Front-Desk-Agent',
        li: [
          'Maintaining communication with maintenance and housekeeping departments to ensure the highest level of guest service',
          'Making reservations for guests at local restaurants, entertainment venues or other local attractions, arranging taxi or shuttle services and offering recommendations when asked',
          'Providing information about rooms, rates and hotel amenities',
          'Answering external phone calls as well as calls from checked-in guests and keeping a documented record of each call for later reference',
          'Remaining in contact with guests in advance of special events for which they’ve reserved space and service ',
          'Promoting hotel services'
        ]
      },
      {
        role: 'Freight-Broker',
        li: [
          'Generating sales leads for the company',
          'Collecting and storing information relating to goods for the company',
          'Negotiating prices, preparing quotes and collecting payment for service rendered',
          'Identifying, verifying and commissioning a carrier for hauling goods',
          'Tracking, managing and keeping the shipper informed of the journey of the goods',
          'Managing and resolving exigencies that arise during the movement of goods',
          'Completing the delivery process'
        ]
      },
      {
        role: 'Forklift-Operator',
        li: [
          'Prepping product and merchandise for shipment and moving cargo safely to and from shipping vessels',
          'Inspecting product shipments sent and received for any damaged or missing products',
          'Identifying and reporting any variance from quality standards to a quality assurance manager',
          'Accurately stocking and organizing heavy merchandise or materials in a warehouse or storage location',
          'Communicating using radio equipment for shipping, receiving, organizing and moving materials or product',
          'Keeping track of inventory and accurate counts of sent and received product as part of the supply chain',
          'Maintaining equipment through regular inspections and lubrication and reporting any equipment malfunctions to supervisors',
          'Performing basic equipment maintenance unless a specialized mechanic is needed',
          'Ensuring a safe work environment by adhering to Occupational Safety and Health Administration (OSHA) standards',
          'Recording processes for quality assurance'
        ]
      },
      {
        role: 'Forensic-Accountant',
        li: [
          'Audit financial documents and records to identify fraud',
          'Document and follow up on suspicious bookkeeping practices',
          'Coordinate with law enforcement or investigative employees to review evidence',
          'Create reports and explain findings to the investigative team'
        ]
      },
      {
        role: 'Food-Server',
        li: [
          'Enter food and beverage orders into a computerized order system ',
          'Offer knowledgeable food and beverage recommendations ',
          'Provide excellent service by being observant of guests’ needs, keeping beverages filled and checking in during meals.',
          'Promptly address any quality or service issues, getting management involved when necessary.',
          'Process payments and provide change as needed'
        ]
      },
      {
        role: 'Flight-Attendant',
        li: [
          'Attending preflight briefings with the pilots to get flight information for each trip',
          'Inspecting emergency equipment before each flight',
          'Making sure the plane’s cabin is clean and well-stocked with food and drinks',
          'Making sure all passengers are prepared for takeoff and landing',
          'Helping passengers with special needs, small children or needing medical assistance',
          'Responding to disruptive passengers and monitoring the plane for suspicious behavior',
          'In case of an emergency, helping passengers locate and use safety equipment, putting out fires and directing evacuations',
          'Reporting any safety or medical issues that happened on a flight'
        ]
      },
      {
        role: 'Firefighter',
        li: [
          'Operating and maintaining fire equipment and tools',
          'Providing emergency medical care',
          'Taking part in training, classes and drills in firefighting, disaster response or specialized rescue',
          'Performing community outreach to teach fire prevention and first aid',
          'Driving a fire truck'
        ]
      },
      { role: 'Financial-Planner', li: [
          'Meeting with clients to discuss current financial standing, set goals and assess potential risks',
          'Helping clients create personal budgets that help them reach savings goals',
          'Assisting clients with tax returns, estate management, retirement planning, mortgages and properties and other financial tasks',
          'Staying current with developments in financial products, tax laws and industry updates that impact their clients',
          'Maintaining relationships with clients and keeping them updated about financial changes to their account',
          'Referring clients to service providers and other financial professionals as needed'
      ] },
      {
        role: 'Financial-Controller',
        li: [
          'Recruit, hire and train financial analyst team members',
          'Prepare financial statements, budgets and reports',
          'Identify financial trends and make recommendations',
          'Evaluate current budgets and identify ways to cut costs',
          'Approve invoices and follow up with past-due accounts'
        ]
      },
      {
        role: 'Financial-Analyst',
        li: [
          'Compiling and analyzing financial reports and finding discrepancies that require the attention of senior management',
          'Recommending individual or a collection of investments, known as a portfolio',
          'Evaluating financial data—both current and past—and identifying economic and business trends',
          'Meeting with senior management and executives to gain better insight into the organization’s prospects',
          'Preparing financial reports with reliable conclusions that management can use to implement more effective operational strategies',
          'Providing EOM reports for C-level executives'
        ]
      },
      {
        role: 'Financial-Advisor',
        li: [
          'Researching investment opportunities for clients',
          'Providing tax advice and selling insurance products that help clients meet their financial goals',
          'Educating clients about investment options and potential risks while answering any questions they may have',
          'Helping clients plan financially for education, retirement or legacy',
          'Offering services for major life changes, such as getting married or having children',
          'Monitoring client accounts to determine if they need to make changes to their investment strategy to improve financial performance or accommodate anticipated life changes'
        ]
      },
      {
        role: 'File-Clerk',
        li: [
          'Collecting data from employees or customers',
          'Scanning and uploading paper documents to store in a digital format',
          'Creating an organized system for arranging paper and electronic files',
          'Communicating with staff members to inform them of where to find certain files',
          'Answering phone calls and directing them to the appropriate staff member'
        ]
      },
      {
        role: 'Expeditor',
        li: [
          'Managing inventory levels: Expeditors typically communicate with management to assess various supply vendors and inspect the quality of delivered supplies. This may periodically involve communicating with vendors to resolve any perceived or ongoing issues. ',
          'Supply management: Expeditors may also place purchase orders as needed, verifying they’ve ordered the correct supplies for the job. They will maintain optimal inventory levels, often managing supply requisition for several simultaneous projects. Their responsibilities also include informing project managers of expected delivery dates and potential delays and communicating with suppliers to verify shipping and delivery timelines. After delivery, the expeditor will inspect delivery contents for accuracy and quality. ',
          'Subcontractor coordination: When an expeditor works for a general construction company, they may be required to maintain schedules for each ongoing project by coordinating with labor providers to assign required crews for services such as drywall, plumbing, electrical and more. The expeditor assigns jobs to the subcontractors, provides directions to the job site along with an expected arrival time and confirms each crew has completed their work accurately and on time.',
          'Communication coordination: Expeditors also streamline interdepartmental communication, often acting as a liaison between department heads under the direction of the superintendent or administrator.',
          'Generating progress reports: An expeditor may monitor job progress compared to projected timelines, spot-check work quality and the safety of the worksite and report the progress to management.',
          'Preparing for project review meetings: Expeditors collaborate with project managers to gather relevant information regarding job status, put together a clear and cohesive presentation and add meeting details to attendees’ calendars. Attendees typically include executive management, project management and major stakeholders.'
        ]
      },
      {
        role: 'Exercise-Physiologist',
        li: [
          'Evaluating a patient’s medical history and current fitness level to inform treatment planning',
          'Conducting stress and fitness tests with focused attention on cardiovascular fitness and metabolism',
          'Measuring and monitoring vital statistics, including blood pressure, heart rate and oxygen level',
          'Developing customized exercise programs to meet unique patient needs and monitoring progress over time',
          'Modeling safe and effective performance of exercise techniques'
        ]
      },
      {
        role: 'Event-Planner',
        li: [
          'Meeting with clients to understand the purpose of the event',
          'Planning the scope of the event, including cost, time, location and program',
          'Inspecting places to make sure they meet the client’s requirements',
          'Conferring with on-site staff to coordinate details',
          'Monitoring event activities to make sure the client and event guests are satisfied',
          'Reviewing event bills and approving payment'
        ]
      },
      {
        role: 'Estimator',
        li: [
          'Preparing estimates and purchase orders in detail for all products and materials',
          'Understanding the scope of the work and ensuring timely completion of estimates',
          'Managing bid pricing from all vendors and preparing a detailed cost analysis',
          'Establishing and maintaining relationships with subcontractors and vendors',
          'Communicating with trade partners and team members regarding the cost estimates and actual costs of new and current projects'
        ]
      },
      {
        role: 'Esthetician',
        li: [
          'Guiding customers through the types of products and services',
          'Sell retail products such as lotions, creams and other skincare products',
          'Take part in continuing education and safety training meetings',
          'Provide consultations to help clients choose the best treatments for their skin'
        ]
      },
      {
        role: 'ER-Nurse',
        li: [
          'Triaging patients who enter the ER',
          'Maintaining communication between the staff and patients’ families to keep them aware of the patient’s condition',
          'Identifying symptoms and treatments for a wide range of conditions',
          'Helping with check-in and other paperwork for patients when they enter',
          'Working with front desk employees, physicians, technicians and other staff to facilitate care'
        ]
      },
      {
        role: 'Environmental-Engineer',
        li: [
          'Evaluate environmental problems and offer recommendations to management to fix them',
          'Monitor city and state pollution levels',
          'Assist architects in designing environmentally-friendly, sustainable buildings',
          'Offer recommendations for properly cleaning up waste sites',
          'Monitor the progress of all environmental improvement projects'
        ]
      },
      {
        role: 'Enterprise-Architect',
        li: [
          'Optimizing information management systems ',
          'Implementing shared infrastructure to improve information sharing and minimize expenses',
          'Developing standards and policies that guide the use of IT assets',
          'Educating employees on best practices for utilizing IT products and solutions available within the organization',
          'Researching new IT solutions to identify ways to enhance operations',
          'Evaluating existing IT systems for vulnerabilities that may compromise performance, security or efficiency'
        ]
      },
      {
        role: 'Endodontist',
        li: [
          'Diagnosing oral pain and performing treatments to the inside of the tooth',
          'Working with fractured and broken teeth',
          'Treating oral trauma when patients experience tooth dislocation',
          'Acting as a point of referral to general dentists when they have difficult cases to diagnose or cases that require specialist equipment to treat'
        ]
      },
      {
        role: 'Endocrinologist',
        li: [
          'Conducting patient examinations to determine whether patients have any signs of hormonal imbalance',
          'Requesting further testing if the prognosis is unclear',
          'Prescribing the appropriate treatment and scheduling checkups',
          'Advising patients on preventative measures and changes in lifestyle',
          'Conducting research and developing new approaches in treatments',
          'Training and mentoring junior staff'
        ]
      },
      {
        role: 'Elementary-School-Teacher',
        li: [
          'Creating lesson plans that are aligned to state and/or national learning standards ',
          'Delivering rigorous and engaging instruction across multiple subject areas',
          'Differentiating instruction to meet diverse student learning needs',
          'Assessing students’ progress using formative and summative assessments',
          'Supporting students’ social and emotional development through cooperative activities and teamwork',
          'Maintaining accurate student records including daily attendance and grades'
        ]
      },
      {
        role: 'Electrician',
        li: [
          'Planning the layout of new electrical installations using blueprints',
          'Installing telecommunications systems, electrical machinery and other types of electrical equipment',
          'Inspecting electrical installations and equipment to make sure they’re safe, functional and up to national, state and local codes',
          'Placing wires and connecting them to circuit breakers, outlets, transformers and other system components',
          'Troubleshooting and repairing malfunctioning electrical equipment in homes and businesses',
          'Instructing electrician assistants who help transport equipment, cut and bend wiring and perform basic maintenance'
        ]
      },
      {
        role: 'Electrical-Engineer',
        li: [
          'Creating and testing designs for electrical products and systems: Electrical engineers often begin by assessing and researching the demand for new electrical equipment and systems. Then they create designs for new products or improved versions of existing products. Electrical engineers also develop prototypes so they can test their designs and resolve potential problems.',
          'Managing and resolving customer complaints: Some of the projects that electrical engineers manage result from complaints from the public. When responding to these concerns, electrical engineers investigate the cause of the complaint and attempt to replicate the issue before developing and testing solutions.',
          'Overseeing the production and installation of designs: After their designs are approved, electrical engineers provide specifications for manufacturing and installing their products. Many electrical engineers also direct the production process and confirm that the final products meet manufacturing codes and other required specifications.',
          'Collaborating with project managers: Most electrical engineers work with teams. They often work under project managers, who ensure that projects are on schedule and have sufficient resources.'
        ]
      },
      {
        role: 'EKG-Technician',
        li: [
          'Execute EKG services according to the hospital’s procedures',
          'Maintain EKG equipment and any required inventory needed to run tests',
          'Perform related administrative tasks including recording results, filing and data entry',
          'Attend additional training programs as required by the healthcare system, including safety procedures',
          'Perform and schedule EKG tests'
        ]
      },
      {
        role: 'Ecologist',
        li: [
          'Doing fieldwork to gather data for analysis or to assess habitats. Data may be used, for instance, to plan environmental restoration projects or to sustain and improve agricultural production.',
          'Writing environmental impact studies',
          'Working together with other experts to develop green technology, practices and processes',
          'Maintaining and calibrating instruments and equipment used for field research',
          'Writing technical reports that provide information on methods used and the interpretation of results',
          'Working with software programs like geographic information systems and computer-aided design programs',
          'Writing and publishing articles and presenting research at conferences',
          'Researching in laboratories, as well as doing theoretical research',
          'Managing ecological projects or programs',
          'Creating models to investigate the effects of ecosystem changes',
          'Writing proposals for funding opportunities',
          'Teaching workshops at universities and community programs, or lecturing',
          'Advising the government, institutions and businesses on environmental issues and law',
          'Managing wildlife conservation lands'
        ]
      },
      {
        role: 'Doula',
        li: [
          'Consulting with expectant mothers on wellness regimens, including exercise, balanced eating and supplements',
          'Teaching relaxation and breathing techniques to practice before and during childbirth',
          'Advising on pre- and post-natal parent-child bonding',
          'Helping develop a birth plan, including preferences and potential medical concerns',
          'Caring for pregnant women with high-risk conditions, such as preeclampsia or multi-fetal pregnancy',
          'Coordinating recommended treatments and medical care with doctors and nurses',
          'Guiding the woman’s partner, family and/or support system in helping the expectant mother prepare physically and emotionally for childbirth',
          'Assisting mothers with post-natal childcare, including feeding guidance'
        ]
      },
      {
        role: 'Dog-Trainer',
        li: [
          'Identify and overcome certain behavioral problems in dogs',
          'Mentor owners to learn effective training techniques',
          'Reinforce positive behavior in dogs while training',
          'Teach dogs how to complete agility courses',
          'Instruct dogs in certified assistant practices'
        ]
      },
      {
        role: 'Doctor',
        li: [
          'Meeting with patients and their families to discuss symptoms',
          'Performing general examinations and ordering tests or treatments',
          'Discussing test results',
          'Prescribing medication as needed',
          'Working with other medical professionals to provide the best patient care'
        ]
      },
      { role: 'Dispatcher', li: [
          'Use mapping software to develop routes',
          'Serve as a liaison between drivers and customers',
          'Monitor drivers’ locations',
          'Resolve logistical problems quickly',
          'Develop a thorough understanding of the area',
          'Build relationships with drivers and customers'
      ] },
      {
        role: 'Dietitian',
        li: [
          'Assess patients’ health concerns and nutritional needs: Dietitians spend substantial time talking with patients to assess the health issues they want to address and identify any areas of nutritional concern. Some dietitians specialize in working with certain types of patients, such as the elderly or those with cancer.',
          'Develop customized diet plans for patients: After meeting with patients, dietitians create meal plans that take their clients’ specific nutritional needs and budgetary requirements into consideration. They advise patients about how to adopt and maintain their new diets.',
          'Track patients’ progress: Once they have helped patients begin a new diet plan, dietitians meet with their clients routinely to track their progress. Depending on patients’ results, dietitians may suggest changes or additions to help their clients succeed.',
          'Research the effects of nutrition on health: As experts on health and nutrition, dietitians follow the latest research in their field. Most read industry publications and attend conferences regularly.',
          'Write and speak about diet and nutrition: Many dietitians also contribute to the field by publishing or speaking about their own scientific research on health and nutrition. Those who work as community dietitians regularly develop educational material about achieving and maintaining a healthy diet.'
        ]
      },
      {
        role: 'Dietary-Aide',
        li: [
          'Preparing food and serving well-balanced meals to residents and patients',
          'Cleaning the kitchen, dining hall and residents’ or patients’ rooms in relation to the foodservice ',
          'Helping certain residents eat when needed ',
          'Working with a cook, dietary cook or facility manager to plan menus fit for medical and wellness needs',
          'Educating patients about nutrition and wellness',
          'Abiding by state, federal and facility infection control regulations',
          'Monitoring and reporting on resident food intake, such as items, expenses, calories and other nutrition elements'
        ]
      },
      {
        role: 'Diesel-Mechanic',
        li: [
          'Performing check-ups on diesel machinery and vehicles to check for warning signs for potential deterioration or future problems',
          'Diagnosing broken diesel machinery to identify the source of malfunctions',
          'Repairing damaged and non-functional units to working condition',
          'Speaking with customers and asking questions to help guide inspections in order to more efficiently conduct repairs',
          'Explaining problems with machinery to owners in relatable terms, then explaining work which was done and what to watch out for following repairs'
        ]
      },
      {
        role: 'Dialysis-Technician',
        li: [
          'Assembling the dialysis machine and ensuring that it is working properly before beginning treatment',
          'Observing patients during treatment to maintain safe application and make alterations to the treatment if necessary',
          'Explaining the process and providing guidance to patients to ease the mental burden of treatment',
          'Providing emotional support to patients during their treatment',
          'Working alongside nurses and doctors during dialysis treatments',
          'Teaching patients about proper healthcare while on dialysis to help them achieve positive results'
        ]
      },
      {
        role: 'DevOps-Engineer',
        li: [
          'Possessing a thorough understanding of the goals and responsibilities for both the development and operational teams',
          'Assisting in the planning and development of new coding to implement new systems',
          'Overseeing the release of new features from development to employees to ensure that software is reliable when cleared for use',
          'Monitoring the security of new builds to assess any potential holes that could lead to security threats.'
        ]
      },
      {
        role: 'Detective',
        li: [
          'Use computers to issue warrants for suspects',
          'Interview witnesses and suspects to gather crucial information for the case',
          'Participate in raids at private homes or companies to apprehend suspects',
          'Keep detailed research notes and present them in court when necessary'
        ]
      },
      {
        role: 'Desktop-Support-Specialist',
        li: [
          'Diagnosing and resolving technical issues with hardware or software systems',
          'Speaking with users over the phone, in person or via online chat to understand and troubleshoot technical issues',
          'Determining the need for and subsequently providing system reconfiguration',
          'Assessing user needs and recommending technical solutions such as patches, upgrades or enhancements',
          'Documenting technical support procedures and maintaining customer records',
          'Responding promptly to queries and providing information on the proper installation, maintenance and use of technical systems',
          'Completing thorough installations on the client environment by taking backups of data, upgrading systems as needed and installing new software or hardware solutions'
        ]
      },
      {
        role: 'Design-Engineer',
        li: [
          'Meeting with managers and research and development (R&D) teams to understand the parameters of design requests',
          'Using CAD and Computer Aided Engineering (CAE) software to convert ideas to models and plans',
          'Working with other engineers on different aspects of the same project',
          'Constructing and testing prototypes and designs',
          'Revising ideas as new requirements arise',
          'Ensuring all plans and prototypes conform to industry standards and guidelines'
        ]
      },
      {
        role: 'Dermatologist',
        li: [
          'Diagnosing and treating skin ailments',
          'Performing dermatological screenings',
          'Prescribing medications',
          'Performing minor surgical procedures on topical abnormalities of the skin',
          'Consulting with patients and educating them on managing their condition efficiently',
          'Conducting clinical or basic research'
        ]
      },
      {
        role: 'Dentist',
        li: [
          'Reading and interpreting x-rays and other diagnostic tests',
          'Monitoring the development of the teeth and jaws',
          'Creating treatment plans for patients to improve their oral health',
          'Prescribing antibiotics or other medication',
          'Administer anesthetics prior to procedures to keep patients from feeling pain',
          'Place sealants or whitening agents on the teeth'
        ]
      },
      {
        role: 'Dental-Hygienist',
        li: [
          'Clean patients’ teeth: Dental hygienists are responsible for cleaning patients’ teeth and gums. They use ultrasonic toothbrushes to deeply clean and power polishing tools to eliminate stains. They may also use handheld implements to remove plaque and tartar.',
          'Examine patients’ teeth: These dental professionals are responsible for examining patients’ teeth and looking for signs of oral diseases. They may take X-rays to assess the source of a problem or create dental molds for dentists to review.',
          'Monitor patients’ oral health: Dental hygienists document the procedures they perform and the issues they discover. They review patients’ dental histories during each visit to ensure they are maintaining good oral health and following recommended treatment plans.',
          'Teach patients about good oral health: Many dental hygienists advise patients on how to achieve better oral health by brushing and flossing their teeth regularly. They may offer verbal advice or provide patients with educational pamphlets to review.',
          'Collaborate with dentists: Depending on state regulations, dental hygienists often work under the supervision of a dentist. Most work closely with dentists, who check over their work and develop patient treatment plans based on their examinations.'
        ]
      },
      {
        role: 'Dental-Assistant',
        li: [
          'Check patients in, take a medical history and ensure they are comfortable before beginning the dental procedure',
          'Assist with taking X-rays of teeth',
          'Assist with dental procedures like fillings, extracting and making molds of teeth',
          'Use dental tools to clean patient’s teeth',
          'Check patients out and give them follow-up instructions'
        ]
      },
      {
        role: 'Database-Administrator',
        li: [
          'Creating new user accounts and permissions',
          'Testing modifications to database structures',
          'Monitoring database systems to check for slow responses and possible bottlenecks',
          'Optimizing database systems by regularly installing updates and patches',
          'Regularly updating anti-virus programs on database servers',
          'Troubleshooting and diagnosing database system problems and implementing solutions',
          'Merging old databases',
          'Performing capacity planning ',
          'Monitoring the hardware and operating systems of database servers'
        ]
      },
      {
        role: 'Data-Scientist',
        li: [
          'Understanding the model that is the best fit for the data they are analyzing and developing statistical learning models based on their research',
          'Collaborating with other departments to understand the needs of organizations and using raw data and machine learning to identify solutions',
          'Communicating the results of their analyses to top executives and other key decision-makers',
          'Staying up-to-date on the latest trends in technology that could provide solutions for organizational challenges'
        ]
      },
      {
        role: 'Data-Entry-Clerk',
        li: [
          'Collecting data and inputting information into databases',
          'Reviewing records for accuracy',
          'Updating databases with new or revised information as necessary',
          'Performing regular backups of information to ensure data preservation',
          'Retrieving records and electronic files from the database',
          'Sorting and organizing paper records or notes after data entry',
          'Preparing digital materials or files for printing'
        ]
      },
      {
        role: 'Data-Architect',
        li: [
          'Evaluating current databases and architecture to plan what changes, upgrades and improvements they need to make',
          'Creating models and plans for database structures',
          'Coding and designing databases',
          'Ensuring all data is secure',
          'Ensuring data structures comply with all local, state, federal and industry standards and regulations',
          'Monitoring database and setting up feedback systems to refine and constantly improve',
          'Writing and establishing procedures for database management',
          'Researching new techniques, software and products that could improve a company’s data-related functions',
          'Working with marketing teams to create models before product launches'
        ]
      },
      {
        role: 'Data-Analyst',
        li: [
          'Complete statistical tests to gather data related to business procedures',
          'Translate large amounts of data into easy-to-read reports',
          'Identify important trends that can influence business decisions',
          'Routinely monitor data for industry changes',
          'Collaborate with team members to improve statistical testing procedures'
        ]
      },
      {
        role: 'Cybersecurity-Analyst',
        li: [
          'Assessing the security of any networks or digital devices connected to the networks',
          'Implementing responses to threats to minimize the risk of attacks',
          'Developing protocols for safe use for employees to follow',
          'Reacting to any attempted breaches to minimize damage'
        ]
      },
      { role: 'Customer-Service-Representative', li: [
          'Sharing information about products and services',
          'Answering customer questions',
          'Responding to customer complaints',
          'Processing orders and returns',
          'Documenting customer interactions',
      ] },
      {
        role: 'Customer-Service-Associate',
        li: [
          'Processing orders for products/services',
          'Calculating charges and process payments',
          'Making changes to customer accounts',
          'Handling returns',
          'Resolving complaints',
          'Monitoring customer satisfaction levels',
          'Keeping detailed records of actions taken',
          'Referring customers to supervisors or other departments',
          'Interacting with customers through email, live chat or social media'
        ]
      },
      {
        role: 'Custodian',
        li: [
          'Picking up trash',
          'Sweeping, mopping and vacuuming floors',
          'Using industrial cleaning equipment if necessary',
          'Cleaning bathrooms',
          'Restocking bathroom supplies',
          'Washing windows, dusting and cleaning blinds and other window fixtures',
          'Performing minor maintenance',
          'Responding to requests from facility managers or others to clean spills or accidents'
        ]
      },
      { role: 'CTO-(Chief-Technology-Officer)', li: [
          'Create a strategy for technology platforms',
          'Hiring IT staff',
          'Collaborate with the marketing, development and operations departments to select and deliver different products and developments',
          'Implement technological solutions to meet current and projected needs',
          'Manage technology performance metrics',
          'Inspect all system designs and changes in system architecture',
          'Create standards and practices for the use of technology and ensure adherence by all staff members',
          'Control the annual operating and capital budgets for technological purchasing, staffing and operations',
          'Drive thought leadership, innovation and creativity'
      ] },
      {
        role: 'Crime-Scene-Investigator',
        li: [
          'Working with other members of law enforcement to secure crime scenes',
          'Identifying and marking crime scenes',
          'Preserving, collecting and packaging evidence found at crime scenes',
          'Repairing and maintaining equipment needed for evidence collection',
          'Creating and maintaining logs, reports and other tracking data',
          'Testifying in court regarding evidence collected',
          'Transporting evidence to forensic laboratories',
          'Communicating findings to forensic scientists and law enforcement professionals'
        ]
      },
      {
        role: 'Crew-Member',
        li: [
          'Quickly serving customers',
          'Assists in training new crew members',
          'Works as part of a team to meet sales goals during a shift',
          'Cleaning the work station thoroughly before, during and after every shift',
          'Following safety and security procedures as provided by the company',
          'Arriving on time for a shift and staying until the shift is over'
        ]
      },
      {
        role: 'Credit-Analyst',
        li: [
          'Enter, update and retrieve information for credit applications',
          'Evaluate and determine credit worthiness of applicants',
          'Perform cash flow analysis of businesses to determine the degree of risk involved in extending credit ',
          'Ensure compliance of lending protocols',
          'Respond to inquiries from lenders',
          'Review proposals and answer questions from junior team members',
          'Assist with company and client audits'
        ]
      },
      {
        role: 'Crane-Operator',
        li: [
          'Inspecting cranes and their hydraulic systems thoroughly before operation',
          'Moving the crane’s main arm into place, connecting materials to the crane, then moving the crane and its arm to place materials',
          'Recording materials and their movements on business logs',
          'Making minor repairs to cranes as required'
        ]
      },
      { role: 'CPA-(Certified-Public-Accountant)', li: [
          'Preparing financial statements',
          'Preparing and filing local, state and federal tax returns',
          'Working with clients to minimize tax obligations',
          'Representing clients during audits',
          'Filing reports with the Securities and Exchange Commission (SEC)',
          'Auditing financial information and submitting official reports',
          'Managing clients’ financial activities, such as cash flow, budgeting, general accounting and financial planning',
          'Directing a team of accountants or an accounting department',
          'Advising clients on investment practices',
          'Estate planning',
          'Consulting with clients to identify issues or risks and help them manage their businesses effectively',
          'Acting as expert witnesses in legal cases, such as bankruptcies, mergers, acquisitions or divorce proceedings'
      ] },
      {
        role: 'Cost-Accountant',
        li: [
          'Preparing monthly and quarterly accounting reports for submission to management',
          'Generating quarterly reports for senior management based on an inventory reserve analysis',
          'Suggesting changes to procedures and policies to increase the organization’s cash flow',
          'Analyzing organizational data and reviewing rates of labor, overhead and depreciation to recommend policy changes that will improve numbers',
          'Establishing the standard costs of products and services and updating them as appropriate based on the associated expenses',
          'Maintaining and reviewing the general ledger and balance sheets'
        ]
      },
      {
        role: 'Cosmetologist',
        li: [
          'Working with clients to discuss customized styling options',
          'Washing, conditioning and drying hair',
          'Cutting, coloring, texturing and styling hair',
          'Providing salon-certified treatments to customers’ face, hair and scalp',
          'Providing nail care, such as manicures and pedicures',
          'Recommending and applying makeup on clients',
          'Offering customers advice and product recommendations for maintaining their hygiene and styling between salon visits'
        ]
      },
      {
        role: 'Coroner',
        li: [
          'Examining human remains and determining the time and cause of death',
          'Issuing official death certificates',
          'Identifying a deceased person',
          'Arranging for the notification of the next of kin to the deceased',
          'Interviewing certain witnesses at a crime scene',
          'Providing information and official reports for court proceedings if the cause of death is homicide',
          'Providing approvals for exhumations of remains when legally required',
          'Providing permission for bodies to be returned to families for burial post-investigation',
          'Taking part in any court proceedings surrounding a death and possibly testifying',
          'Sometimes, a coroner acts in a supervisory role and will direct others, such as the medical examiner and a team of forensic scientists, in the investigative process',
          'Being available at all times to aid the police in investigations'
        ]
      },
      {
        role: 'Copywriter',
        li: [
          'Technical reports, user manuals, training manuals and any other scientific documentation',
          'Social media content',
          'Persuasive speeches',
          'Public relations materials like press releases, feature articles, products updates and memorandums',
          'Marketing emails',
          'Content idea pitches to interested organizations'
        ]
      },
      {
        role: 'Coordinator',
        li: [
          'Answering phone calls and responding to client inquiries',
          'Creating and exporting data with information regarding each event',
          'Helping plan large events',
          'Creating budgets for each event and allocating funds accordingly',
          'Processing invoices from vendors',
          'Placing reservations for venues, speakers and booths',
          'Inspecting public areas before and after events',
          'Directing custodial and logistical staff',
          'Assisting with promoting brand image on social media',
          'Processing end-of-day reports',
          'Attending events and ensuring the schedule is maintained'
        ]
      },
      {
        role: 'Cook',
        li: [
          'Preparing food by chopping, dicing, slicing, measuring and organizing',
          'Mixing ingredients according to recipes created by the executive chef or restaurant management',
          'Accommodating customer food allergies or substitution requests',
          'Adding garnish or decorative items to dishes',
          'Maintaining a clean and sanitary kitchen',
          'Checking food inventory and restocking items as needed'
        ]
      },
      {
        role: 'Controller',
        li: [
          'Developing a company’s financial strategies and plans',
          'Analyzing financial reporting packages',
          'Acting in a leadership role for the financial accounting department',
          'Developing annual and quarterly budgets',
          'Analyzing the development of the company’s financial state',
          'Communicating a company’s financial state to management',
          'Managing and preparing employee payroll '
        ]
      },
      {
        role: 'Consultant',
        li: [
          'Improving a particular component of a client’s business, such as marketing or sales ',
          'Helping businesses improve their processes, increase productivity and generate more revenue',
          'Offering advice and recommendations on processes and resource allocation',
          'Developing strategic planning with upper-level management and company executives',
          'Developing written marketing plans designed to generate sales and improve brand awareness'
        ]
      },
      {
        role: 'Construction-Worker',
        li: [
          'Testing machinery and equipment to confirm they work properly',
          'Transporting supplies and materials from suppliers and vehicles to the job site',
          'Closely following safety protocols and procedures to maintain the integrity of the project and team',
          'Measuring and cutting lumber, plaster and other building materials to exact specifications',
          'Using hand tools and mechanical tools, such as hammers, saws, screwdrivers, drills and many others',
          'Learning electrical work, plumbing and carpentry to improve skills on the job site'
        ]
      },
      {
        role: 'Construction-Superintendent',
        li: [
          'Creating cost estimates for projects, including supplies, materials and labor costs',
          'Hiring and assigning construction work for each project and maintaining a daily job site log',
          'Monitoring the construction process and making changes as necessary to ensure deadlines are met',
          'Meeting with property owners to discuss the specifications of a construction project',
          'Ordering tools and materials and coordinating the deliveries to conform to work schedules',
          'Preparing and reviewing reports and progress, materials used and costs and adjusting schedules as indicated by the reports'
        ]
      },
      {
        role: 'Construction-Engineer',
        li: [
          'Developing construction project budgets',
          'Gathering resources, including employees, tools, machines and physical materials',
          'Operating machinery and using tools ',
          'Using computer software to plan and design projects',
          'Overseeing progress and safety on construction sites'
        ]
      },
      {
        role: 'Concierge',
        li: [
          'Greet guests at the front desk and be ready make suggestions for local dining and entertainment',
          'Make reservations for guests at local eating or entertainment establishments, arranging for taxi or shuttle services upon request ',
          'Assist in the facilitation of onsite events, such as weddings or corporate events',
          'Assist in answering phones, scheduling wake-up calls and taking reservations as needed',
          'Respond to guest inquiries',
          'Assist with processing and verification of reservation payments as needed',
          'Communicate with maintenance and housekeeping departments to ensure reliability and cleanliness of hotel amenities',
          'Providing information about rooms and hotel amenities',
          'Assist in answering calls from hotel guests and documenting the details of each call for later reference as needed',
          'Promote hotel features and services to guests'
        ]
      },
      {
        role: 'Computer-Technician',
        li: [
          'Setting up new computer systems and installing, maintaining and troubleshooting the software',
          'Ensuring that internet security software is up-to-date and running smoothly',
          'Repairing hardware and servers as necessary',
          'Testing, troubleshooting and implementing new software programs within a company',
          'Providing technical assistance and identifying solutions as necessary',
          'Participating in onboarding for new hires and training non-IT professionals on computers and software'
        ]
      },
      {
        role: 'Computer-Programmer',
        li: [
          'Translating program designs into code: Programmers work closely with software engineers and developers who create plans for applications. They turn these designs into code that computers can follow to execute the programs.',
          'Mastering computer languages: Because they spend most of their working hours writing code, computer programmers must be fluent in at least one language. Most use basic languages like C++, Java and JavaScript regularly, and some also use more contemporary languages like Python, Ruby and Swift.',
          'Borrowing from code libraries: Because computer programmers write hundreds or thousands of lines of code at a time, they often seek more efficient ways to create programs. Most computer programmers refer to code libraries, which contain common lines of code, so they can avoid writing each line anew.',
          'Testing and troubleshoot programs: In addition to writing code, computer programmers also test their programs to ensure that they work correctly. If they find errors, they use troubleshooting methods to find and resolve issues.',
          'Using integrated development environments (IDEs): To write and test in a standard setting that improves productivity and focus, computer programmers use IDEs as they work. Most IDE options include code editors, libraries, debuggers designed to identify and fix errors and object modeling features.'
        ]
      },
      {
        role: 'Computer-Engineer',
        li: [
          'Researching software and computer hardware',
          'Designing and testing computer hardware components, such as processors, circuit boards, memory devices and routers',
          'Writing and testing software for mobile devices and computers',
          'Designing, setting up and testing networks',
          'Managing operating systems',
          'Designing and testing robots',
          'Creating programming to support a range of products, from aircraft components to surgical technology'
        ]
      },
      {
        role: 'Collections-Specialist',
        li: [
          'Identifying accounts with overdue payments and keeping records of the amount owed and the length of the delinquency',
          'Locating debtors and contacting them via phone or mail to address their overdue payments and determine the reason for the outstanding debt',
          'Communicating with the sales department to maintain accurate and updated information on client accounts and payments',
          'Contacting customers to inform on delinquency, encourage on-time payments and set up payment plans that can facilitate good credit',
          'Processing customer payments, account adjustments and customer refunds where appropriate',
          'Reviewing records for accuracy and handling disputes to make sure that account information is entered and maintained appropriately'
        ]
      },
      { role: 'COA-(Certified-Ophthalmic-Assistant)', li: [
          'Obtaining and updating the medical records of patients and gathering any other patient information that is necessary to make a full diagnosis',
          'Performing preliminary eye function examinations, like refraction, which is an eye exam by which an ophthalmic professional determines whether a patient needs prescription eyeglasses or contact lenses',
          'Interpreting medical photography, including ophthalmic imaging, photography and videography, to properly diagnose any eye-related diseases or recognize other abnormalities in the eye.',
          'Administering eye drops to patients’ eyes before examinations',
          'Assisting with procedures, such as LASIK and other eye surgeries',
          'Prepping the procedure room with the correct tools and performing pre-surgery exams and pain management treatments',
          'Providing patient education, including setting up regular appointments and informing them about the medication they will receive, the procedure they will undergo or how to properly use eyeglasses or contact lenses',
          'Completing administrative duties, such as answering phones, scheduling appointments and filling out billing and insurance paperwork, often electronically'
      ] },
      {
        role: 'CNC-Operator',
        li: [
          'Follow all company policies and safety protocols',
          'Set up equipment using proper calibration procedures ',
          'Participate in regular safety and training classes',
          'Strictly follow guidelines for operating machinery',
          'Perform inspections of the work area and machines at the beginning and end of each shift ',
          'Use proper handling techniques to load raw materials and unload castings ',
          'Perform daily and regular cleaning and light maintenance tasks on CNC machinery',
          'Use specialized instruments to ensure quality requirements'
        ]
      },
      { role: 'CNA-(Certified-Nursing-Assistant)', li: [
          'Assisting patients with daily living activities, such as meal delivery and application of bedpans',
          'Providing help to patients and managing their personal hygiene',
          'Recording and checking patient vital signs on a daily basis',
          'Offering general adjunct care to patients'
      ] },
      {
        role: 'Clinical-Social-Worker',
        li: [
          'Meeting with clients to assess their histories, conditions and needs',
          'Interviewing clients’ families and doctors',
          'Creating a treatment strategy, using methods such as behavior therapy and psychotherapeutic techniques',
          'Collaborating with doctors, other health professionals and support groups',
          'Monitoring clients’ responses to treatment',
          'Administrative and record-keeping duties',
          'Counseling individuals and families going through difficult situations such as illness, divorce, unemployment or substance abuse'
        ]
      },
      {
        role: 'Clinical-Psychologist',
        li: [
          'Interviewing, observing, assessing and experimenting on patients to diagnose their mental or behavioral disorder',
          'Giving personality and intelligence tests and looking for behavioral patterns',
          'Developing individualized treatment plans and behavior modification programs for patients',
          'Counseling patients and their families',
          'Researching behaviors and theories and writing papers on their findings',
          'Prescribing medications (only clinical psychologists in Idaho, Illinois, Iowa, Louisiana and New Mexico are legally allowed to prescribe medications)'
        ]
      },
      {
        role: 'Clerk',
        li: [
          'Filing and maintaining paper and electronic documents',
          'Managing office supplies ',
          'Taking minutes of meetings and distributing these to relevant parties',
          'Signing for deliveries',
          'Typing and proofreading documents, such as reports and memos',
          'Maintaining office equipment, such as printers and photocopiers',
          'Scheduling client appointments and meetings',
          'Organizing travel and accommodation arrangements for staff',
          'Maintaining financial records'
        ]
      },
      {
        role: 'Civil-Engineer',
        li: [
          'Communicating with a wide range of clients, suppliers, subcontractors and architects',
          'Resolving any issues that occur in the design and development processes',
          'Overseeing the purchase of necessary equipment and materials',
          'Ensuring projects meet health and safety regulations, as well as any other legal requirement',
          'Evaluating a project’s sustainability and environmental impact',
          'Completing public projects on time and within the imposed budget'
        ]
      },
      {
        role: 'Chiropractor',
        li: [
          'Assessing patients’ pain, discomfort, tension or other symptoms throughout the body',
          'Treating patients with a variety of health or wellness conditions, including those related to injuries, body weight, stress, sleep patterns and many others',
          'Manipulating the body to relieve tension in joints, loosen muscles and ligaments and realign the skeletal system',
          'Recommending and performing treatments, such as alignments and hot or cold compresses',
          'Advising patients on techniques and at-home exercises to improve posture, reduce strain and decrease tension',
          'Meeting with patients on a regular basis to perform a series of treatments or experiment with different treatments in order to alleviate symptoms',
          'Promoting overall wellness by encouraging patients to eat a balanced diet, exercise regularly and maintain a healthy body weight'
        ]
      },
      {
        role: 'Childcare-Provider',
        li: [
          'Teach children simple concepts: Childcare providers are responsible for instructing children about fundamentals like sharing, manners and hygiene. Some childcare professionals also follow curricula and teach children basics like numbers and the letters of the alphabet.',
          'Oversee activities: These professionals also supervise educational and recreational activities, such as solving puzzles or using playground equipment. They may also design activities that encourage children to develop their motor skills.',
          'Track children’s progress: Childcare providers provide parents with regular progress reports, which may be daily, weekly or monthly. These reports help parents assess what their children are learning and accomplishing.',
          'Look for developmental issues: As nannies and daycare providers care for children, they look for early signs of developmental problems. They may report any cognitive, emotional or physical problems that they observe to parents.',
          'Prepare nutritious meals: To help children maintain good health, many childcare providers prepare nutritious meals and snacks. While nannies may follow parents’ food preparation instructions, daycare providers often prepare meals determined by the facility.'
        ]
      },
      {
        role: 'Chemical-Engineer',
        li: [
          'Research existing manufacturing processes: Chemical engineers meet with teams or clients to determine manufacturing needs and goals. They research existing processes and consider methods for improving productivity, lowering costs or meeting other objectives.',
          'Design new equipment and processes: After conducting research, chemical engineers use chemical reactions to develop new ways to separate the basic components of elements like liquids and gases. They also design and use equipment to perform these processes.',
          'Test and troubleshoot manufacturing designs: Once they complete the research and development phases, chemical engineers build prototypes and test their designs. They resolve problems with the processes or equipment and develop modified designs.',
          'Advise about safety protocols: Because they work with chemicals and processes that may be dangerous, chemical engineers oversee safety procedures and comply with environmental regulations. They may advise colleagues about protocols or change equipment designs to eliminate safety issues.',
          'Collaborate with engineering teams: Chemical engineers often undertake large projects with teams. They work closely and communicate regularly with other chemical engineers,  project managers and manufacturing colleagues.'
        ]
      },
      {
        role: 'Chef',
        li: [
          'Creating the weekly staff schedule and managing any staff vacation requests',
          'Adhering to the kitchen budget created by the manager',
          'Holding staff meetings to review the latest policies, procedures and menu changes',
          'Making sure all kitchen staff members follow sanitation and safety practices',
          'Staying current on all new industry trends'
        ]
      },
      {
        role: 'Charge-Nurse',
        li: [
          'Coordinate with physicians who need assistance ',
          'Detect patient issues that could result in injuries or other difficulties',
          'Prepare and maintain schedules ',
          'Monitor admissions and discharges',
          'Order and monitor supplies',
          'Oversee policy, safety and procedure compliance '
        ]
      },
      {
        role: 'Certified-Management-Accountant',
        li: [
          'Making investment decisions',
          'Mentoring junior accountants',
          'Creating and editing documents related to the company finances',
          'Presenting ideas for financial improvement to higher management',
          'Assessing financial risk'
        ]
      },
      {
        role: 'Caterer',
        li: [
          'Meeting with clients to help choose a menu',
          'Estimating the cost of food and personnel for events, often quoted at a per-person price',
          'Developing a clear and concise contract that commits you and the client to specified terms',
          'Visiting event sites prior to an event to plan the layout and examine the kitchen facilities',
          'Planning ingredient amounts to prevent overages and waste',
          'Communicating with food and equipment rental vendors to order and receive necessary supplies',
          'Cooking and assembling menu items, usually off-site in a catering kitchen designed for commercial food preparation, including plating with decorative elements, wrapping and packing for transport',
          'Transportation of all food, serving and decorative items to the event venue',
          'Complying with regulations for food safety and handling '
        ]
      },
      {
        role: 'Cashier',
        li: [
          'Operating cash registers, product scanners and payment machines to facilitate customer purchases',
          'Collecting payments from customers',
          'Learning the layout of the store and providing customers with quick responses to questions about product locations',
          'Helping bag customer purchases as they’re scanned',
          'Completing simple mental mathematics for calculating tax and issuing change for purchases'
        ]
      },
      {
        role: 'Caseworker',
        li: [
          'Performing home visitations to examine their client’s living circumstances',
          'Conducting psychosocial evaluations',
          'Documenting and reporting abuse, neglect and other illegal activity',
          'Offering public resources and referrals that can help clients improve their situations',
          'Counseling clients on how to create a safer, healthier and more productive home environment',
          'Maintaining case records and attending case summary reviews and other proceedings'
        ]
      },
      {
        role: 'Carpenter',
        li: [
          'Choosing and assessing materials to ensure they are free of defects',
          'Meeting their client’s needs by following building plans and blueprints',
          'Cutting, shaping and measuring plastic, wood and other materials',
          'Using cranes and rigging hardware to install or level framework'
        ]
      },
      {
        role: 'Caregiver',
        li: [
          'Keeping the patient’s safety and well-being at the forefront of all duties',
          'Assisting patients with personal care, including bathing, dressing, administering medication, eating and attending doctor’s appointments',
          'Monitoring patient medications, reporting any changes in the patient’s health and updating health charts as needed',
          'Communicating with patients’ families and doctors concerning their medical and emotional condition'
        ]
      },
      {
        role: 'Cardiologist',
        li: [
          'Meeting with patients and listening to them describe the symptoms they experience',
          'Performing physical examinations',
          'Ordering or performing diagnostic tests according to patient symptoms and/or exam',
          'Developing treatment plans based on individual patient conditions',
          'Referring patients to cardiovascular surgeons, if the condition requires it'
        ]
      },
      {
        role: 'Cardiac-Sonographer',
        li: [
          'Performing transthoracic echocardiograms, transesophageal echocardiograms and bubble studies to evaluate patients’ hearts',
          'Evaluating medical images for clarity and sending the best pictures to cardiologists',
          'Supporting cardiologists in their diagnoses by reviewing images with them and highlighting any abnormalities or areas of concern',
          'Scheduling medical imaging appointments for patients',
          'Explaining medical imaging testing procedures to patients and answering any questions they have about the tests',
          'Maintaining ultrasound and echocardiogram machines, including following setup and storage procedures, calibrating these machines, cleaning equipment and reporting issues with machines to supervisors'
        ]
      },
      {
        role: 'Car-Salesperson',
        li: [
          'Welcoming new guests as they arrive on the dealership’s lot',
          'Conversing with customers to understand what they are seeking in their new car',
          'Suggesting various car models to the guest',
          'Taking the customer’s driver license information before a test drive',
          'Riding along with the customer and explaining vehicle features during the test drive',
          'Developing a strong understanding of the current car inventory',
          'Following up with customers after they leave the car lot',
          'Beginning the sales agreement process and partnering with the finance team to complete the customer’s transaction',
          'Working with the marketing team to reach new clients',
          'Assisting with setting up display cars and moving vehicles around the lot'
        ]
      },
      {
        role: 'Call-Center-Representative',
        li: [
          'Greeting customers over the phone',
          'Delivering appropriate action for each call by answering their questions, completing a sale or transferring the call to a specialized department if necessary',
          'Ensuring customer satisfaction is maintained following the company’s guidelines',
          'Attending training to stay updated on the product or service, company policy changes and improved methods for handling customer inquiries',
          'Following company procedures to determine if the customer’s query can be resolved immediately or if it needs managerial assistance',
          'Using provided software to complete orders and update customer’s information for company records'
        ]
      },
      {
        role: 'Buyer',
        li: [
          'Selecting and ordering products and authorizing payments based on contractual agreements with suppliers or manufacturers',
          'Assisting supply chain managers with maintaining proper inventory levels for regularly used supplies ',
          'Working with inventory management to ensure all deliveries are fulfilled and reporting any missing or back-ordered items',
          'Communicating with the field management team to ensure all field purchase orders are correct',
          'Developing an accurate and efficient monitoring system for open purchase orders and delivering weekly reports to management with documentation of closed purchase orders'
        ]
      },
      {
        role: 'Busser',
        li: [
          'Clearing plates, glasses, napkins and used silverware from tables',
          'Setting tables for the next customers',
          'Refilling items such as salt and pepper shakers and condiment bottles if they are missing or empty',
          'Alerting servers if guests at a table have empty glasses that need to be refilled',
          'Refilling glasses if servers are busy ',
          'Cleaning up spills',
          'Serving food, if the restaurant is busy'
        ]
      },
      {
        role: 'Business-Systems-Analyst',
        li: [
          'Communicating with all departments: They may need to talk to managers in each department about any issues that arise that affect the team meeting goals or deadlines. Business systems analysts may need to schedule routine meetings with all managers.',
          'Researching business procedures: In this role, you may need to analyze the current company procedures and practices to determine how well they are working. You will likely also need to research new methods to continue to grow the business.',
          'Preparing detailed reports: Business systems analysts may need to prepare detailed reports based on their research and findings to present to their supervisors. They will gather large amounts of data and put these into charts, graphs or other formats that employees or clients can easily understand.',
          'Setting budgets: As a business systems analyst, you will likely be in charge of analyzing a company’s finances and finding areas to save money. You will set budgets for each department to follow and verify that the departments are staying within their budget.',
          'Making recommendations for changes: Business systems analysts must feel comfortable recommending new changes within the company and know-how to support their claims. They should also be able to answer any client questions regarding these proposed changes.',
          'Improving efficiency: They will review a company’s computer programs to recommend ways they can be more efficient with their work. Business systems analysts may suggest new programs to use to replace the current ones.'
        ]
      },
      {
        role: 'Business-Intelligence-Analyst',
        li: [
          'Regularly evaluating the company’s resources to ensure progress toward goals',
          'Keeping the business intelligence tools and the company’s databases updated',
          'Developing strategies for business intelligence and data gathering',
          'Analyzing competitors and their use of business intelligence',
          'Successfully communicating their findings to the company’s upper management'
        ]
      },
      {
        role: 'Business-Consultant',
        li: [
          'Assisting with identifying marketing needs and developing a strategy to increase brand awareness and customer acquisition',
          'Educating and offering resources on information technology, sales and business regulations',
          'Identifying funding and applying for loans to finance the business',
          'Developing a strategic business plan with short and long-term business goals',
          'Reviewing accounting and budgeting and making recommendations for improvement',
          'Creating hiring and training practices to bring on qualified candidates'
        ]
      },
      {
        role: 'Business-Analyst',
        li: [
          'Identify the information technology needs of the organization',
          'Implement new IT programs and procedures to improve the efficiency of the business',
          'Create financial reports and IT budgets',
          'Hire, monitor and oversee information technology team members',
          'Interpret data to make informed business IT-related recommendations'
        ]
      },
      {
        role: 'Building-Maintenance-Technician',
        li: [
          'Responding to supervisor or tenant maintenance requests',
          'Diagnosing and repairing basic HVAC, plumbing, electrical and other building issues',
          'Conducting general maintenance tasks such as painting, flooring repair, carpentry, plastering, drywall repair, window washing and more',
          'Completing landscaping, pool maintenance and pest control',
          'Performing safety checks and routine maintenance on systems and equipment',
          'Keeping carbon monoxide and smoke detectors and other safety systems functional',
          'Installing or setting up new equipment or furniture',
          'Making repair appointments for electricians or mechanics when needed',
          'Doing inventory on cleaning and repair supplies',
          'Keeping records of inspections and work done'
        ]
      },
      {
        role: 'Brand-Ambassador',
        li: [
          'Understanding the brand’s mission, vision, services and products to represent the brand’s personality and voice at events',
          'Working branded events and filling out post-event feedback reports to give the company-specific information about event demographics, customer feedback and sales during the event',
          'Working with the company’s marketing team to understand and implement the brand marketing strategy at events',
          'Creating and maintaining relationships with merchants and vendors that sell the company’s products. '
        ]
      },
      {
        role: 'Border-Patrol-Agent',
        li: [
          'Tracking illegal immigration',
          'Monitoring traffic entering and leaving the country',
          'Keeping land and water borders secure',
          'Checking travel paperwork and passports',
          'Using a variety of technological tools, such as electronic sensors, low-light television systems, infrared scopes and aircraft'
        ]
      },
      {
        role: 'Bookkeeper',
        li: [
          'Receiving, recording and properly handling cash, checks and vouchers from clientele',
          'Creating reports on the company’s financial transactions for executives and members of other departments to use',
          'Auditing financial records to ensure that no errors have been made and that the books are balanced',
          'Noting any inconsistencies to allow for investigations to reconcile inaccuracies',
          'Processing payroll and ensuring that all staff are compensated the correct amounts and through their preferred methods',
          'Receiving invoices from outside vendors and authorizing payments via the correct methods and at the correct time'
        ]
      },
      { role: 'Board-Certified-Behavior-Analyst-(BCBA)', li: [
          'Meeting with patients to observe and assess their behavior',

          'Meeting with families, teachers or doctors to discuss the patient’s treatment and progress and recommend ways to address behavioral issues',
          
          'Developing individual plans to correct, maintain or improve certain behaviors',
          
          'Helping clients set and meet behavior goals',
          
          'Keeping detailed notes of patient meetings and progress',
          
          'Using methods such as reinforcement and conditioning to correct or reduce aggressive, harmful and anti-social behaviors and to encourage positive behaviors',
          
          'Doing research and applying findings to their work'
      ] },
      {
        role: 'Biostatistician',
        li: [
          'Work with data scientists and other statisticians to develop and implement research studies',
          'Ensure accurate clinical trial results by monitoring the implementation of research studies',
          'Write research proposals based on collected data',
          'Present research findings to the scientific community',
          'Those working as teachers or university instructors divide their time between classroom instruction, research and fieldwork'
        ]
      },
      {
        role: 'Billing-Specialist',
        li: [
          'Submit reimbursement requests to state, private and employer insurance',
          'Work with self-paying patients to develop payment arrangements',
          'Ensure proper records handling and fast payment responses by entering data accurately and in a timely manner',
          'Follow up on insurance claims, including denials, payments and requests for more information ',
          'Consult with patients’ families as needed',
          'Post payments immediately when received and document payment records and issues as they occur',
          'Initiate private pay collections after insurance cancellation, denial or other issues',
          'Research and resolve client billing questions or issues',
          'Assist patients and their families with applying for healthcare credit programs and other financial solutions'
        ]
      },
      {
        role: 'Billing-Clerk',
        li: [
          'Action credit memos',
          'Create and send out invoices to customers',
          'Issue customers with statements',
          'Ensure that client files are updated with payments or credits',
          'Highlight any discrepancies between shipping logs and invoice accounts.',
          'Keep the contact information files updated for all customers',
          'Enter invoices into our invoicing web platform',
          'Initiate and establish new procedures for billing tasks',
          'Handle billing inquiries from customers'
        ]
      },
      {
        role: 'Benefits-Coordinator',
        li: [
          'Research and develop benefits plans: Benefits coordinators often research existing packages and use collected data to create new plans. During this research and development phase, they calculate expenses for employers, advantages for employees and potential risks. They also monitor trends so they can recommend benefits that are likely to attract qualified candidates.',
          'Administer retirement, insurance, wellness and leave programs: These HR professionals use software programs to assign benefits and ensure employees receive the correct retirement, wellness and insurance plans. They answer employee questions and advise them about choosing the most beneficial options. Benefits coordinators also help employees understand leave policies and oversee COBRA, or the Consolidated Omnibus Budget Reconciliation Act, and Family and Medical Leave Act usage.',
          'Collaborate with benefits vendors: Benefits coordinators often work with insurance and retirement plan providers and other third-party vendors. Together, they ensure accurate employee enrollment and benefit delivery. ',
          'Ensure legal compliance for benefits programs: Because many benefits are subject to local, state and federal regulations, benefits coordinators monitor compliance regularly. They track new regulations and recommend policy changes to maintain legality.'
        ]
      },
      {
        role: 'Behavioral-Therapist',
        li: [
          'Researching and designing a program and schedule of therapy, tailored for each client',
          'Helping the client develop the skills that they will need to be successful in their treatment',
          'Acting as a mediator and point of communication between clients and their friends and families in cases of rehabilitation',
          'Keeping accurate notes and documentation for their client consultations'
        ]
      },
      {
        role: 'Banquet-Server',
        li: [
          'Prepare event spaces by setting tables with tablecloths and place settings, setting up buffets and removing all service items like extra glassware and service utensils',
          'Carry large trays or multiple plates of hot food to serve guests',
          'Refill beverages as needed, remove each course of dinnerware and replenish flatware as needed',
          'Maintain high standards of safety and cleanliness and wash hands frequently to avoid cross-contamination',
          'Perform post-event cleaning tasks and breakdown of service',
          'Adhere to grooming and uniform standards'
        ]
      },
      {
        role: 'Bank-Teller',
        li: [
          'Serving as the first point of contact for the bank, including greeting customers in a friendly and professional manner',
          'Performing administrative duties, such as answering phones, managing emails, keeping a clean lobby and workspace and organizing files',
          'Balancing the cash drawer at the beginning and/or end of a shift',
          'Processing customer payments, withdrawals, transfers and other transactions',
          'Exchanging foreign currency according to current and consistently updating international rates',
          'Provide customers information on bank services and products, including loans and interest rates, account types and credit options',
          'Helping customers order products, such as checks, credit cards and debit cards'
        ]
      },
      {
        role: 'Automotive-Technician',
        li: [
          'Diagnosing vehicle problems using experience, test driving and working with specialized computers that communicate with vehicle electronics',
          'Interpreting vehicle diagnostic codes to assess errors and causes of vehicle breakdown and planning how to proceed with the repair',
          'Working with specialized tools and equipment to repair or replace broken parts. They may use a lift to raise the vehicle to work underneath it, pneumatic air tools for loosening and tightening of parts, a lathe for brake rotors and hand wrenches to remove parts.',
          'Performing required inspections and manufacturer-recommended preventative maintenance, such as oil changes, tire rotations, tune-ups, fluid level checks and following a service checklist at specified mileage intervals. ',
          'Specializing and working in just one area of expertise such as a brake work technician, a front-end technician or a race car mechanic for a team'
        ]
      },
      {
        role: 'Automotive-Engineer',
        li: [
          'Researching and producing vehicle components',
          'Generating cost estimates and vehicle descriptions',
          'Evaluating environmental and safety practices of certain projects',
          'Conducting vehicle analysis on vehicle behavior under specific conditions',
          'Creating prototypes of vehicle parts to test before production ',
          'Interacting with clients on engineering questions on an as-needed basis',
          'Supervising interns and entry-level staff to ensure completion of projects ',
          'Delivering presentations to internal and external stakeholders on design concepts'
        ]
      },
      {
        role: 'Auto-Mechanic',
        li: [
          'Performing routine vehicle maintenance, including part lubrication and fluid changes',
          'Checking each vehicle’s computer and electronic system and repair or update if necessary',
          'Rotating or changing tires',
          'Providing accurate price quotes for work, including the cost of parts and labor',
          'Keeping comprehensive records on the work completed for each customer',
          'Making sure all tools and equipment are functional and in good condition'
        ]
      },
      {
        role: 'Auditor',
        li: [
          'Computing taxes owed and preparing tax returns',
          'Inspecting accounting books and systems for efficiency and proper accounting procedures',
          'Using existing auditing platforms to analyze claims and ensure proper funds for each claim',
          'Working with the compliance manager to ensure they bill and administer claims in accordance with health insurance requirements and legal framework',
          'Identifying persistent claims error trends and reporting those trends to management',
          'Suggesting ways to reduce costs, improve accounting systems and work more efficiently'
        ]
      },
      {
        role: 'Audiologist',
        li: [
          'Diagnosing a patient’s hearing and auditory symptoms through the use of testing machinery and examinations',
          'Assessing a patient’s balancing problems',
          'Analyzing a patient’s auditory symptoms to try and determine their source, which could include mental illness, physical illness or a combination',
          'Developing treatment plans for patients depending on their needs, making use of physical hearing aids, medication, exposure treatments and specialized therapy',
          'Referring a patient to a psychiatrist or psychologist for specialized therapy if symptoms are not physical in nature'
        ]
      },
      {
        role: 'Attorney',
        li: [
          'Explaining legal issues to clients and advising them on any ongoing litigation that involves them',
          'Researching all elements of a case, such as accident and police reports, elements of the legal system relevant to the case or previously filed pleadings.',
          'Develop various strategies on behalf of their clients, with the purpose of finding timely and cost-effective ways of managing legal issues.',
          'Preparing legally binding documents, such as contracts, wills and deeds',
          'Directly defending the client’s best interests in court, before a judge or jury',
          'Assist clients in discussing plea bargains and other agreements with the district attorney’s office',
          'Advise clients on their public behavior while legal charges are pending'
        ]
      },
      {
        role: 'Athletic-Trainer',
        li: [
          'Injury prevention through education',
          'Assessment and diagnosis of acute or chronic patient injuries',
          'Development and implementation of rehabilitative treatment plans',
          'Collaboration with physicians and other medical professionals ',
          'Maintenance of medical records to document patient progress',
          'Teaching and modeling of safe, effective exercises'
        ]
      },
      { role: 'Astrophysicist', li: [
          'Develop astrological theories and implement research techniques to test those theories',
          'Keep up to date with the latest research in the industry',
          'Contribute data and research to the field',
          'Analyze and develop programs and tools to further assist astrological research',
          'Facilitate scientific experiments to learn more about the universe'
      ] },
      {
        role: 'Astronomer',
        li: [
          'Planetary astronomy**: **The focus of this field is on discovering new planets and studying known planets.',
          'Stellar astronomy**:** Stellar astronomers study the stars, and other phenomena relating to stars, such as black holes, pulsars, nebulae and white dwarfs.',
          'Solar astronomy**:** This specialized field focuses on the sun’s systems and relating phenomena, which include atmospheres, storms and magnetic fields.',
          'Galactic astronomy**: **Galactic astronomers investigate galaxies, such as the Milky Way.',
          'Cosmology**: **This field looks at the entire universe to understand its nature, origin and how it might evolve. '
        ]
      },
      {
        role: 'Assistant-Controller',
        li: [
          'Reviewing financial data quarterly and consulting with the vice president about discrepancies or problems',
          'Assisting in the issuance and submission of invoices',
          'Reconciling accounts quarterly',
          'Establishing internal control systems to prevent errors in financial statements',
          'Preparing written budgets and reports based on the customers’ needs',
          'Ensuring that the customers adhere to the regulatory and in-house standards and best practices',
          'Delegating data entry tasks with junior accounting staff',
          'Coordinating financial audits with the vice president and chief financial officer (CFO)'
        ]
      },
      {
        role: 'Assistant-Accountant',
        li: [
          'Assisting with daily operations and responsibilities of the financial department',
          'Preparing bank deposits',
          'Creating, updating and maintaining financial documents for individual clients and companies by updating general ledgers and balance sheets',
          'Making sure all accounting documents in a firm are up to date'
        ]
      },
      {
        role: 'Assembler',
        li: [
          'Read blueprints and verify the parts required before assembly',
          'Immediately inform supervisors of any part or equipment defects ',
          'Communicate with other stations on the assembly line to ensure speed and accuracy',
          'Maintain and service all equipment as necessary',
          'Conserve resources and supplies to minimize waste',
          'Verify specifications by measuring completed component',
          'Maintain safe and clean working environment, comply with procedures and regulations',
          'Complete production and quality forms'
        ]
      },
      {
        role: 'Art-Therapist',
        li: [
          'Complete an initial assessment to determine a client’s needs and complete follow-up assessments regularly to determine the effectiveness of treatment',
          'Develop an individualized treatment plan that incorporates creative expression, psychotherapy and counseling techniques',
          'Establish goals for individual sessions and long-term objectives for therapy',
          'Use art to open discussions regarding the client’s individual challenge',
          'Instruct clients on using different mediums, such as paint, clay and yarn',
          'Customize programs for groups such as schools, nursing homes, wellness centers, prisons, hospitals, military bases and shelters'
        ]
      },
      {
        role: 'Architectural-Engineer',
        li: [
          'Collaborating with architects to assist with the design process',
          'Examining blueprints and design sketches to identify any potential safety risks so that they can be rectified prior to construction ',
          'Analyzing design schemes for quality of life concerns, such as a building with insufficient ducts for the HVAC system or improper soundproofing on a home near a busy road',
          'Assessing the structural integrity of a proposed or active construction project to reduce the risk of erecting an unsafe building',
          'Working with architects, civil engineers or construction crews to develop solutions to structural problems during construction',
          'Understanding all government compliance regulations and ensuring that any projects fall within the accepted guidelines and rules'
        ]
      },
      {
        role: 'Architect',
        li: [
          'Meeting with clients and assessing the project’s purpose, requirements and budget',
          'Providing cost estimates, approximate timelines and services such as site selection and environmental impact studies',
          'Developing construction plans, which include scaled drawings and structure specifications using computer-aided design and drafting, building information modeling or hand drawings',
          'Drafting and negotiating construction contracts',
          'Assisting clients as they collect construction bids and choose contractors',
          'Visiting construction sites to make sure contractors are following the architectural plans accurately'
        ]
      },
      {
        role: 'Animator',
        li: [
          'Collaborating with writers, directors, producers and fellow animators to develop character traits, settings, actions, plot points and other story elements that inform the animation',
          'Drafting initial designs of assets and applying feedback from the creative team to develop and refine them',
          'Using computer software and tools, such as a digital drawing tablet, to make animation composites, finalize designs and create scenes',
          'Creating motions, facial expressions and other personalized details for characters, especially those that match dialogue and sound effects',
          'Selecting colors, shapes and artistic styles for scenery and background items that effectively inform the story and complement the important characters and actions'
        ]
      },
      {
        role: 'Anesthesiologist',
        li: [
          'Administer pain medications ',
          'Implement medical procedures that control pain',
          'Monitor patients before, during and after they administer anesthesia  ',
          'Detect adverse reactions and address complications ',
          'Determining the safest and most appropriate type of anesthesia to administer ',
          'Attend to patients after they regain consciousness '
        ]
      },
      {
        role: 'Analyst',
        li: [
          'Determining which data needs tracking to reflect business performance',
          'Using statistical methods to collect data across business sectors',
          'Measuring the effectiveness of business strategies',
          'Writing easy-to-interpret reports',
          'Developing a plan to improve operational processes',
          'Working with the management team to implement changes'
        ]
      },
      {
        role: 'Airline-Pilot',
        li: [
          'Communicating with air traffic control about the flight plan, air traffic, weather and other factors that impact a flight',
          'Monitoring engines, fuel levels and other systems on the aircraft during flights',
          'Verifying the fuel supply is sufficient and the weather is acceptable for takeoff',
          'Flying an aircraft using visual references and instruments',
          'Communicating with airline personnel and passengers regarding weather, changes in flight status or information regarding takeoff and landing'
        ]
      },
      {
        role: 'Air-Traffic-Controller',
        li: [
          'Monitor and control aircraft movement: Air traffic controllers use computers and monitors to observe and track aircraft within their jurisdiction. They ensure aircraft operate efficiently and safely. Tower controllers specialize in monitoring aircraft on the ground, while approach and departure controllers control movement during takeoff and landing. En-route controllers direct aircraft movement between airports’ airspace.',
          'Provide essential information to pilots: Air traffic controllers convey critical data to pilots, such as severe weather in their path, runway issues and other vital information for safe operation. ',
          'Instruct pilots: In many instances, air traffic controllers instruct pilots when and where to operate aircraft. Pilots typically receive permission to land or depart from air traffic controllers.',
          'Oversee aircraft control transfers: Air traffic controllers are typically responsible for monitoring aircraft within certain airspace limitations. When aircraft enter or leave these limitations, controllers must confirm the transfer of control.',
          'Follow emergency protocol: When emergency situations occur, air traffic controllers must follow procedures. They must communicate the details of the issue to airport staff and other stakeholders or officials within specific time frames.'
        ]
      },
      {
        role: 'Aesthetician',
        li: [
          'Administer cosmetic treatment methods, such as facials and chemical peels',
          'Recommend cosmetics or skin care products',
          'Provide advice and information based on skin types',
          'Offer advice for at-home skin care routines'
        ]
      },
      {
        role: 'Aerospace-Engineer',
        li: [
          'Design aircraft and spacecraft: Aerospace engineers meet with clients to assess their needs. Then they use blueprints and digital design applications to develop aircraft and spacecraft components that meet client requirements.',
          'Test and troubleshoot aerospace designs: After creating initial designs, aerospace engineers develop prototypes for testing purposes. After rigorous testing, they determine whether the designs operate safely and achieve the desired objectives.',
          'Oversee the manufacturing process: Once they design and test components, aerospace engineers provide detailed instructions to manufacturing facilities. They often supervise the manufacturing process, undertake additional testing and ensure the final product meets quality standards.',
          'Research and develop new technology**:** Although aerospace engineers use engineering principles to design components and vehicles, they constantly strive to develop new technology. In many cases, these new developments can be applied to commercial aviation, national defense and other aspects of the aerospace industry.',
          'Collaborate with project teams: Aerospace engineers often work with large project teams. They collaborate with project managers, other engineers and manufacturers to complete large-scale projects within predetermined time frames and budgets.'
        ]
      },
      {
        role: 'Aeronautical-Engineer',
        li: [
          'Designing reliable and efficient aircraft and aeronautical machines for clients',
          'Addressing issues that arise during the manufacturing process of the aircraft',
          'Ensuring that your aircraft meets the environmental and safety requirements',
          'Inspecting existing aircraft and making suggestions for improvements'
        ]
      },
      {
        role: 'Administrator',
        li: [
          'Keeping track of ongoing projects and creating measurable performance indicators',
          'Analyzing the costs and personnel needs for each of the company’s projects',
          'Creating and updating the customer information database',
          'Making sure the working environment complies with internal company policies and regulations',
          'Maintaining a good working relationship with the company’s customers'
        ]
      },
      {
        role: 'Administrative-Officer',
        li: [
          'Hiring and managing staff',
          'Setting department or hospital goals, overseeing finances and developing schedules and budgets',
          'Ensuring the organization’s policies and procedures align with current laws',
          'Communicating with management as well as a board of directors',
          'Examining current care standards and implementing new ways to provide quality care'
        ]
      },
      {
        role: 'Administrative-Clerk',
        li: [
          'Organizing and maintaining files so they are available to all staff members',
          'Checking inventory regularly and ordering new supplies from vendors',
          'Occasional travel to perform errands, such as delivering files',
          'Performing general bookkeeping',
          'Researching and preparing reports or presentations'
        ]
      },
      {
        role: 'Administrative-Assistant',
        li: [
          'Managing a complex calendar of professional meetings, personal appointments and travel for several individuals',
          'Answering and transferring phone calls, appropriately forwarding messages and following up on inquiries',
          'Handling incoming correspondence, including emails, memos, faxes and mail, sometimes requiring a high level of discretion',
          'Conducting industry-specific research, organizing important files and drafting supporting documentation for presentations, conferences and meetings',
          'Preparing and proofreading reports and other industry documents relevant to the company, organization or specific group, sometimes involving data analysis',
          'Tracking office inventory, including ordering supplies, coordinating deliveries and managing vendor contracts'
        ]
      },
      {
        role: 'Adjunct-Professor',
        li: [
          'Develop and distribute syllabi for course materials and timelines',
          'Deliver lectures during class time',
          'Answer students’ questions and assist them when they need help',
          'Administer and grade quizzes and exams',
          'Review essays and other coursework',
          'Post homework assignments and grades on the institution’s online grading system'
        ]
      },
      {
        role: 'Acupuncturist',
        li: [
          'Stimulating specific points in the body by inserting needles',
          'Treating a variety of medical conditions, such as chronic pain, nausea and substance withdrawal',
          'Using small electric charges in addition to needles',
          'Discussing lifestyle issues (such as diet and stress) with clients',
          'Regularly reviewing medical reports and journals',
          'Working on marketing strategies to attract more clients',
          'Networking with other health and medical professionals'
        ]
      },
      {
        role: 'Actuary',
        li: [
          'Designing new insurance policies, determining what coverage is included and the price for the policy',
          'Determining the probability and estimated cost of events like illnesses, injuries and accidents',
          'Presenting research findings to clients, shareholders, government officials and company executives',
          'Calculating how different insurance policies would pay out in various situations and creating charts to demonstrate them',
          'Consulting with market research analysts to determine the demand for new insurance products'
        ]
      },
      {
        role: 'Accounts-Receivable-Specialist',
        li: [
          'Receive incoming billing and invoicing-related mail',
          'Answer clients’ billing questions ',
          'Keep management informed of any specific issues ',
          'Initiate collections on past-due accounts',
          'Maintain accounting ledgers accurately and according to best practices',
          'Handle all special billing situations',
          'Periodically audit ledgers to ensure accuracy of billing addresses and invoice numbers'
        ]
      },
      {
        role: 'Accounts-Payable-Specialist',
        li: [
          'Maintain petty cash accounts and log all outgoing disbursements ',
          'Monitor vendor payment agreements to find discounts to reduce invoice amounts ',
          'Pay sales tax on invoices and make note of each tax payment made',
          'Keep track of credits owed to the company',
          'Apply credits to vendor payments as needed ',
          'Reconcile payable reports monthly to confirm that all amounts paid were accurate '
        ]
      },
      {
        role: 'Accounts-Assistant',
        li: [
          'Maintaining electronic financial records',
          'Assisting financial departments with administrative tasks',
          'Resolving accounting discrepancies',
          'Processing bills for payment',
          'Processing client and vendor invoices',
          'Manage and update the organization’s accounts database'
        ]
      },
      {
        role: 'Accounting-Clerk',
        li: [
          'Reconciling daily balance sheets',
          'Perform and monitor bank deposits and transfers',
          'Gather and organize financial data for periodic audits',
          'Track company credit card charges, including payment discrepancies, refunds, returns and miscellaneous charges',
          'Maintain orderly financial filing systems',
          'Perform monthly account reconciliation and prepare related reports for management',
          'Track tax payments and compile information for tax filing',
          'Assist with other accounting projects in the office as needed'
        ]
      },
      {
        role: 'Accounting-Assistant',
        li: [
          'Provide general support to the accounting department',
          'Prepare and process invoices, sales receipts and customer payments',
          'Process new vendors paperwork including W-9 forms',
          'Update general ledger',
          'Reconcile payroll hours',
          'Prepare and distribute employee checks',
          'Prepare purchase orders for approval and fulfillment',
          'Scan and file accounting documents',
          'Help process accounts payable and receivable checks and payments',
          'Routine bookkeeping'
        ]
      },
      {
        role: 'Accountant',
        li: [
          'Perform monthly, quarterly and annual accounting activities including reconciliations of bank and credit card accounts, coordination and completion of annual audits and reviewing financial reports/support as necessary',
          'Analyze and report on financial status including income statement variances, communicating financial results to management, budget preparation and analysis',
          'Documents financial transactions',
          'Recommends financial actions by analyzing accounting options',
          'Improve systems and procedures and begin corrective actions ',
          'Oversee taxes and abide by federal regulations '
        ]
      },
      {
        role: 'Account-Representative',
        li: [
          'Familiarizing yourself with all current company accounts',
          'Communicating with clients and resolving client issues or complaints',
          'Monitoring company and business email, messages and other communication systems and promptly responding to clients',
          'Creating and distributing invoices and recording all transactions relating to client payments',
          'Auditing all client files quarterly to maintain accurate record-keeping',
          'Collaborating internally across multiple company departments including marketing, accounting and management',
          'Prospecting, making presentations and closing sales on new client accounts and continuing to service the accounts after the sale',
          'Up-selling and cross-selling additional products and services to existing clients'
        ]
      },
      {
        role: 'Account-Officer',
        li: [
          'Maintain the company’s cost records (labor, materials, overhead)',
          'Verify the accuracy of invoices',
          'Reconcile accounts with the general ledger',
          'Resolve general account queries',
          'Contact clients about past due amounts ',
          'Post and document payments immediately upon receipt',
          'Initiate collections for delinquent accounts'
        ]
      },
      {
        role: 'Account-Coordinator',
        li: [
          'Preparing and filing sales contracts and reports',
          'Writing sales proposal templates',
          'Managing client database and updating client account records',
          'Coordinating meetings and scheduling calls for the account management team',
          'Conducting research on prospective clients',
          'Communicating client feedback to account management teams',
          'Performing market and competitive research',
          'Assisting in the creation of promotional materials such as presentations, videos, demos and more'
        ]
      },
      {
        role: 'Account-Clerk',
        li: [
          'Calculating and sending invoices to clients',
          'Performing credit checks on new clients and partners',
          'Calculating and entering expenditures and reconciling bank statements with the general ledger',
          'Matching invoices to purchase orders and processing bills and invoices so they can be paid',
          'Contacting customers to notify them about delinquent accounts and accepting payments',
          'Supporting supervisory staff by performing assigned clerical and accounting tasks'
        ]
      }
]

const lol = ()=>{
    return arr
}
module.exports = lol