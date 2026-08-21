/* Misiones Ecuador — bilingual layer.
   Source markup is Spanish; this translates to English (default) and back.
   No markup changes needed: matches whole text nodes + a few attributes. */
(function () {
  var KEY = 'me-lang';

  var DICT = {
    /* ---- chrome / nav / footer ---- */
    'Quiénes somos': 'About us',
    'Qué hacemos': 'What we do',
    'Nuestro impacto': 'Our impact',
    'Súmate': 'Join us',
    'Donar': 'Donate',
    'Donar ahora': 'Donate now',
    'Dona aquí': 'Donate here',
    'Navega': 'Explore',
    'Participa': 'Get involved',
    'Ser misionero': 'Become a missionary',
    'Voluntariado': 'Volunteering',
    'Orar con nosotros': 'Pray with us',
    'Contacto': 'Contact',
    'Inicio': 'Home',
    'Guayaquil, Ecuador': 'Guayaquil, Ecuador',
    '© 2026 Misiones Ecuador. Todos los derechos reservados.': '© 2026 Misiones Ecuador. All rights reserved.',
    'Organización católica que tiende puentes de encuentro entre misioneros y comunidades vulnerables del Ecuador.': 'A Catholic organization building bridges of encounter between missionaries and vulnerable communities in Ecuador.',
    'Proyecto de jóvenes laicos al servicio de la misión evangelizadora de la Iglesia local en el Ecuador.': 'A project of lay young people serving the evangelizing mission of the local Church in Ecuador.',
    '+2.067': '+2,067',
    '#HechosParaElEncuentro': 'Made for the encounter',
    'Instagram': 'Instagram',
    'Jóvenes reunidos junto a la cruz al cierre de un congreso': 'Young people gathered around the cross at the close of a congress',
    'Grupo de voluntarios universitarios durante una misión': 'A group of university volunteers during a mission',
    'Mujer de la comunidad recibiendo su canasta navideña': 'A woman from the community receiving her Christmas basket',
    'Donar con PayPal': 'Donate with PayPal',
    'Donar con PayPhone': 'Donate with PayPhone',
    'Aporta de forma segura con tarjeta de crédito o débito. Puedes donar con PayPal o con PayPhone.': 'Give securely by credit or debit card. You can donate with PayPal or PayPhone.',
    'Niña de la comunidad y voluntaria jugando juntas al final de la jornada': 'A girl from the community and a volunteer playing together at the end of the day',
    'Pago seguro procesado por PayPal y PayPhone': 'Secure payment processed by PayPal and PayPhone',
    'Gracias': 'Thank you',

    /* ---- política de privacidad ---- */
    'Legal': 'Legal',
    'Política de privacidad': 'Privacy policy',
    'Última actualización: 20 de agosto de 2026': 'Last updated: August 20, 2026',
    'En resumen': 'In short',
    'No usamos cookies de rastreo, publicidad ni herramientas de analítica.': 'We do not use tracking, advertising or analytics cookies.',
    'Los únicos datos personales que recogemos son los que tú nos escribes en el formulario de Súmate.': 'The only personal data we collect is what you write to us in the Join us form.',
    'No procesamos pagos ni vemos los datos de tu tarjeta: las donaciones las gestionan PayPal y PayPhone.': 'We do not process payments and never see your card details: donations are handled by PayPal and PayPhone.',
    'Nunca vendemos, alquilamos ni intercambiamos tus datos.': 'We never sell, rent or trade your data.',
    'Puedes pedirnos en cualquier momento que te demos acceso a tus datos, los corrijamos o los eliminemos.': 'You can ask us at any time to give you access to your data, correct it, or delete it.',
    '1. Quién responde por tus datos': '1. Who is responsible for your data',
    'Misiones Ecuador es el proyecto misionero de la Fundación San José, RUC 0992993251001, con domicilio en Circunvalación Norte 218, entre Calle Primera y Víctor Emilio Estrada, Guayaquil, Ecuador. La Fundación San José es la responsable del tratamiento de los datos personales que se recogen a través de este sitio web. Puedes escribirnos a misionesecuador.fsj@gmail.com para cualquier asunto relacionado con esta política.': 'Misiones Ecuador is the missionary project of Fundación San José, tax ID (RUC) 0992993251001, with its registered address at Circunvalación Norte 218, between Calle Primera and Víctor Emilio Estrada, Guayaquil, Ecuador. Fundación San José is the controller of the personal data collected through this website. You can write to us at misionesecuador.fsj@gmail.com about anything related to this policy.',
    'Esta política se rige por la Ley Orgánica de Protección de Datos Personales del Ecuador y su Reglamento General. Si nos escribes desde otro país, aplicamos los mismos criterios a todas las personas, sin distinción de residencia.': 'This policy is governed by Ecuador\'s Organic Law on the Protection of Personal Data and its General Regulation. If you write to us from another country, we apply the same standards to everyone, regardless of where they live.',
    '2. Qué datos recogemos': '2. What data we collect',
    'Datos que nos entregas voluntariamente. Cuando completas el formulario de Súmate recogemos tu nombre completo, tu número de celular con el prefijo del país, tu correo electrónico, el tipo de misión que te interesa y tu lugar de residencia. Registramos también el idioma en que estabas navegando y la fecha de envío, para poder responderte en tu idioma.': 'Data you give us voluntarily. When you complete the Join us form we collect your full name, your mobile number with its country code, your email address, the type of mission you are interested in, and where you live. We also record the language you were browsing in and the date you sent the form, so we can reply in your language.',
    'Datos técnicos. Nuestro proveedor de alojamiento guarda registros automáticos de acceso que incluyen tu dirección IP, la fecha de la visita y el tipo de navegador. Son registros propios del funcionamiento de cualquier servidor web y los usamos solo para seguridad y diagnóstico.': 'Technical data. Our hosting provider keeps automatic access logs that include your IP address, the date of your visit and your browser type. These are the ordinary logs any web server keeps, and we use them only for security and troubleshooting.',
    'Preferencia de idioma. Guardamos en tu navegador un dato local con el idioma que elegiste, para que el sitio lo recuerde. No es una cookie, no viaja a ningún servidor y puedes borrarlo desde tu navegador.': 'Language preference. We store a local value in your browser with the language you chose, so the site remembers it. It is not a cookie, it never travels to any server, and you can clear it from your browser.',
    'No pedimos datos sensibles a través del sitio. No te preguntamos por tu religión, tu salud, tu situación económica ni ninguna otra categoría especial de datos.': 'We do not ask for sensitive data through the site. We do not ask about your religion, your health, your finances or any other special category of data.',
    '3. Para qué los usamos': '3. What we use it for',
    'Usamos los datos del formulario para contactarte, responder tu solicitud y coordinar contigo la participación en una misión: fechas, requisitos y logística. La base legal es tu consentimiento, que otorgas al enviar el formulario, y la relación que se crea entre nosotros si decides participar.': 'We use the form data to contact you, answer your request and arrange your participation in a mission: dates, requirements and logistics. The legal basis is your consent, given when you submit the form, and the relationship created between us if you decide to take part.',
    'Usamos los registros técnicos para mantener el sitio disponible y protegerlo de abusos, sobre la base de nuestro interés legítimo en operarlo con seguridad.': 'We use technical logs to keep the site available and protect it from abuse, on the basis of our legitimate interest in operating it securely.',
    'No usamos tus datos para publicidad, no los cedemos con fines comerciales y no tomamos decisiones automatizadas ni elaboramos perfiles sobre ti. Si en el futuro quisiéramos enviarte un boletín, te lo pediríamos aparte y de forma explícita.': 'We do not use your data for advertising, we do not pass it on for commercial purposes, and we do not make automated decisions or build profiles about you. If we ever wanted to send you a newsletter, we would ask you separately and explicitly.',
    '4. Con quién los compartimos': '4. Who we share it with',
    'No vendemos ni cedemos tus datos. Solo los tratan los proveedores que necesitamos para operar, y únicamente para eso:': 'We do not sell or hand over your data. It is only handled by the providers we need in order to operate, and only for that purpose:',
    'Google, donde se guardan las solicitudes del formulario y desde donde recibimos el aviso por correo. También cargamos desde Google las tipografías del sitio, lo que implica que tu dirección IP llega a sus servidores al abrir la página.': 'Google, where form submissions are stored and from which we receive the email notification. We also load the site\'s fonts from Google, which means your IP address reaches their servers when the page opens.',
    'PayPal y PayPhone, que procesan las donaciones en sus propias plataformas. Cuando pulsas un botón de donar sales de nuestro sitio: los datos de tu tarjeta los recoge y custodia la pasarela, no nosotros, y quedan sujetos a la política de privacidad de cada una.': 'PayPal and PayPhone, which process donations on their own platforms. When you click a donate button you leave our site: your card details are collected and held by the payment provider, not by us, and are subject to each one\'s privacy policy.',
    'Nuestro proveedor de alojamiento web, que conserva los registros de acceso al servidor.': 'Our web hosting provider, which keeps the server access logs.',
    'Estos proveedores están domiciliados en Estados Unidos, de modo que tus datos se transfieren fuera del Ecuador. Elegimos servicios que ofrecen garantías contractuales de protección y los usamos con la configuración más restrictiva que su servicio permite.': 'These providers are based in the United States, so your data is transferred outside Ecuador. We choose services that offer contractual protection safeguards and use them with the most restrictive settings their service allows.',
    'También podríamos compartir datos si una autoridad competente nos lo requiere legalmente, o si fuera necesario para defender nuestros derechos.': 'We may also share data if a competent authority lawfully requires it, or if it is necessary to defend our rights.',
    '5. Cuánto tiempo los guardamos': '5. How long we keep it',
    'Conservamos las solicitudes del formulario mientras exista una relación contigo y hasta veinticuatro meses después del último contacto, para poder invitarte a misiones futuras. Cumplido ese plazo las eliminamos o las dejamos sin posibilidad de identificarte. Si nos pides antes que las borremos, lo hacemos. Los registros del servidor se conservan por el plazo que fija nuestro proveedor de alojamiento.': 'We keep form submissions for as long as we have a relationship with you and for up to twenty-four months after our last contact, so we can invite you to future missions. After that we delete them or strip them of anything that could identify you. If you ask us to delete them sooner, we do. Server logs are kept for the period set by our hosting provider.',
    '6. Cookies': '6. Cookies',
    'Este sitio no instala cookies de rastreo, de publicidad ni de analítica, y por eso no verás un banner de consentimiento de cookies. El único dato que se guarda en tu navegador es el idioma que elegiste. Si en algún momento incorporáramos analítica, actualizaríamos esta política y pediríamos tu consentimiento antes de activarla.': 'This site sets no tracking, advertising or analytics cookies, which is why you will not see a cookie consent banner. The only thing stored in your browser is the language you chose. If we ever added analytics, we would update this policy and ask for your consent before switching it on.',
    '7. Tus derechos': '7. Your rights',
    'La ley ecuatoriana te reconoce el derecho a saber qué datos tenemos sobre ti y a acceder a ellos; a que los corrijamos o actualicemos si están mal; a que los eliminemos; a oponerte a que los tratemos; a pedir que suspendamos su tratamiento; a recibirlos en un formato que puedas llevarte; y a no ser objeto de decisiones tomadas solo por medios automatizados.': 'Ecuadorian law gives you the right to know what data we hold about you and to access it; to have it corrected or updated if it is wrong; to have it deleted; to object to our processing it; to ask us to suspend processing; to receive it in a portable format; and not to be subject to decisions made solely by automated means.',
    'Para ejercer cualquiera de ellos escríbenos a misionesecuador.fsj@gmail.com indicando qué necesitas. Te responderemos dentro de quince días. Podemos pedirte que confirmes tu identidad antes de actuar, para no entregar tus datos a otra persona.': 'To exercise any of them, write to us at misionesecuador.fsj@gmail.com telling us what you need. We will reply within fifteen days. We may ask you to confirm your identity first, so that we do not hand your data to someone else.',
    'Si consideras que no atendimos bien tu solicitud, puedes presentar un reclamo ante la Superintendencia de Protección de Datos Personales del Ecuador.': 'If you believe we did not handle your request properly, you can file a complaint with Ecuador\'s Superintendency for the Protection of Personal Data.',
    '8. Si escribes desde Estados Unidos': '8. If you are writing from the United States',
    'Somos una organización sin fines de lucro con sede en Ecuador, de modo que las leyes estatales de privacidad de Estados Unidos, como la de California, en general no nos resultan exigibles. Aun así, atendemos las solicitudes de acceso, corrección y eliminación de cualquier persona, viva donde viva, por los mismos canales descritos arriba.': 'We are a non-profit organization based in Ecuador, so US state privacy laws such as California\'s generally do not apply to us. Even so, we honor access, correction and deletion requests from anyone, wherever they live, through the same channels described above.',
    'No vendemos información personal ni la compartimos a cambio de una contraprestación, y tampoco hacemos publicidad dirigida, así que no hay nada de lo que necesites excluirte.': 'We do not sell personal information or share it for anything in return, and we do not run targeted advertising, so there is nothing for you to opt out of.',
    '9. Menores de edad': '9. Minors',
    'Este sitio está dirigido a personas mayores de edad y no recogemos datos de menores a través del formulario. Cuando un menor participa en una misión, gestionamos su inscripción fuera del sitio y con la autorización escrita de su padre, madre o representante legal. Si crees que un menor nos envió sus datos por el formulario, escríbenos y los eliminaremos.': 'This site is intended for adults and we do not collect data from minors through the form. When a minor takes part in a mission, we handle their registration off the site and with the written authorization of a parent or legal guardian. If you believe a minor sent us their data through the form, write to us and we will delete it.',
    '10. Fotografías de las misiones': '10. Mission photographs',
    'Publicamos fotografías de las misiones en las que aparecen voluntarios y miembros de las comunidades que acompañamos. Pedimos autorización para tomarlas y difundirlas, y en el caso de menores la pedimos a su representante legal. Si apareces en una fotografía de este sitio y prefieres que la retiremos, escríbenos y la quitaremos sin que tengas que darnos ninguna explicación.': 'We publish photographs of our missions showing volunteers and members of the communities we accompany. We ask permission to take and publish them, and in the case of minors we ask their legal guardian. If you appear in a photograph on this site and would rather we took it down, write to us and we will remove it without asking you for any explanation.',
    '11. Seguridad': '11. Security',
    'El sitio se sirve por conexión cifrada y limitamos el acceso a las solicitudes del formulario a las personas del equipo que necesitan verlas. Ningún sistema es completamente invulnerable, así que no podemos prometerte seguridad absoluta. Si ocurriera una vulneración que afecte tus datos, lo notificaremos a la autoridad y a las personas afectadas en los plazos que fija la normativa ecuatoriana.': 'The site is served over an encrypted connection and we limit access to form submissions to the team members who need to see them. No system is completely invulnerable, so we cannot promise absolute security. If a breach affecting your data occurred, we would notify the authority and the people affected within the deadlines set by Ecuadorian regulation.',
    '12. Cambios en esta política': '12. Changes to this policy',
    'Si cambiamos esta política publicaremos aquí la nueva versión con su fecha de actualización. Cuando el cambio sea importante y tengamos tu correo, te avisaremos por ese medio.': 'If we change this policy we will publish the new version here with its update date. When a change is significant and we have your email, we will let you know that way.',
    'Para cualquier pregunta sobre esta política o sobre tus datos, escríbenos. Respondemos a todos los mensajes.': 'For any question about this policy or about your data, write to us. We answer every message.',
    'Enviando tu solicitud…': 'Sending your request…',
    'No pudimos enviar tu solicitud. Escríbenos a misionesecuador.fsj@gmail.com': 'We could not send your request. Please write to us at misionesecuador.fsj@gmail.com',
    'Quiero sumarme': 'I want to join',
    'Dos formas de sumarte': 'Two ways to join',
    'Elige cómo tender puentes': 'Choose how to build bridges',
    'Puedes ir a misión con tus manos o sostenerla con tu aporte. Las dos hacen posible el encuentro.': 'You can go on mission with your hands or sustain it with your gift. Both make the encounter possible.',
    'Opción 1': 'Option 1',
    'Opción 2': 'Option 2',
    'Quiero participar en una misión': 'I want to join a mission',
    'Déjanos tus datos y te contactamos con las próximas fechas y lo que necesitas para viajar.': 'Leave us your details and we will contact you with upcoming dates and what you need to travel.',
    'Nombre completo': 'Full name',
    'Celular': 'Mobile',
    'Correo electrónico': 'Email',
    'Tipo de misión': 'Type of mission',
    'Lugar de residencia': 'Place of residence',
    'Tu nombre y apellido': 'Your first and last name',
    'tucorreo@ejemplo.com': 'youremail@example.com',
    'Ciudad y país': 'City and country',
    'Elige una opción': 'Choose an option',
    'Donde más se necesite': 'Wherever it is needed most',
    'Quiero participar': 'I want to take part',
    'Escribe tu nombre completo.': 'Please enter your full name.',
    'Necesitamos un celular para contactarte.': 'We need a mobile number to reach you.',
    'Revisa tu correo electrónico.': 'Please check your email address.',
    'Elige el tipo de misión que te interesa.': 'Choose the type of mission you are interested in.',
    'Cuéntanos desde dónde escribes.': 'Tell us where you are writing from.',
    'Recibimos tu solicitud. Te contactamos en menos de 48 horas al correo que nos dejaste.': 'We received your request. We will contact you within 48 hours at the email you gave us.',
    'Enviar otra solicitud': 'Send another request',
    'Sostén la misión desde donde estés. Tu aporte se convierte en consultas médicas, capillas y misioneros en territorio.': 'Sustain the mission from wherever you are. Your gift becomes medical consultations, chapels and missionaries on the ground.',
    'Consultas gratuitas y medicinas en zonas sin acceso a salud.': 'Free consultations and medicine in areas with no access to health care.',
    'Capillas, casas y espacios de encuentro para la comunidad.': 'Chapels, homes and places of encounter for the community.',
    'Canastas y juguetes en Navidad y temporada de lluvias.': 'Food baskets and toys at Christmas and in the rainy season.',
    'Donar con PayPal': 'Donate with PayPal',
    'Pago seguro procesado por PayPal': 'Secure payment processed by PayPal',
    'Ver otras formas de aportar': 'See other ways to give',
    'Ver todo': 'View all',
    'Sigue leyendo': 'Keep reading',
    'Volver al blog': 'Back to the blog',
    'Leer la crónica': 'Read the story',
    'Leer más': 'Read more',
    'Equipo de Misiones Ecuador': 'Misiones Ecuador team',

    /* ---- home ---- */
    'Hechos para el encuentro': 'Made for the encounter',
    'Hechos para': 'Made for',
    'el': 'the',
    'encuentro': 'encounter',
    'Organización católica · Ecuador': 'Catholic organization · Ecuador',
    'Formamos puentes de encuentro entre misioneros y comunidades vulnerables del Ecuador, para que juntos vivamos un encuentro real con el Señor.': 'We build bridges of encounter between missionaries and vulnerable communities in Ecuador, so that together we may live a real encounter with the Lord.',
    '“Vayan y hagan discípulos a todos los pueblos”': '“Go and make disciples of all nations”',
    'Mt 28, 19': 'Mt 28:19',
    'Misioneros al servicio del encuentro': 'Missionaries in the service of encounter',
    'Somos una organización católica que nace del deseo de tender puentes: entre quienes tienen y quienes necesitan, entre la fe y la vida diaria, entre comunidades que se descubren hermanas.': 'We are a Catholic organization born from the desire to build bridges: between those who have and those in need, between faith and daily life, between communities that discover they are sisters.',
    'Cada misión es una oportunidad de encuentro real con el Señor y con el prójimo, viviendo el Evangelio con las manos.': 'Every mission is a chance for a real encounter with the Lord and with our neighbor, living the Gospel with our hands.',
    'Fe': 'Faith',
    'Comunidad': 'Community',
    'Servicio': 'Service',
    'Seis formas de tender puentes': 'Six ways to build bridges',
    'Nuestro impacto en los últimos 2 años': 'Our impact over the last 2 years',
    'Somos una organización de laicos católicos al servicio de la Iglesia local.': 'We are an organization of Catholic lay people at the service of the local Church.',
    'Creemos que la misión es el lugar donde misioneros y comunidades se descubren hermanos, y donde el Evangelio se vive en los encuentros de la vida cotidiana.': 'We believe mission is the place where missionaries and communities discover they are brothers and sisters, and where the Gospel is lived in the encounters of everyday life.',
    'Según la necesidad de la comunidad y junto con ellos, construimos capillas y espacios que se vuelven lugares de encuentro.': 'According to the needs of the community and together with them, we build chapels and spaces that become places of encounter.',
    'En cada misión caminamos junto a las comunidades: anunciamos la Buena Noticia, construimos espacios de encuentro y llevamos salud a quienes más lo necesitan.': 'On every mission we walk alongside the communities: we proclaim the Good News, we build spaces of encounter, and we bring health care to those who need it most.',
    'Evangelización': 'Evangelization',
    'Construcción': 'Construction',
    'Brigadas médicas': 'Medical brigades',
    'Campañas solidarias': 'Solidarity campaigns',
    'Formación de líderes': 'Leadership formation',
    'Congresos para jóvenes': 'Youth congresses',
    'Anunciamos la Buena Noticia del Evangelio y acompañamos a cada comunidad en su encuentro con el Señor, de corazón a corazón.': 'We proclaim the Good News of the Gospel and accompany each community in its encounter with the Lord, heart to heart.',
    'Levantamos capillas, casas y espacios comunitarios que se vuelven puntos de encuentro duraderos para toda la comunidad.': 'We build chapels, homes and community spaces that become lasting places of encounter for the whole community.',
    'Llevamos atención médica y medicinas a zonas vulnerables, cuidando la salud y la dignidad de cada persona.': 'We bring medical care and medicine to vulnerable areas, caring for the health and dignity of every person.',
    'Ver las seis formas de misión': 'See the six kinds of mission',
    'Cada número es un encuentro real': 'Every number is a real encounter',
    'Grupos misioneros': 'Mission groups',
    'en acción': 'in action',
    'Estructuras': 'Structures',
    'construidas': 'built',
    'Personas': 'People',
    'atendidas': 'served',
    'Detrás de cada cifra hay una comunidad que dejó de estar sola. Tu aporte hace posible el próximo encuentro.': 'Behind every figure is a community that is no longer alone. Your gift makes the next encounter possible.',
    'Hay un lugar para ti en la misión': 'There is a place for you in the mission',
    'No importa cuánto tiempo tengas ni tu oficio: cada don suma. Elige cómo quieres tender puentes.': 'However much time you have and whatever your trade: every gift counts. Choose how you want to build bridges.',
    'Misionero': 'Missionary',
    'Únete a un grupo misionero y vive una misión en territorio: evangeliza, construye y sirve junto a la comunidad.': 'Join a mission group and live a mission on the ground: evangelize, build and serve alongside the community.',
    'Quiero ir a misión': 'I want to go on mission',
    'Voluntario profesional': 'Professional volunteer',
    'Aporta tu oficio —médico, constructor, docente, comunicador— en las brigadas y proyectos donde más se necesita.': 'Bring your trade — doctor, builder, teacher, communicator — to the brigades and projects where it is needed most.',
    'Ofrecer mi talento': 'Offer my skills',
    'Oración y aporte': 'Prayer and giving',
    'Acompaña la misión desde donde estés: con tu oración constante y con tu aporte económico para sostener cada proyecto.': 'Accompany the mission from wherever you are: with your steady prayer and with your financial support to sustain each project.',
    'Quiero aportar': 'I want to give',
    'Te contactamos en menos de 48 horas.': 'We will contact you within 48 hours.',
    'Tu ayuda transforma vidas': 'Your help transforms lives',
    'Cada donación es un encuentro': 'Every donation is an encounter',
    'Detrás de cada sonrisa hay alguien que decidió tender puentes. Hoy puedes ser tú. Tu aporte lleva esperanza a las comunidades más vulnerables del Ecuador.': 'Behind every smile is someone who decided to build bridges. Today it can be you. Your gift brings hope to the most vulnerable communities in Ecuador.',
    'Coordinamos tu donación de forma segura.': 'We handle your donation securely.',

    /* ---- quiénes somos ---- */
    'Comunidad de laicos al servicio de la misión': 'A community of lay people in the service of the mission',
    'Laicos al servicio de la misión': 'Lay people in the service of the mission',
    'Nuestra misión': 'Our mission',
    'El encuentro vivo con Cristo': 'A living encounter with Christ',
    'Misiones Ecuador es un proyecto de jóvenes laicos al servicio de la misión evangelizadora de la Iglesia local, que promueve el encuentro vivo con Cristo a través del servicio a los más necesitados.': 'Misiones Ecuador is a lay missionary project supporting the evangelizing of the Catholic Church in local communities. We promote personal encounters with Christ through service to those in most need.',
    'Respondemos a las necesidades materiales y espirituales de las comunidades que acompañamos mediante distintos tipos de misiones, promoviendo su desarrollo integral a la luz del Evangelio.': 'Through diverse forms of mission, we address the material and spiritual needs of the communities we accompany, seeking to foster their holistic development in the light of the Gospel.',
    'Nuestro mensaje': 'Our message',
    'Formamos puentes de encuentro entre voluntarios y comunidades necesitadas para anunciar el Evangelio, generar un impacto duradero y despertar en ellos el deseo de evangelizar': 'We build bridges of encounter between volunteers and communities in need in order to proclaim the Gospel, create lasting impact, and awaken in them the desire to evangelize',
    'Nuestros valores': 'Our values',
    'Lo que nos sostiene': 'What sustains us',
    'Amistad y comunión': 'Friendship and communion',
    'Visión sacramental': 'Sacramental vision',
    'Alegría': 'Joy',
    'Nuestros partners': 'Our partners',
    'Alianzas institucionales': 'Institutional Partnerships',
    'No caminamos solos': 'We do not walk alone',
    'Trabajamos junto a instituciones y diócesis que hacen posible cada misión.': 'We work alongside institutions and dioceses that make every mission possible.',
    'FOCUS Missions': 'FOCUS Missions',
    'Fellowship of Catholic University Students. Envía estudiantes universitarios a nuestras misiones de construcción y brigadas médicas.': 'Fellowship of Catholic University Students. Sends university students to our construction missions and medical brigades.',
    'Diócesis de Daule': 'Diocese of Daule',
    'Ecuador. Acompaña nuestro trabajo en Tarifa, Samborondón y Daule con presencia sacerdotal y pastoral.': 'Ecuador. Accompanies our work in Tarifa, Samborondón and Daule with priestly and pastoral presence.',
    'Diócesis de Santa Elena': 'Diocese of Santa Elena',
    'Ecuador. Nos abre las puertas de Bajada de Chanduy y Cerecita para servir a sus recintos.': 'Ecuador. Opens the doors of Bajada de Chanduy and Cerecita so we can serve their villages.',
    'Acompaña nuestro trabajo en Tarifa, Samborondón y Daule con presencia sacerdotal y pastoral.': 'Accompanies our work in Tarifa, Samborondón and Daule with priestly and pastoral presence.',
    'Nos abre las puertas de Bajada de Chanduy y Cerecita para servir a sus recintos.': 'Opens the doors of Bajada de Chanduy and Cerecita so we can serve their villages.',
    '15 comunidades, 4 diócesis': '15 communities, 4 dioceses',
    'Servimos en recintos rurales de Daule, Santa Elena, Cuenca y Guayaquil, acompañando a cada comunidad de forma continua.': 'We serve rural villages in Daule, Santa Elena, Cuenca and Guayaquil, accompanying each community continuously.',
    'Ver dónde trabajamos': 'See where we work',
    'Puedes ir a misión, aportar tu oficio o sostener los proyectos con tu donación.': 'You can go on mission, contribute your trade, or sustain the projects with your donation.',

    /* ---- qué hacemos ---- */
    'Nuestro trabajo': 'Our work',
    'Respondemos a las necesidades materiales y espirituales de cada comunidad mediante distintos tipos de misiones.': 'We respond to the material and spiritual needs of each community through different kinds of missions.',
    'El encuentro personal y cercano con las personas de las comunidades que servimos, a quienes buscamos mostrar a Cristo vivo que camina con ellos y entre nosotros, es el centro de todas nuestras misiones. A través de visitas a hogares, catequesis para niños y adultos, momentos de oración comunitaria y la celebración de los sacramentos, acompañamos a cada persona allí donde está, con la convicción de que Dios quiere derramar su gracia en ellos a través de este encuentro.': 'The personal, close encounter with the people of the communities we serve — to whom we seek to show the living Christ who walks with them and among us — is at the center of all our missions. Through home visits, catechesis for children and adults, moments of community prayer and the celebration of the sacraments, we accompany each person right where they are, convinced that God wants to pour out his grace on them through this encounter.',
    'Desde 2022 realizamos misiones con jóvenes, familias y universitarios extranjeros, ejecutando obras de infraestructura comunitaria y labores de mantenimiento, de acuerdo con las necesidades de cada comunidad. Estas misiones se realizan en compañía de un sacerdote para el acompañamiento espiritual y la administración de los sacramentos.': 'Since 2022 we have carried out missions with young people, families and international university students, building community infrastructure and doing maintenance work according to the needs of each community. These missions take place in the company of a priest for spiritual accompaniment and the administration of the sacraments.',
    'Desde 2023 se realizan misiones médicas con la participación de voluntarios, estudiantes universitarios extranjeros y profesionales de la salud de Guayaquil. Su objetivo es atender las necesidades de salud mediante consultas médicas gratuitas y entrega de medicamentos, complementadas con un componente evangelizador que incluye visitas a enfermos y adultos mayores, así como atención sacramental.': 'Since 2023 we have run medical missions with volunteers, international university students and health professionals from Guayaquil. The aim is to meet health needs through free medical consultations and the delivery of medicines, complemented by an evangelizing component that includes visits to the sick and the elderly, as well as sacramental care.',
    'Estos congresos de un fin de semana son dirigidos a jóvenes de colegio, realizados en distintas parroquias rurales, que fortalecen la pastoral juvenil local en conjunto con el sacerdote de cada zona.': 'These weekend congresses are aimed at high-school students and held in different rural parishes, strengthening local youth ministry together with the priest of each area.',
    'Formación de líderes laicos': 'Lay leadership formation',
    'Programa de formación dirigido a hombres y mujeres de comunidades rurales comprometidos con la vida de fe, que profundiza los cuatro bloques del Catecismo desde una perspectiva relacional y promueve la vivencia de la fe en la vida cotidiana. Responde a la necesidad de formar apóstoles que acompañen más de cerca a los recintos y apoyen la misión pastoral del sacerdote de la zona.': 'A formation program for men and women from rural communities committed to the life of faith. It works through the four pillars of the Catechism from a relational perspective and encourages living the faith in daily life. It responds to the need to form apostles who can accompany the villages more closely and support the pastoral mission of the local priest.',
    'Cuatro bloques del Catecismo': 'Four pillars of the Catechism',
    'Navidad y emergencias': 'Christmas and emergencies',
    'Campañas de entrega de canastas de alimentos y juguetes en época navideña y durante temporadas de lluvias intensas, como parte del acompañamiento continuo a las comunidades.': 'Campaigns delivering food baskets and toys at Christmas and during seasons of heavy rain, as part of our continuous accompaniment of the communities.',
    'Un fin de semana': 'One weekend',
    'Cada misión necesita manos': 'Every mission needs hands',
    'Puedes ir a misión, aportar tu oficio profesional o sostener los proyectos con tu donación.': 'You can go on mission, contribute your professional skills, or sustain the projects with your donation.',
    'Foto de congresos pendiente': 'Congress photo pending',
    'Foto de formación pendiente': 'Formation photo pending',
    'Foto de campañas pendiente': 'Campaign photo pending',

    /* ---- impacto ---- */
    'El encuentro, en números': 'The encounter, in numbers',
    'Misionamos en comunidades rurales del Ecuador desde 2003. Estas son las cifras de los últimos 2 años.': 'We have been on mission in the rural communities of Ecuador since 2003. These are the figures for the last 2 years.',
    'Los últimos 2 años': 'The last 2 years',
    'Desde 2003 realizamos misiones en comunidades rurales del Ecuador. Estas son las cifras de los dos últimos años.': 'Since 2003 we have carried out missions in the rural communities of Ecuador. These are the figures for the last two years.',
    'Beneficiarios': 'Beneficiaries',
    'atendidos': 'served',
    'Voluntarios': 'Volunteers',
    'movilizados': 'mobilized',
    'Recintos': 'Villages',
    'Actividades': 'Activities',
    'realizadas': 'carried out',
    'Año por año': 'Year by year',
    'Cómo ha crecido la misión': 'How the mission has grown',
    'Beneficiarios atendidos': 'Beneficiaries served',
    'Voluntarios movilizados': 'Volunteers mobilized',
    'Comunidades alcanzadas': 'Communities reached',
    'Actividades realizadas': 'Activities carried out',
    'Dónde servimos': 'Where we serve',
    'Lugares donde hemos servido': 'Places we have served',
    'Quince recintos rurales en cuatro zonas del país, en alianza con tres diócesis. Toca cada punto del mapa para ver los recintos de esa zona.': 'Fifteen rural villages across four regions of the country, in partnership with three dioceses. Tap each point on the map to see that area’s villages.',
    'Ver las 23 misiones realizadas': 'See the 23 missions carried out',
    'Archivo de misiones': 'Mission archive',
    'Misión por misión': 'Mission by mission',
    'Veintitrés misiones entre 2024 y 2025. Cada una con su fecha, su tipo, la comunidad donde ocurrió y la gente que la hizo posible.': 'Twenty-three missions between 2024 and 2025. Each with its date, its type, the community where it took place, and the people who made it possible.',
    'Ver fotos': 'View photos',
    'Ver foto': 'View photo',
    'Cerrar galería': 'Close gallery',
    'Foto anterior': 'Previous photo',
    'Foto siguiente': 'Next photo',
    'Cada número es una persona': 'Every number is a person',
    'Tu aporte hace posible la próxima misión, la próxima brigada, el próximo encuentro.': 'Your gift makes the next mission, the next brigade, the next encounter possible.',
    'Tarifa, Samborondón': 'Tarifa, Samborondón',
    'Daule': 'Daule',
    'Guayaquil': 'Guayaquil',
    'Sabanilla': 'Sabanilla',
    'Azuay — Santa Isabel': 'Azuay — Santa Isabel',

    /* ---- donar ---- */
    'Tu aporte sostiene la misión': 'Your gift sustains the mission',
    'Cada donación se convierte en consultas médicas gratuitas, capillas levantadas y misioneros en territorio.': 'Every donation becomes free medical consultations, chapels built, and missionaries on the ground.',
    'Otras formas de aportar': 'Other ways to give',
    'Transparencia': 'Transparency',
    '¿A dónde va tu donación?': 'Where does your donation go?',
    'Tu aporte financia directamente las misiones que realizamos en las comunidades rurales del Ecuador.': 'Your gift directly funds the missions we carry out in the rural communities of Ecuador.',
    'Consultas médicas gratuitas y entrega de medicamentos en zonas sin acceso a salud.': 'Free medical consultations and delivery of medicines in areas with no access to health care.',
    'Obras de infraestructura comunitaria y mantenimiento según la necesidad de cada recinto.': 'Community infrastructure and maintenance work according to the needs of each village.',
    'Canastas de alimentos y juguetes en Navidad y durante las temporadas de lluvias intensas.': 'Food baskets and toys at Christmas and during seasons of heavy rain.',
    'Programa que forma apóstoles laicos para acompañar de cerca a cada comunidad.': 'A program that forms lay apostles to accompany each community closely.',
    'Cómo puedes aportar': 'How you can give',
    'Elige la forma que te resulte más cómoda. Toda ayuda, del monto que sea, llega a las comunidades.': 'Choose whichever way suits you best. All help, whatever the amount, reaches the communities.',
    'Donación en línea': 'Online donation',
    'Aporta de forma segura con tarjeta de crédito o débito. Puedes hacer una donación única o mensual.': 'Give securely by credit or debit card. You can make a one-time or monthly donation.',
    'Ir a donar': 'Go to donate',
    'Transferencia o especies': 'Transfer or in-kind',
    'Para transferencias bancarias, donaciones de medicinas, materiales de construcción o alimentos, escríbenos y coordinamos contigo.': 'For bank transfers or donations of medicine, building materials or food, write to us and we will arrange it with you.',
    'Gracias por tender puentes': 'Thank you for building bridges',
    'Detrás de cada aporte hay una familia acompañada, un enfermo visitado y una comunidad que se sabe querida.': 'Behind every gift is a family accompanied, a sick person visited, and a community that knows it is loved.',

    /* ---- blog index ---- */
    'Blog y noticias': 'Blog and news',
    'Historias desde el territorio': 'Stories from the field',
    'Crónicas de cada misión, testimonios de voluntarios y noticias de las comunidades que acompañamos.': 'Stories from each mission, volunteer testimonies, and news from the communities we accompany.',
    'Destacada': 'Featured',
    'Sé parte de la próxima historia': 'Be part of the next story',
    'Cada crónica que leas aquí empezó con alguien que decidió sumarse.': 'Every story you read here began with someone who decided to join.',

    /* ---- post titles / meta ---- */
    'Tres días de brigada médica en Tarifa': 'Three days of medical brigade in Tarifa',
    'Testimonio de voluntario': 'Volunteer testimony',
    'Vine a curar y me fui curado': 'I came to heal and left healed',
    'La capilla que levantaron dos manos y cien más': 'The chapel raised by two hands and a hundred more',
    'Navidad en Aguas Verdes: 120 canastas y una misa': 'Christmas in Aguas Verdes: 120 baskets and a Mass',
    '18 de noviembre de 2025': 'November 18, 2025',
    '4 de noviembre de 2025': 'November 4, 2025',
    '12 de octubre de 2025': 'October 12, 2025',
    '21 de diciembre de 2024': 'December 21, 2024',
    'Veintidós voluntarios —médicos de Guayaquil, estudiantes universitarios y misioneros— atendieron a 214 personas en los recintos de Boca de Caña y Monte Alto. Entre consulta y consulta hubo tiempo para visitar a los enfermos que no pudieron salir de casa.': 'Twenty-two volunteers — doctors from Guayaquil, university students and missionaries — treated 214 people in the villages of Boca de Caña and Monte Alto. Between consultations there was time to visit the sick who could not leave their homes.',
    'María José llegó a Cañaribamba con su maleta llena de medicinas y una lista de pendientes. Volvió a Guayaquil con la certeza de que la que necesitaba ser atendida era ella.': 'María José arrived in Cañaribamba with a suitcase full of medicine and a to-do list. She returned to Guayaquil certain that the one who needed care was her.',
    'Lo que empezó como el pedido de un catequista terminó en catorce días de trabajo compartido entre misioneros y vecinos de El Laurel. Hoy la comunidad ya no camina una hora para llegar a misa.': 'What began as a catechist’s request ended in fourteen days of shared work between missionaries and the people of El Laurel. Today the community no longer walks an hour to get to Mass.',
    'No hubo discursos. Hubo arroz, aceite, juguetes y una misa de Nochebuena en una capilla que no alcanzaba para todos los que quisieron entrar.': 'There were no speeches. There was rice, oil, toys, and a Christmas Eve Mass in a chapel too small for everyone who wanted to come in.',
    'Personas atendidas': 'People served',
    'Días de misión': 'Days of mission',
    'Días de trabajo': 'Days of work',
    'Familias': 'Families',
    'Capilla': 'Chapel',
    'Canastas': 'Baskets',
    'Juguetes': 'Toys',
    'Misa': 'Mass',
    'El Laurel, Daule': 'El Laurel, Daule',
    'Aguas Verdes, Santa Elena': 'Aguas Verdes, Santa Elena',
    'Cañaribamba, Azuay': 'Cañaribamba, Azuay',

    /* ---- post: brigada Tarifa ---- */
    'Crónica desde Tarifa, Samborondón': 'Story from Tarifa, Samborondón',
    'La camioneta salió de Guayaquil a las cinco de la mañana. Hora y media después, el asfalto se volvió tierra y los arrozales se abrieron a los dos lados del camino. En Boca de Caña ya había gente esperando: mujeres con sus hijos en brazos, hombres que habían dejado el trabajo en el campo por una mañana, ancianos sentados a la sombra de un árbol de mango.': 'The truck left Guayaquil at five in the morning. An hour and a half later the asphalt turned to dirt and rice fields opened on both sides of the road. In Boca de Caña people were already waiting: women with children in their arms, men who had left the fields for a morning, elderly people sitting in the shade of a mango tree.',
    'El equipo montó cuatro estaciones en la cancha del recinto: triaje, medicina general, odontología y farmacia. En la capilla, a veinte metros, el padre Andrés dispuso una mesa para confesiones. Nadie planificó que las dos filas terminaran cruzándose, pero así ocurrió: quien salía de la consulta se quedaba conversando, y quien esperaba turno entraba a rezar un rato.': 'The team set up four stations on the village court: triage, general medicine, dentistry and pharmacy. In the chapel, twenty meters away, Father Andrés set out a table for confessions. No one planned for the two lines to cross, but they did: those leaving the consultation stayed to talk, and those waiting their turn went in to pray a while.',
    '“Aquí nadie viene solo por la pastilla. Vienen porque alguien por fin les preguntó cómo están.”': '“No one here comes just for the pill. They come because someone finally asked how they are.”',
    '— Dra. Elena Vera, médica voluntaria': '— Dr. Elena Vera, volunteer physician',
    'El segundo día el equipo se dividió. Una mitad se quedó en Monte Alto atendiendo consultas; la otra salió a caminar los recintos con una lista de doce nombres: personas que no podían llegar por su cuenta. Se visitaron once casas. En una de ellas, don Ramón, ochenta y siete años y postrado desde su última caída, recibió la unción de los enfermos rodeado de sus nietos.': 'On the second day the team split. Half stayed in Monte Alto seeing patients; the other half walked the villages with a list of twelve names: people who could not come on their own. Eleven homes were visited. In one of them, don Ramón, eighty-seven years old and bedridden since his last fall, received the anointing of the sick surrounded by his grandchildren.',
    'Se entregaron medicamentos para tratamientos completos, no muestras: antihipertensivos, antiparasitarios, analgésicos, vitaminas y control de glucosa. Diecinueve casos que requerían seguimiento quedaron registrados y derivados al subcentro de salud de la parroquia, con el compromiso de acompañarlos en la próxima visita.': 'Medicines were given for complete treatments, not samples: antihypertensives, antiparasitics, painkillers, vitamins and glucose control. Nineteen cases requiring follow-up were recorded and referred to the parish health post, with a commitment to accompany them on the next visit.',
    'El domingo cerró con misa en la capilla de Monte Alto. Cabían unas sesenta personas y entraron muchas más; el resto siguió la celebración desde la puerta y las ventanas. Al final, la presidenta del recinto agradeció en nombre de todos y pidió una sola cosa: que volvamos.': 'Sunday closed with Mass in the chapel of Monte Alto. It held about sixty people and many more came in; the rest followed the celebration from the door and the windows. At the end, the village president gave thanks on behalf of everyone and asked for one thing only: that we come back.',
    'Eso es, al final, de lo que se trata. No fuimos a resolver el sistema de salud de la zona rural del Guayas, porque no podemos. Fuimos a tender un puente de encuentro: a mirar a los ojos, a tomar la presión, a escuchar, a rezar juntos. La próxima brigada está prevista para marzo.': 'That, in the end, is what this is about. We did not go to fix the health system of rural Guayas, because we cannot. We went to build a bridge of encounter: to look people in the eye, to take their blood pressure, to listen, to pray together. The next brigade is planned for March.',
    'La próxima brigada es en marzo': 'The next brigade is in March',
    'Puedes sostenerla con tu donación o sumarte como voluntario si eres profesional de la salud.': 'You can sustain it with your donation, or join as a volunteer if you are a health professional.',

    /* ---- post: capilla El Laurel ---- */
    'Crónica desde El Laurel, Daule': 'Story from El Laurel, Daule',
    'Don Segundo Chalén es catequista en El Laurel desde 1998. Durante veintisiete años preparó a los niños para la primera comunión en el corredor de su casa, con sillas plásticas prestadas y un pizarrón apoyado contra la pared. Cuando había misa, la comunidad caminaba una hora hasta la cabecera parroquial. En invierno, con el camino hecho lodo, muchos simplemente no iban.': 'Don Segundo Chalén has been a catechist in El Laurel since 1998. For twenty-seven years he prepared children for first communion on the porch of his house, with borrowed plastic chairs and a chalkboard propped against the wall. When there was Mass, the community walked an hour to the parish seat. In winter, with the road turned to mud, many simply did not go.',
    'El pedido llegó por escrito, en una hoja de cuaderno: una capilla. No un templo, aclaraba la carta. Un techo, cuatro paredes y un lugar donde poner el sagrario.': 'The request came in writing, on a sheet of notebook paper: a chapel. Not a church, the letter clarified. A roof, four walls, and a place to put the tabernacle.',
    'La obra empezó en septiembre. Llegaron cuarenta y dos voluntarios en tres tandas: jóvenes de Guayaquil, dos familias completas y un grupo de universitarios extranjeros. Pero el número engaña, porque los que más trabajaron fueron los del recinto. Los hombres de El Laurel salían del arrozal a las cuatro de la tarde y se iban directo a la obra. Las mujeres organizaron la comida de los catorce días sin que nadie se lo pidiera.': 'Work began in September. Forty-two volunteers came in three waves: young people from Guayaquil, two entire families, and a group of international university students. But the number is misleading, because those who worked hardest were the villagers themselves. The men of El Laurel left the rice fields at four in the afternoon and went straight to the building site. The women organized fourteen days of meals without anyone asking them to.',
    '“Ustedes trajeron el cemento. La capilla la levantamos entre todos.”': '“You brought the cement. We raised the chapel together.”',
    '— Segundo Chalén, catequista de El Laurel': '— Segundo Chalén, catechist of El Laurel',
    'Se fundieron los plintos, se levantaron las paredes de bloque, se armó la estructura del techo y se instalaron las cubiertas. El piso quedó en contrapiso pulido. Hay ocho bancas, hechas por un carpintero del recinto con madera donada por una piladora de la zona.': 'The footings were poured, the block walls raised, the roof structure assembled and the roofing installed. The floor was left as polished screed. There are eight pews, made by a village carpenter with wood donated by a local rice mill.',
    'La misa de bendición fue el domingo 5 de octubre. Vinieron el párroco, ciento y algo de personas, y la banda de un colegio vecino. Don Segundo leyó la primera lectura. Se equivocó dos veces y nadie le dijo nada.': 'The blessing Mass was on Sunday, October 5. The parish priest came, a hundred-odd people, and the band from a neighboring school. Don Segundo read the first reading. He stumbled twice and no one said a word.',
    'Falta el enlucido exterior, falta pintar y falta la puerta definitiva. Ninguna de esas cosas impide que se rece adentro, que era el punto.': 'The exterior plaster is still missing, so is the paint and the final door. None of that stops people praying inside, which was the point.',
    'La próxima obra ya tiene pedido': 'The next build already has a request',
    'Cada capilla, casa o aula comunitaria empieza con una carta y se sostiene con donaciones. También puedes ir a construir.': 'Every chapel, home or community classroom starts with a letter and is sustained by donations. You can also come and build.',

    /* ---- post: navidad Aguas Verdes ---- */
    'Crónica desde Aguas Verdes, Santa Elena': 'Story from Aguas Verdes, Santa Elena',
    'La campaña se armó en tres semanas. Se pidió por redes lo básico: arroz, azúcar, aceite, atún, fideo, panela, leche en polvo. Llegó eso y bastante más. Un socio donó ciento veinte fundas de plástico grueso; otro, el transporte. Los juguetes se juntaron en una sola tarde en un colegio de Guayaquil.': 'The campaign came together in three weeks. The basics were requested on social media: rice, sugar, oil, tuna, pasta, panela, powdered milk. That arrived and a good deal more. One partner donated a hundred and twenty heavy plastic bags; another, the transport. The toys were collected in a single afternoon at a school in Guayaquil.',
    'El armado de las canastas se hizo el 20 de diciembre en el patio de una casa parroquial. Veintiséis voluntarios, tres horas, una fila de mesas y una lista de familias hecha en conjunto con la directiva del recinto. La lista importa: se armó preguntando, no suponiendo.': 'The baskets were assembled on December 20 in the yard of a parish house. Twenty-six volunteers, three hours, a row of tables, and a list of families drawn up together with the village board. The list matters: it was made by asking, not assuming.',
    'Al día siguiente salieron dos camionetas hacia Aguas Verdes y San Cristóbal. La entrega no se montó como un acto público con autoridades y fotos. Se hizo casa por casa, tocando la puerta, entrando a saludar.': 'The next day two trucks set out for Aguas Verdes and San Cristóbal. The delivery was not staged as a public event with officials and photographs. It was done house by house, knocking on the door, going in to greet people.',
    '“Lo que agradecen no es la funda. Es que alguien se acordó del nombre de sus hijos.”': '“What they are grateful for is not the bag. It is that someone remembered their children’s names.”',
    '— Coordinadora de la campaña': '— Campaign coordinator',
    'Los juguetes se entregaron aparte, en la cancha, con los niños presentes. No hubo sorteo ni cola: cada niño recibió el suyo. Los voluntarios se quedaron a jugar un partido que terminó cuando ya no se veía la pelota.': 'The toys were handed out separately, on the court, with the children present. There was no raffle and no queue: every child got one. The volunteers stayed to play a match that ended when the ball could no longer be seen.',
    'La misa de Nochebuena fue a las siete. La capilla de Aguas Verdes tiene capacidad para unas cincuenta personas; entraron muchas más y el resto siguió desde afuera. Al final, en vez del villancico previsto, alguien empezó a cantar otro y todos lo siguieron.': 'The Christmas Eve Mass was at seven. The chapel in Aguas Verdes holds about fifty people; many more came in and the rest followed from outside. At the end, instead of the planned carol, someone started singing another one and everyone followed.',
    'Las canastas se acaban en una semana o dos. Eso lo sabemos. Por eso la campaña navideña no es un programa aparte: es una parada más del acompañamiento a estos recintos, que sigue en enero, en marzo y en la temporada de lluvias.': 'The baskets run out in a week or two. We know that. That is why the Christmas campaign is not a separate program: it is one more stop in our accompaniment of these villages, which continues in January, in March, and through the rainy season.',
    'La temporada de lluvias es la próxima': 'The rainy season is next',
    'Las campañas solidarias se sostienen con donaciones y con aportes en especie: alimentos, medicinas y materiales.': 'Solidarity campaigns are sustained by donations and by in-kind gifts: food, medicine and materials.',

    /* ---- post: testimonio Cañaribamba ---- */
    'Testimonio recogido en Cañaribamba, Azuay': 'Testimony gathered in Cañaribamba, Azuay',
    'Soy médica general y llevo seis años trabajando en consulta externa. Me anoté en la misión de Cañaribamba por una razón bastante práctica: tenía vacaciones acumuladas y me parecía mejor usarlas en algo útil que en la playa. Escribí eso mismo en el formulario de voluntarios. Nadie me corrigió.': 'I am a general practitioner and I have worked six years in outpatient care. I signed up for the Cañaribamba mission for a fairly practical reason: I had vacation days saved up and it seemed better to spend them on something useful than at the beach. I wrote exactly that on the volunteer form. No one corrected me.',
    'El primer día atendí a treinta y un pacientes. Al principio funcioné como funciono siempre: preguntar, auscultar, escribir, entregar, siguiente. A media mañana entró una señora de unos sesenta años con dolor de rodilla. Le expliqué el tratamiento, le di el frasco y le dije que podía pasar. No se movió. Se quedó sentada, me miró y me preguntó de dónde era yo.': 'On the first day I saw thirty-one patients. At first I worked the way I always work: ask, examine, write, hand over, next. Mid-morning a woman of about sixty came in with knee pain. I explained the treatment, gave her the bottle and told her she could go. She did not move. She stayed seated, looked at me, and asked where I was from.',
    '“No me estaba pidiendo más medicina. Me estaba pidiendo cinco minutos.”': '“She was not asking me for more medicine. She was asking me for five minutes.”',
    '— Dra. María José Andrade, médica voluntaria': '— Dr. María José Andrade, volunteer physician',
    'Conversamos diez minutos. Me contó de sus hijos en Cuenca, del marido que murió hace cuatro años, de la huerta que ya no puede atender por la rodilla. Cuando se fue me di cuenta de que en seis años de consulta externa nunca había tenido esa conversación con nadie. No porque no quisiera: porque el sistema no la permite. Doce minutos por paciente.': 'We talked for ten minutes. She told me about her children in Cuenca, about the husband who died four years ago, about the garden she can no longer tend because of her knee. When she left I realized that in six years of outpatient care I had never had that conversation with anyone. Not because I did not want to: because the system does not allow it. Twelve minutes per patient.',
    'Los tres días siguientes trabajé distinto. Seguí atendiendo, seguí entregando medicinas, seguí derivando los casos que no podía resolver. Pero dejé de apurar. Y descubrí algo incómodo: la mayoría de la gente que llegaba no tenía una enfermedad grave. Tenía soledad, cansancio, miedo, y un cuerpo que cargaba todo eso.': 'For the next three days I worked differently. I kept seeing patients, kept handing out medicine, kept referring the cases I could not solve. But I stopped rushing. And I discovered something uncomfortable: most of the people who came did not have a serious illness. They had loneliness, exhaustion, fear, and a body carrying all of it.',
    'La última noche, en la capilla, el sacerdote dijo que la misión no consiste en llevarle algo a alguien, sino en encontrarse. Yo pensé que era una frase bonita para cerrar. Ahora creo que era una descripción bastante exacta de lo que me pasó. Vine a curar rodillas. Me fui con la sospecha de que llevaba años ejerciendo mi profesión a medias.': 'On the last night, in the chapel, the priest said that mission is not about bringing something to someone, but about meeting them. I thought it was a nice line to close with. Now I think it was a fairly exact description of what happened to me. I came to cure knees. I left suspecting I had spent years practicing my profession by halves.',
    'Vuelvo en marzo.': 'I am going back in March.',
    '¿Eres profesional de la salud?': 'Are you a health professional?',
    'Las brigadas médicas necesitan médicos, odontólogos, enfermeros y estudiantes. También puedes sostenerlas con tu donación.': 'The medical brigades need doctors, dentists, nurses and students. You can also sustain them with your donation.',

    /* ---- image descriptions ---- */
    'Misioneros levantando una cruz en las montañas del Ecuador': 'Missionaries raising a cross in the mountains of Ecuador',
    'Sacerdote dando la comunión durante una misión': 'A priest giving communion during a mission',
    'Voluntarios construyendo junto a la comunidad': 'Volunteers building alongside the community',
    'Odontóloga atendiendo a un niño en una brigada médica': 'A dentist treating a child at a medical brigade',
    'Niña de la comunidad sonriendo mientras abraza una muñeca, junto a su familia': 'A girl from the community smiling as she hugs a doll, beside her family',
    'Voluntaria conversando con una madre de la comunidad durante la consulta': 'A volunteer talking with a mother from the community during the consultation',
    'Misioneros trabajando en la construcción junto a la comunidad': 'Missionaries working on construction alongside the community',
    'Comunidad reunida en la capilla durante la entrega de canastas navideñas': 'The community gathered in the chapel during the Christmas basket delivery',
    'Comunidad reunida en la capilla durante la entrega de canastas': 'The community gathered in the chapel during the basket delivery',
    'Comunidad reunida en la capilla': 'The community gathered in the chapel',
    'Voluntaria auscultando a una niña de la comunidad': 'A volunteer examining a girl from the community',
    'Voluntaria auscultando a un recién nacido en brazos de su madre durante una brigada médica': 'A volunteer examining a newborn in her mother’s arms during a medical brigade',
    'Voluntaria tomando la presión a un niño durante la brigada médica en Tarifa': 'A volunteer taking a child’s blood pressure during the medical brigade in Tarifa',
    'Voluntaria tomando la presión a un niño en la brigada médica': 'A volunteer taking a child’s blood pressure at the medical brigade',
    'Voluntaria tomando la presión a un niño': 'A volunteer taking a child’s blood pressure',
    'Grupo misionero de Misiones Ecuador reunido frente a la capilla antes de salir a misión': 'A Misiones Ecuador mission group gathered in front of the chapel before setting out',
    'Niño de la comunidad dando un saludo de manos a una voluntaria durante una misión': 'A boy from the community high-fiving a volunteer during a mission',
    'Misioneros y comunidad compartiendo la fe': 'Missionaries and community sharing the faith',
    'Misioneros y comunidad reunidos en oración': 'Missionaries and community gathered in prayer',
    'Misioneros construyendo junto a la comunidad': 'Missionaries building alongside the community',
    'Consulta médica gratuita a una madre de la comunidad': 'A free medical consultation for a mother from the community',
    'Brigada médica de Misiones Ecuador atendiendo a los niños de la comunidad': 'A Misiones Ecuador medical brigade treating children from the community',
    'Brigada médica atendiendo a los niños de la comunidad': 'A medical brigade treating children from the community',
    'Encuentro con la comunidad durante la campaña': 'Meeting the community during the campaign',
    'Arrozales de la zona rural del Guayas': 'Rice fields in rural Guayas',
    'Personas trabajando en los arrozales de la costa ecuatoriana': 'People working the rice fields of the Ecuadorian coast',
    'Campos de arroz y cerros en la costa ecuatoriana': 'Rice fields and hills on the Ecuadorian coast',
    'Misionero saludando a la comunidad reunida en la capilla': 'A missionary greeting the community gathered in the chapel',
    'Madre, niño y voluntaria sonriendo juntos en una brigada médica': 'A mother, a child and a volunteer smiling together at a medical brigade',
    'Voluntaria en oración ante el altar': 'A volunteer praying before the altar',
    'Escudo de la Diócesis de Daule': 'Coat of arms of the Diocese of Daule',
    'Escudo de la Diócesis de Santa Elena': 'Coat of arms of the Diocese of Santa Elena',

    /* ---- mission archive: abbreviated months, dioceses, year summaries ---- */
    'Ene': 'Jan',
    'Abr': 'Apr',
    'Ago': 'Aug',
    'Dic': 'Dec',
    'Diócesis de Cuenca': 'Diocese of Cuenca',
    '15 recintos atendidos': '15 villages served',
    'Boca de Caña y Monte Alto': 'Boca de Caña and Monte Alto',
    'Aguas Verdes y San Cristóbal': 'Aguas Verdes and San Cristóbal',
    'Huasipamba y Cañaribamba': 'Huasipamba and Cañaribamba',
    'Cañaribamba y Tugula': 'Cañaribamba and Tugula',
    'El Jigual y El Laurel': 'El Jigual and El Laurel',
    'Bajada de Chanduy y Cerecita': 'Bajada de Chanduy and Cerecita',
    'La Margarita y El Carmen': 'La Margarita and El Carmen',
    'Tarifa y La Alianza': 'Tarifa and La Alianza',
    '10 misiones · 181 voluntarios · +1.067 beneficiarios': '10 missions · 181 volunteers · +1,067 beneficiaries',
    '13 misiones · 254 voluntarios · +1.000 beneficiarios': '13 missions · 254 volunteers · +1,000 beneficiaries'
  };

  var ATTRS = ['alt', 'aria-label', 'placeholder', 'title'];
  var origText = new Map();
  var origAttr = new Map();
  var busy = false;

  function lang() {
    try { return localStorage.getItem(KEY) === 'es' ? 'es' : 'en'; } catch (e) { return 'en'; }
  }

  function textNodes(root) {
    var out = [];
    if (!root || !root.nodeType) return out;
    if (root.nodeType === 3) return [root];
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) out.push(n);
    return out;
  }

  function apply(root) {
    var to = lang();
    busy = true;
    try {
      textNodes(root).forEach(function (node) {
        var cur = node.nodeValue;
        var key = cur.replace(/\s+/g, ' ').trim();
        if (to === 'en') {
          var en = DICT[key];
          if (en !== undefined && en !== key) {
            if (!origText.has(node)) origText.set(node, cur);
            // keep the original surrounding whitespace so inline runs stay spaced
            var lead = cur.match(/^\s*/)[0];
            var tail = cur.match(/\s*$/)[0];
            var next = lead + en + tail;
            if (node.nodeValue !== next) node.nodeValue = next;
          }
        } else if (origText.has(node)) {
          node.nodeValue = origText.get(node);
          origText.delete(node);
        }
      });

      var scope = root && root.querySelectorAll ? root : document;
      ATTRS.forEach(function (a) {
        var els = scope.querySelectorAll('[' + a + ']');
        for (var i = 0; i < els.length; i++) {
          var el = els[i];
          var val = el.getAttribute(a);
          if (!val) continue;
          var k = val.replace(/\s+/g, ' ').trim();
          var mapKey = el;
          if (to === 'en') {
            var t = DICT[k];
            if (t !== undefined && t !== k) {
              if (!origAttr.has(mapKey)) origAttr.set(mapKey, {});
              var store = origAttr.get(mapKey);
              if (store[a] === undefined) store[a] = val;
              if (el.getAttribute(a) !== t) el.setAttribute(a, t);
            }
          } else if (origAttr.has(mapKey) && origAttr.get(mapKey)[a] !== undefined) {
            el.setAttribute(a, origAttr.get(mapKey)[a]);
            delete origAttr.get(mapKey)[a];
          }
        }
      });

      document.documentElement.setAttribute('lang', to === 'en' ? 'en' : 'es');
    } finally {
      busy = false;
    }
  }

  function setLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
    if (l === 'es') { origText.forEach(function (v, n) { n.nodeValue = v; }); origText.clear(); }
    apply(document.body);
    paintToggle();
    broadcast(l);
  }

  /* ---- toggle control, injected into each page header ---- */
  function paintToggle() {
    var btns = document.querySelectorAll('[data-me-lang-btn]');
    var cur = lang();
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      var on = b.getAttribute('data-me-lang-btn') === cur;
      b.style.background = on ? 'currentColor' : 'transparent';
      b.style.opacity = on ? '1' : '0.6';
      b.style.fontWeight = '700';
      var inner = b.firstChild;
      if (inner && inner.style) inner.style.mixBlendMode = on ? 'screen' : 'normal';
    }
  }

  function buildToggle(header) {
    if (header.querySelector('[data-me-lang]')) return;
    var navLink = header.querySelector('nav a');
    var col = navLink ? getComputedStyle(navLink).color : '#1A1A1A';
    var light = /rgba?\(\s*(2[0-9]{2}|1[89][0-9])/.test(col);

    var wrap = document.createElement('div');
    wrap.setAttribute('data-me-lang', '');
    wrap.style.cssText = 'display:inline-flex;align-items:center;gap:2px;padding:3px;border-radius:999px;flex-shrink:0;border:1px solid ' +
      (light ? 'rgba(255,255,255,0.35)' : 'rgba(20,51,86,0.18)') + ';';

    [['en', 'EN'], ['es', 'ES']].forEach(function (p) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-me-lang-btn', p[0]);
      b.textContent = p[1];
      b.style.cssText = 'border:none;cursor:pointer;font-family:Montserrat,system-ui,sans-serif;font-size:11px;letter-spacing:0.06em;' +
        'padding:5px 9px;border-radius:999px;line-height:1;transition:opacity .18s ease;background:transparent;color:' +
        (light ? '#FFFFFF' : '#143356') + ';';
      b.addEventListener('click', function () { setLang(p[0]); });
      wrap.appendChild(b);
    });

    // Se coloca justo antes del botón de donar. En donar.html ese botón apunta
    // directo a PayPal, así que hay que reconocer también esas variantes o el
    // selector falla y el toggle termina después del botón.
    var donate = header.querySelector('a[href*="donar"], a[href*="#dona"], a[href*="donate"], a[href*="paypal.com"], a[href*="ppls.me"]');
    if (donate && donate.parentNode) donate.parentNode.insertBefore(wrap, donate);
    else header.firstElementChild && header.firstElementChild.appendChild(wrap);

    // active pill needs a readable fill, so use a solid chip instead of currentColor
    var pills = wrap.querySelectorAll('[data-me-lang-btn]');
    for (var i = 0; i < pills.length; i++) {
      pills[i].addEventListener('mouseenter', function () { this.style.opacity = '1'; });
      pills[i].addEventListener('mouseleave', paintToggle);
    }
    styleActive(wrap, light);
  }

  function styleActive(wrap, light) {
    var cur = lang();
    var pills = wrap.querySelectorAll('[data-me-lang-btn]');
    for (var i = 0; i < pills.length; i++) {
      var b = pills[i];
      var on = b.getAttribute('data-me-lang-btn') === cur;
      b.style.background = on ? (light ? 'rgba(255,255,255,0.22)' : '#EAF2FB') : 'transparent';
      b.style.opacity = on ? '1' : '0.62';
    }
  }

  paintToggle = function () {
    var wraps = document.querySelectorAll('[data-me-lang]');
    for (var i = 0; i < wraps.length; i++) {
      var navLink = wraps[i].closest('header') && wraps[i].closest('header').querySelector('nav a');
      var col = navLink ? getComputedStyle(navLink).color : '#1A1A1A';
      styleActive(wraps[i], /rgba?\(\s*(2[0-9]{2}|1[89][0-9])/.test(col));
    }
  };

  function tick() {
    if (busy) return;
    apply(document.body);
    var h = document.querySelector('header');
    if (h) { buildToggle(h); paintToggle(); }
  }

  var obs = new MutationObserver(function () {
    if (busy) return;
    clearTimeout(obs._t);
    obs._t = setTimeout(tick, 60);
  });

  function start() {
    tick();
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    [120, 400, 900, 1800].forEach(function (ms) { setTimeout(tick, ms); });
  }

  // The map lives in a same-origin iframe with its own copy of this script.
  // A language change in one document must reach the others: `storage` fires on
  // every other Document sharing the storage area, and postMessage covers the
  // writer -> child direction that `storage` deliberately skips.
  function reapply() {
    if (lang() === 'es') { origText.forEach(function (v, n) { n.nodeValue = v; }); origText.clear(); }
    apply(document.body);
    paintToggle();
  }

  window.addEventListener('storage', function (e) {
    if (e.key && e.key !== KEY) return;
    reapply();
  });

  window.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== 'me-lang') return;
    try { localStorage.setItem(KEY, e.data.lang); } catch (err) {}
    reapply();
  });

  function broadcast(l) {
    var frames = document.querySelectorAll('iframe');
    for (var i = 0; i < frames.length; i++) {
      try { frames[i].contentWindow.postMessage({ type: 'me-lang', lang: l }, '*'); } catch (err) {}
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
