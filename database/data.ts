export interface SeedICurriculum {
    description: string;
    images: string[];
    title: string;
    ano: string;
    contacto: string;
    tiempo: string;
}

interface SeedData {
    curriculum: SeedICurriculum[],
}

export const initialDataCard: SeedData = {
    curriculum: [
        {
            description: "Realizamos la remodelación de la piscina principal con un área aproximada de 1100 metros cuadrados, así como la colocación de materiales de veneciano y cerámica en baños de las habitaciones, los tiempos fueron a raíz de ir liberando las áreas.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663099408/somosm2/1_fli07z.jpg',
            ],
            title: "Hotel Blue Bay Cancún",
            ano: '2003',
            contacto:'Arq. Rubén Chávez Sánchez gerente de construcción de grupo Ritco DLP.',
            tiempo:'6 meses.'
        },
        {
            description: "Realizamos la remodelación de la piscina principal, con una dimensión aproximadamente de 400 metros cuadrados y la fabricación del logotipo en el área colocando una gran carpa en el área debido a la premura del tiempo y la necesidad de evitar las inclemencias del tiempo.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663101778/somosm2/2_ffyvsd.jpg',
            ],
            title: "Hotel Desiré Bahía Petempich",
            ano: '2006',
            contacto:'Arq. Rubén Chávez Sánchez gerente de construcción de grupo Ritco DLP.',
            tiempo:'2 semanas'
        },
        {
            description: "Realizamos la colocación de mosaico vítreo kolorines en área de piscina principal de aproximadamente 3800 con diseño en esfumado especial, acabados en el área del bar, la colocación de murales en tecnicolor y bizantino en el área del Spa, así como colocación de mármol y cerámico en áreas de publicas.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663102015/somosm2/3_aq0kse.jpg',
            ],
            title: "Hotel Royal Haciendas",
            ano: '2008',
            contacto:'Arq. Julián Soto/Arq. Oscar Rizk Constructora Hacienda Real Del Mar.',
            tiempo:'1.2 años aproximadamente'
        },
        {
            description: "Realizamos suministro y colocación para la remodelación de la piscina principal con una dimensión aproximada de 980 metros cuadrados, así como la habilitación de áreas públicas como regaderas, snack bar y baños públicos en general.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663102181/somosm2/4_nmb1ft.jpg',
            ],
            title: "Beach Club Paradise Cozumel",
            ano: '2010',
            contacto:'Lic. Alberto Pat Pérez Inmobiliaria Isla del Ensueño S.A. de C.V.',
            tiempo:'6 semanas'
        },
        {
            description: "Realizamos suministro y colocación de mosaico vítreo en la piscina principal con una dimensión aproximada de 700 metros cuadrados, también se fabricó el logotipo de la alberca en técnica de mosaico con corte.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663103228/somosm2/5_wv80xu.jpg',
            ],
            title: "Hotel Landmark Cozumel",
            ano: '2011',
            contacto:'Arq. Jorge Ávila Landmark hotel Cozumel',
            tiempo:'5 semanas'
        },
        {
            description: "Realizamos la remodelación de la piscina principal, con una dimensión aproximadamente de 2000 metros cuadrados debido a la premura del tiempo implementamos dos turnos de trabajo por la necesidad del hotel en mantener cerrado el menor tiempo posible el área.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663102722/somosm2/6_jbhysb.jpg',
            ],
            title: "Hotel Hard rock Cancún",
            ano: '2012',
            contacto:'Ing. Gabriel Sánchez GS construcciones contratista/Ing. Aldo Aguilar Supervisión Corporativo.',
            tiempo:'8 días'
        },
        {
            description: "Realizamos la remodelación de la piscina principal, con una dimensión aproximadamente de 2000 metros cuadrados debido a la premura del tiempo implementamos dos turnos de trabajo por la necesidad del hotel en mantener cerrado el menor tiempo posible el área.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663102984/somosm2/7_v3dwti.jpg',
            ],
            title: "Hotel Hard Rock Riviera Maya",
            ano: '2013',
            contacto:'Ing. Aldo Aguilar, DYCA Construcciones/Arq. Iván Aguilar, Arq. Javier Martínez, Arq. Lizbeth Gallegos, supervisión Gerencia de proyecto Circle AP.',
            tiempo:'1 año y 4 meses aproximadamente.'
        },
        {
            description: "Realizamos la remodelación de la piscina principal, con una dimensión aproximadamente de 2000 metros cuadrados debido a la premura del tiempo implementamos dos turnos de trabajo por la necesidad del hotel en mantener cerrado el menor tiempo posible el área.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663104137/somosm2/8_pdo2pb.jpg',
            ],
            title: "Hotel Flamingos Holbox",
            ano: '2014',
            contacto:'Arq. Daniel García supervisión/Damián Valles Grupo Curua S.A de C.V.',
            tiempo:'8 semanas.'
        },
        {
            description: "Realizamos la remodelación de la piscina principal, con una dimensión aproximadamente de 2000 metros cuadrados debido a la premura del tiempo implementamos dos turnos de trabajo por la necesidad del hotel en mantener cerrado el menor tiempo posible el área.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663104358/somosm2/9_qpxr76.jpg',
            ],
            title: "Country Towers Mérida",
            ano: '2015',
            contacto:'Ing. Guillermo Hernández Ea Armida Ingenieros asociados/ Inspiratto Mérida supervisión.',
            tiempo:'12 meses.'
        },
        {
            description: "Realizamos suministro e instalación de cavados de la piscina general y pisos en área de SPA donde también se colocó veneciano en áreas húmedas cantidad aproximada 1800 metros cuadrados totales.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663104572/somosm2/10_mvlu2x.jpg',
            ],
            title: "Country Olas Cd. Del Carmen",
            ano: '2015',
            contacto:'Lic. Luis Augusto García Rosado Propietaria/ Supermateriales del golfo S.A de C.V.',
            tiempo:'12 meses.'
        },
        {
            description: "Remodelación general de piscina en residencia particular desde la construcción, diseño y acabados en general, con este grupo también realizamos las piscinas de hotel ocean view Campeche y la casa club del desarrollo Campeche Hills.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663104864/somosm2/1_fe2huk.jpg',
            ],
            title: "Residencia Particular",
            ano: '2016/17',
            contacto:'Lic. Iván Escalante /Grupo Karims Campeche.',
            tiempo:'4 meses.'
        },
        {
            description: "Colocación de acabados especial My mosaic en área de Vitality, Forrado de camastros y Jacuzzi en área de SPAy areas os cuadrados, así también decorativas a ajustar sobre la marcha para cubrir.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663105281/somosm2/2_fxovuh.jpg',
            ],
            title: "Hotel Único Riviera Maya",
            ano: '2017',
            contacto:'Arq. Lizbeth Gallegos supervisión/ Circle A.P.',
            tiempo:'8 Semanas.'
        },
        {
            description: "Reparación de fugas en jacuzzis de SPA, suministro e instalación de acabados del área.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663105717/somosm2/3_cpukek.jpg',
            ],
            title: "Hotel Hard Rock Riv. Maya",
            ano: '2017/18',
            contacto:'Gerencia de Mantenimiento Ing. Roberto Gracia.',
            tiempo:'4 semanas.'
        },
        {
            description: "Colocación de acabados, pisos, muros , pastas y construcción general de albercas en casas particulares del desarrollo de habitacional Campeche Hills.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663105986/somosm2/4_ffismj.jpg',
            ],
            title: "Particular en Campeche",
            ano: '2018',
            contacto:'Lic. Iván Escalante /Grupo Karims Campeche',
            tiempo:'6 meses.'
        },
        {
            description: "Construcción de piscina general, aplicación de acabados generales y pisos estampados en varias residencias particulares.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663106253/somosm2/5_mrnpji.jpg',
            ],
            title: "Residencial Aqua Cancún",
            ano: '2019',
            contacto:'Lic. Jalil Sánchez Romero/Propietario',
            tiempo:'5 meses diferidos.'
        },
        {
            description: "Colocación de acabados en habitaciones cerámica en muros, pisos y veneciano en baños. En áreas públicas, piso de pasta en andadores generales tipo rústico, cerámica tipo pasta decorativa en baños públicos, Acabado general de la alberca tipo piedra natural. En áreas de cocina colocación de cerámica general y trabajos diversos, Acabados finos en área de recepción general.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663106460/somosm2/6_cskgfc.jpg',
            ],
            title: "Hotel Mayan Monkey Tulum",
            ano: '2019',
            contacto:'Arq. Francisco Lira/Arq. Alejandro García Supervisión/ Circle A.P.',
            tiempo:'6 meses.'
        },
        {
            description: "Colocación de acabados tipo Ekol en alberca Lúdica, Jacuzzis y reparaciones en diversas áreas de piscina del hotel. Estos trabajos fueron postergados por la pandemia y se retomaron en diciembre de 2020 culminándose en esas fechas los trabajos generales.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663106742/somosm2/7_syqbh6.jpg',
            ],
            title: "Hotel Único · Riviera Maya",
            ano: '2020',
            contacto:'Ing. Aldo Aguilar CEO Grupo RCD hotels/Ing. Jorge Macías Gte. Mantto. Hotel Único.',
            tiempo:'8 meses (POR PANDEMIA).'
        },
        {
            description: "Colocación de acabados diversos en fachadas, áreas de cocina, colocación de pisos en concreto pulido, ampliación de subestación eléctrica según requerimientos, trabajos generales de albañilería, en azotea de colocación de impermeabilizante, bases de tanques estacionarios y otras instalaciones de equipos.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663106889/somosm2/8_g3crtg.jpg',
            ],
            title: "Restaurante Harry’s Tulum",
            ano: '2020',
            contacto:'Arq. Francisco Lira/Arq. Javier Martínez Supervisión/ Circle A.P.',
            tiempo:'2 meses.'
        },
        {
            description: "Remodelación de piscina con modificación de diseño, Incluyendo trabajos generales de albañilería y aplicación de acabado Ekol (Naica) 190 m2 aproximadamente.",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663107196/somosm2/9_kkrzkn.jpg',
            ],
            title: "Residencial Puerto Cancún",
            ano: '2020',
            contacto:'Sr. Roberto Chapur/Ing. Aldo Aguilar RCD resorts.',
            tiempo:'2 semanas.'
        },
        {
            description: "Acabados en piscina 2 cuerpos en piscina elevadas del hotel Residence Inn Cancún 390 m2 aproximadamente, en acabado Ekol modelo Naica, Incluyendo limpieza general, preparación de superficie, impermeabilización general y aplicación de nuevo sustrato (Ekol).",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663107386/somosm2/10_w89zyp.jpg',
            ],
            title: "Hotel Residence Inn Cancún",
            ano: '2020',
            contacto:'Arq. Fernando Santos (Residente Obra/Ing. Aldo Aguilar RCD Resorts',
            tiempo:'2 semanas.'
        },
        {
            description: "Remodelación general de piscinas del hotel lado Heaven 3800 m2 aproximadamente en acabado Ekol modelo Naica, Incluyendo la demolición de veneciano anterior, limpieza general, preparación de superficie, impermeabilización general y aplicación de nuevo sustrato (Ekol).",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663107674/somosm2/1_foclfc.jpg',
            ],
            title: "Hotel Hard Rock Riviera Maya Lado Heaven",
            ano: '2020',
            contacto:'Arq. Margarita Ferreira (supervisión)/Ing. Aldo Aguilar RCD Resorts',
            tiempo:'3 meses (agosto-diciembre).'
        },
        {
            description: "Remodelación general de piscinas del hotel lado Hacienda 4800 m2 aproximadamente, en acabado Ekol modelo Centla con mortero blanco, Incluyendo, limpieza general, preparación de superficie, impermeabilización general y aplicación de nuevo sustrato (Ekol).",
            images: [
                'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1663107903/somosm2/2_dfavz4.jpg',
            ],
            title: "Hotel Hard Rock Riviera Maya Lado Hacienda",
            ano: '2021',
            contacto:'Arq. Esther Peña/Ing. Leonardo Solórzano (supervisión)/Ing. Aldo Aguilar RCD Resorts',
            tiempo:'3 meses (febrero-abril).'
        },
    ]
}