document.addEventListener('DOMContentLoaded', () => {
    // Example manga chapter data
    const mangaChapters = {
        'spy-x-family': {
            title: 'Spy x Family',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/spy-x-family-ch1-1.jpg',
                        'pics/spy-x-family-ch1-2.jpg',
                        'pics/spy-x-family-ch1-3.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/spy-x-family-ch2-1.jpg',
                        'pics/spy-x-family-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/spy-x-family-ch3-1.jpg',
                        'pics/spy-x-family-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'takahashi': {
            title: 'Takahashi',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/takahashi-ch1-1.jpg',
                        'pics/takahashi-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/takahashi-ch2-1.jpg',
                        'pics/takahashi-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/takahashi-ch3-1.jpg',
                        'pics/takahashi-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'beatM': {
            title: 'Beat Master',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/beatM-ch1-1.jpg',
                        'pics/beatM-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/beatM-ch2-1.jpg',
                        'pics/beatM-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/beatM-ch3-1.jpg',
                        'pics/beatM-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'kka': {
            title: 'juujikanorokunin',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'juujikaNoRokunin/Chapter1/JJK1.png',
                        'juujikaNoRokunin/Chapter1/jjk2.png',
                        'juujikaNoRokunin/Chapter1/jj3.png',
                        'juujikaNoRokunin/Chapter1/jjk4.png',
                        'juujikaNoRokunin/Chapter1/jjk5.png',
                        'juujikaNoRokunin/Chapter1/011.jpg',
                        'juujikaNoRokunin/Chapter1/012.jpg',
                        'juujikaNoRokunin/Chapter1/013.jpg',
                        'juujikaNoRokunin/Chapter1/014.jpg',
                        'juujikaNoRokunin/Chapter1/015 (1).jpg',
                        'juujikaNoRokunin/Chapter1/016.jpg',
                        'juujikaNoRokunin/Chapter1/017.jpg',
                        'juujikaNoRokunin/Chapter1/018.jpg',
                        'juujikaNoRokunin/Chapter1/019.jpg',
                        'juujikaNoRokunin/Chapter1/020.jpg',
                        'juujikaNoRokunin/Chapter1/021.jpg',
                        'juujikaNoRokunin/Chapter1/022.jpg',
                        'juujikaNoRokunin/Chapter1/023.jpg',
                        'juujikaNoRokunin/Chapter1/024.jpg',
                        'juujikaNoRokunin/Chapter1/025.jpg',
                        'juujikaNoRokunin/Chapter1/026.jpg',
                        'juujikaNoRokunin/Chapter1/027.jpg',
                        'juujikaNoRokunin/Chapter1/028.jpg',
                        'juujikaNoRokunin/Chapter1/029.jpg',
                        'juujikaNoRokunin/Chapter1/030.jpg',
                        'juujikaNoRokunin/Chapter1/031.jpg',
                        'juujikaNoRokunin/Chapter1/032.jpg',
                        'juujikaNoRokunin/Chapter1/033.jpg',
                        'juujikaNoRokunin/Chapter1/034.jpg',
                        'juujikaNoRokunin/Chapter1/035.jpg',
                        'juujikaNoRokunin/Chapter1/036.jpg',
                        'juujikaNoRokunin/Chapter1/037.jpg',
                        'juujikaNoRokunin/Chapter1/038.jpg',
                        'juujikaNoRokunin/Chapter1/039.jpg',
                        'juujikaNoRokunin/Chapter1/040.jpg',
                        'juujikaNoRokunin/Chapter1/041.jpg',
                        'juujikaNoRokunin/Chapter1/042.jpg',
                        'juujikaNoRokunin/Chapter1/043.jpg',
                        'juujikaNoRokunin/Chapter1/044.jpg',
                        'juujikaNoRokunin/Chapter1/045.jpg',
                        'juujikaNoRokunin/Chapter1/046.jpg',
                        'juujikaNoRokunin/Chapter1/047.jpg',
                        'juujikaNoRokunin/Chapter1/048.jpg',
                        'juujikaNoRokunin/Chapter1/049.jpg',
                        'juujikaNoRokunin/Chapter1/050.jpg',
                        'juujikaNoRokunin/Chapter1/051.jpg',
                        'juujikaNoRokunin/Chapter1/052.jpg',
                        'juujikaNoRokunin/Chapter1/053.jpg',
                        'juujikaNoRokunin/Chapter1/054.jpg',
                        'juujikaNoRokunin/Chapter1/055.jpg',
                        'juujikaNoRokunin/Chapter1/056.jpg',
                        'juujikaNoRokunin/Chapter1/057.jpg',
                        'juujikaNoRokunin/Chapter1/058.jpg',
                        'juujikaNoRokunin/Chapter1/059.jpg',
                        'juujikaNoRokunin/Chapter1/060.jpg',
                        'juujikaNoRokunin/Chapter1/061.jpg',
                        'juujikaNoRokunin/Chapter1/062.jpg',
                        'juujikaNoRokunin/Chapter1/063.jpg',
                        'juujikaNoRokunin/Chapter1/064.jpg',
                        'juujikaNoRokunin/Chapter1/065.jpg',
                        'juujikaNoRokunin/Chapter1/066.jpg',
                        'juujikaNoRokunin/Chapter1/067.jpg',
                        'juujikaNoRokunin/Chapter1/068.jpg',
                        'juujikaNoRokunin/Chapter1/069.jpg',
                        'juujikaNoRokunin/Chapter1/070.jpg',
                        'juujikaNoRokunin/Chapter1/071.jpg',
                        'juujikaNoRokunin/Chapter1/072.jpg',
                        'juujikaNoRokunin/Chapter1/073.jpg',
                        'juujikaNoRokunin/Chapter1/074.jpg',
                        'juujikaNoRokunin/Chapter1/075.jpg',
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'juujikaNoRokunin/Chapter2/001.jpg',
                        'juujikaNoRokunin/Chapter2/002.jpg',
                        'juujikaNoRokunin/Chapter2/003.jpg',
                        'juujikaNoRokunin/Chapter2/004.jpg',
                        'juujikaNoRokunin/Chapter2/005.jpg',
                        'juujikaNoRokunin/Chapter2/006.jpg',
                        'juujikaNoRokunin/Chapter2/007.jpg',
                        'juujikaNoRokunin/Chapter2/008.jpg',
                        'juujikaNoRokunin/Chapter2/009.jpg',
                        'juujikaNoRokunin/Chapter2/010.jpg',
                        'juujikaNoRokunin/Chapter2/011.jpg',
                        'juujikaNoRokunin/Chapter2/012.jpg',
                        'juujikaNoRokunin/Chapter2/013.jpg',
                        'juujikaNoRokunin/Chapter2/014.jpg',
                        'juujikaNoRokunin/Chapter2/015.jpg',
                        'juujikaNoRokunin/Chapter2/016.jpg',
                        'juujikaNoRokunin/Chapter2/017.jpg',
                        'juujikaNoRokunin/Chapter2/018.jpg',
                        'juujikaNoRokunin/Chapter2/019.jpg',
                        'juujikaNoRokunin/Chapter2/020.jpg',
                        'juujikaNoRokunin/Chapter2/021.jpg',
                        'juujikaNoRokunin/Chapter2/022.jpg',
                        'juujikaNoRokunin/Chapter2/023.jpg',
                        'juujikaNoRokunin/Chapter2/024.jpg',
                        'juujikaNoRokunin/Chapter2/025.jpg',
                        'juujikaNoRokunin/Chapter2/026.jpg',
                        'juujikaNoRokunin/Chapter2/027.jpg',
                        'juujikaNoRokunin/Chapter2/028.jpg',
                        'juujikaNoRokunin/Chapter2/029.jpg',
                        'juujikaNoRokunin/Chapter2/030.jpg',
                        'juujikaNoRokunin/Chapter2/031.jpg',
                        'juujikaNoRokunin/Chapter2/032.jpg',
                        'juujikaNoRokunin/Chapter2/033.jpg',
                        'juujikaNoRokunin/Chapter2/034.jpg',
                        'juujikaNoRokunin/Chapter2/035.jpg',
                        'juujikaNoRokunin/Chapter2/036.jpg',
                        'juujikaNoRokunin/Chapter2/037.jpg',
                        'juujikaNoRokunin/Chapter2/038.jpg',
                        'juujikaNoRokunin/Chapter2/039.jpg',
                        'juujikaNoRokunin/Chapter2/040.jpg',
                        'juujikaNoRokunin/Chapter2/041.jpg',
                        'juujikaNoRokunin/Chapter2/042.jpg',
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'juujikaNoRokunin/Chapter3/001 (1).jpg',
                        'juujikaNoRokunin/Chapter3/002.jpg',
                        'juujikaNoRokunin/Chapter3/003.jpg',
                        'juujikaNoRokunin/Chapter3/004.jpg',
                        'juujikaNoRokunin/Chapter3/005.jpg',
                        'juujikaNoRokunin/Chapter3/006.jpg',
                        'juujikaNoRokunin/Chapter3/007.jpg',
                        'juujikaNoRokunin/Chapter3/008.jpg',
                        'juujikaNoRokunin/Chapter3/009.jpg',
                        'juujikaNoRokunin/Chapter3/010.jpg',
                        'juujikaNoRokunin/Chapter3/011.jpg',
                        'juujikaNoRokunin/Chapter3/012.jpg',
                        'juujikaNoRokunin/Chapter3/013.jpg',
                        'juujikaNoRokunin/Chapter3/014.jpg',
                        'juujikaNoRokunin/Chapter3/015.jpg',
                        'juujikaNoRokunin/Chapter3/016.jpg',
                        'juujikaNoRokunin/Chapter3/017.jpg',
                        'juujikaNoRokunin/Chapter3/018.jpg',
                        'juujikaNoRokunin/Chapter3/019.jpg',
                        'juujikaNoRokunin/Chapter3/020.jpg',
                        'juujikaNoRokunin/Chapter3/021.jpg',
                        'juujikaNoRokunin/Chapter3/022.jpg',
                        'juujikaNoRokunin/Chapter3/023.jpg',
                        'juujikaNoRokunin/Chapter3/024.jpg',
                        'juujikaNoRokunin/Chapter3/025.jpg',
                        'juujikaNoRokunin/Chapter3/026.jpg',
                        'juujikaNoRokunin/Chapter3/027.jpg',
                        'juujikaNoRokunin/Chapter3/028.jpg',
                        'juujikaNoRokunin/Chapter3/029.jpg',
                        'juujikaNoRokunin/Chapter3/030.jpg',
                        'juujikaNoRokunin/Chapter3/031.jpg',
                        'juujikaNoRokunin/Chapter3/032.jpg',
                        'juujikaNoRokunin/Chapter3/033.jpg',
                        'juujikaNoRokunin/Chapter3/034.jpg',
                        'juujikaNoRokunin/Chapter3/035.jpg',
                        'juujikaNoRokunin/Chapter3/036.jpg',
                        'juujikaNoRokunin/Chapter3/037.jpg',
                    ]
                },
                '4': {
                    title: 'Chapter 4',
                    images: [
                        'juujikaNoRokunin/Chapter4/001.jpg',
                        'juujikaNoRokunin/Chapter4/002.jpg',
                        'juujikaNoRokunin/Chapter4/003.jpg',
                        'juujikaNoRokunin/Chapter4/004.jpg',
                        'juujikaNoRokunin/Chapter4/005.jpg',
                        'juujikaNoRokunin/Chapter4/006.jpg',
                        'juujikaNoRokunin/Chapter4/007.jpg',
                        'juujikaNoRokunin/Chapter4/008.jpg',
                        'juujikaNoRokunin/Chapter4/009.jpg',
                        'juujikaNoRokunin/Chapter4/010.jpg',
                        'juujikaNoRokunin/Chapter4/011.jpg',
                        'juujikaNoRokunin/Chapter4/012.jpg',
                        'juujikaNoRokunin/Chapter4/013.jpg',
                        'juujikaNoRokunin/Chapter4/014.jpg',
                        'juujikaNoRokunin/Chapter4/015.jpg',
                        'juujikaNoRokunin/Chapter4/016.jpg',
                        'juujikaNoRokunin/Chapter4/017.jpg',
                        'juujikaNoRokunin/Chapter4/018.jpg',
                        'juujikaNoRokunin/Chapter4/019.jpg',
                        'juujikaNoRokunin/Chapter4/020.jpg',
                        'juujikaNoRokunin/Chapter4/021.jpg',
                        'juujikaNoRokunin/Chapter4/022.jpg',
                        'juujikaNoRokunin/Chapter4/023.jpg',
                        'juujikaNoRokunin/Chapter4/024.jpg',
                        'juujikaNoRokunin/Chapter4/025.jpg',
                        'juujikaNoRokunin/Chapter4/026.jpg',
                        'juujikaNoRokunin/Chapter4/027.jpg',
                        'juujikaNoRokunin/Chapter4/028.jpg',
                        'juujikaNoRokunin/Chapter4/029.jpg',
                        'juujikaNoRokunin/Chapter4/030.jpg',
                    ]
                },
                '5': {
                    title: 'Chapter 5',
                    images: [
                        'juujikaNoRokunin/Chapter5/003 (1).jpg',
                        'juujikaNoRokunin/Chapter5/004.jpg',
                        'juujikaNoRokunin/Chapter5/005.jpg',
                        'juujikaNoRokunin/Chapter5/006.jpg',
                        'juujikaNoRokunin/Chapter5/007.jpg',
                        'juujikaNoRokunin/Chapter5/008.jpg',
                        'juujikaNoRokunin/Chapter5/009.jpg',
                        'juujikaNoRokunin/Chapter5/010.jpg',
                        'juujikaNoRokunin/Chapter5/011.jpg',
                        'juujikaNoRokunin/Chapter5/012.jpg',
                        'juujikaNoRokunin/Chapter5/013.jpg',
                        'juujikaNoRokunin/Chapter5/014.jpg',
                        'juujikaNoRokunin/Chapter5/015.jpg',
                        'juujikaNoRokunin/Chapter5/016.jpg',
                        'juujikaNoRokunin/Chapter5/017.jpg',
                        'juujikaNoRokunin/Chapter5/018.jpg',
                        'juujikaNoRokunin/Chapter5/019.jpg',
                        'juujikaNoRokunin/Chapter5/020.jpg',
                        'juujikaNoRokunin/Chapter5/021.jpg',
                        'juujikaNoRokunin/Chapter5/022.jpg',
                        'juujikaNoRokunin/Chapter5/023.jpg',
                        'juujikaNoRokunin/Chapter5/024.jpg',
                        'juujikaNoRokunin/Chapter5/025.jpg',
                        'juujikaNoRokunin/Chapter5/026.jpg',
                        'juujikaNoRokunin/Chapter5/027.jpg',
                        'juujikaNoRokunin/Chapter5/028.jpg',
                        'juujikaNoRokunin/Chapter5/029.jpg',
                        'juujikaNoRokunin/Chapter5/030.jpg',
                        'juujikaNoRokunin/Chapter5/031.jpg',
                        'juujikaNoRokunin/Chapter5/032.jpg',
                        'juujikaNoRokunin/Chapter5/033.jpg',
                        'juujikaNoRokunin/Chapter5/034.jpg',
                    ]
                },
                '6': {
                    title: 'Chapter 6',
                    images: [
                        'juujikaNoRokunin/Chapter6/002.jpg',
                        'juujikaNoRokunin/Chapter6/003.jpg',
                        'juujikaNoRokunin/Chapter6/004.jpg',
                        'juujikaNoRokunin/Chapter6/005.jpg',
                        'juujikaNoRokunin/Chapter6/006.jpg',
                        'juujikaNoRokunin/Chapter6/007.jpg',
                        'juujikaNoRokunin/Chapter6/008.jpg',
                        'juujikaNoRokunin/Chapter6/009.jpg',
                        'juujikaNoRokunin/Chapter6/010.jpg',
                        'juujikaNoRokunin/Chapter6/011.jpg',
                        'juujikaNoRokunin/Chapter6/012.jpg',
                        'juujikaNoRokunin/Chapter6/013.jpg',
                        'juujikaNoRokunin/Chapter6/014.jpg',
                        'juujikaNoRokunin/Chapter6/015.jpg',
                        'juujikaNoRokunin/Chapter6/016.jpg',
                        'juujikaNoRokunin/Chapter6/017.jpg',
                        'juujikaNoRokunin/Chapter6/018.jpg',
                        'juujikaNoRokunin/Chapter6/019.jpg',
                        'juujikaNoRokunin/Chapter6/020.jpg',
                        'juujikaNoRokunin/Chapter6/021.jpg',
                        'juujikaNoRokunin/Chapter6/022.jpg',
                        'juujikaNoRokunin/Chapter6/023.jpg',
                        'juujikaNoRokunin/Chapter6/024.jpg',
                        'juujikaNoRokunin/Chapter6/025.jpg',
                        'juujikaNoRokunin/Chapter6/026.jpg',
                        'juujikaNoRokunin/Chapter6/027.jpg',
                        'juujikaNoRokunin/Chapter6/028.jpg',
                        'juujikaNoRokunin/Chapter6/029.jpg',
                        'juujikaNoRokunin/Chapter6/030.jpg',
                        'juujikaNoRokunin/Chapter6/031.jpg',
                        'juujikaNoRokunin/Chapter6/032.jpg',
                    ]
                },
                '7': {
                    title: 'Chapter 7',
                    images: [
                        'juujikaNoRokunin/Chapter7/005 (1).jpg',
                        'juujikaNoRokunin/Chapter7/006.jpg',
                        'juujikaNoRokunin/Chapter7/007.jpg',
                        'juujikaNoRokunin/Chapter7/008.jpg',
                        'juujikaNoRokunin/Chapter7/009.jpg',
                        'juujikaNoRokunin/Chapter7/010.jpg',
                        'juujikaNoRokunin/Chapter7/011.jpg',
                        'juujikaNoRokunin/Chapter7/012.jpg',
                        'juujikaNoRokunin/Chapter7/013.jpg',
                        'juujikaNoRokunin/Chapter7/014.jpg',
                        'juujikaNoRokunin/Chapter7/015.jpg',
                        'juujikaNoRokunin/Chapter7/016.jpg',
                        'juujikaNoRokunin/Chapter7/017.jpg',
                        'juujikaNoRokunin/Chapter7/018.jpg',
                        'juujikaNoRokunin/Chapter7/019.jpg',
                        'juujikaNoRokunin/Chapter7/020.jpg',
                        'juujikaNoRokunin/Chapter7/021.jpg',
                        'juujikaNoRokunin/Chapter7/022.jpg',
                        'juujikaNoRokunin/Chapter7/023.jpg',
                        'juujikaNoRokunin/Chapter7/024.jpg',
                        'juujikaNoRokunin/Chapter7/025.jpg',
                        'juujikaNoRokunin/Chapter7/026.jpg',
                        'juujikaNoRokunin/Chapter7/027.jpg',
                        'juujikaNoRokunin/Chapter7/028.jpg',
                        'juujikaNoRokunin/Chapter7/029.jpg',
                        'juujikaNoRokunin/Chapter7/030.jpg',
                        'juujikaNoRokunin/Chapter7/031.jpg',
                        'juujikaNoRokunin/Chapter7/032.jpg',
                        'juujikaNoRokunin/Chapter7/033.jpg',
                        'juujikaNoRokunin/Chapter7/034.jpg',
                        'juujikaNoRokunin/Chapter7/035.jpg',
                        'juujikaNoRokunin/Chapter7/036.jpg',
                    ]
                },
                '8': {
                    title: 'Chapter 8',
                    images: [
                        'juujikaNoRokunin/Chapter8/004.jpg',
                        'juujikaNoRokunin/Chapter8/005.jpg',
                        'juujikaNoRokunin/Chapter8/006.jpg',
                        'juujikaNoRokunin/Chapter8/007.jpg',
                        'juujikaNoRokunin/Chapter8/008.jpg',
                        'juujikaNoRokunin/Chapter8/009.jpg',
                        'juujikaNoRokunin/Chapter8/010.jpg',
                        'juujikaNoRokunin/Chapter8/011.jpg',
                        'juujikaNoRokunin/Chapter8/012.jpg',
                        'juujikaNoRokunin/Chapter8/013.jpg',
                        'juujikaNoRokunin/Chapter8/014.jpg',
                        'juujikaNoRokunin/Chapter8/015.jpg',
                    ]
                },
                '9': {
                    title: 'Chapter 9',
                    images: [
                        'juujikaNoRokunin/Chapter9/003.jpg',
                        'juujikaNoRokunin/Chapter9/004.jpg',
                        'juujikaNoRokunin/Chapter9/005.jpg',
                        'juujikaNoRokunin/Chapter9/006.jpg',
                        'juujikaNoRokunin/Chapter9/007.jpg',
                        'juujikaNoRokunin/Chapter9/008.jpg',
                        'juujikaNoRokunin/Chapter9/009.jpg',
                        'juujikaNoRokunin/Chapter9/010.jpg',
                        'juujikaNoRokunin/Chapter9/011.jpg',
                        'juujikaNoRokunin/Chapter9/012.jpg',
                        'juujikaNoRokunin/Chapter9/013.jpg',
                        'juujikaNoRokunin/Chapter9/014.jpg',
                    ]
                },
                '10': {
                    title: 'Chapter 10',
                    images: [
                        'juujikaNoRokunin/Chapter10/002.jpg',
                        'juujikaNoRokunin/Chapter10/003.jpg',
                        'juujikaNoRokunin/Chapter10/004.jpg',
                        'juujikaNoRokunin/Chapter10/005.jpg',
                        'juujikaNoRokunin/Chapter10/006.jpg',
                        'juujikaNoRokunin/Chapter10/007.jpg',
                        'juujikaNoRokunin/Chapter10/008.jpg',
                        'juujikaNoRokunin/Chapter10/009.jpg',
                        'juujikaNoRokunin/Chapter10/010.jpg',
                        'juujikaNoRokunin/Chapter10/011.jpg',
                        'juujikaNoRokunin/Chapter10/012.jpg',
                        'juujikaNoRokunin/Chapter10/013.jpg',
                    ]
                },
                '11': {
                    title: 'Chapter 11',
                    images: [
                        'juujikaNoRokunin/Chapter11/003 (1).jpg',
                        'juujikaNoRokunin/Chapter11/004.jpg',
                        'juujikaNoRokunin/Chapter11/005.jpg',
                        'juujikaNoRokunin/Chapter11/006.jpg',
                        'juujikaNoRokunin/Chapter11/007.jpg',
                        'juujikaNoRokunin/Chapter11/008.jpg',
                        'juujikaNoRokunin/Chapter11/009.jpg',
                        'juujikaNoRokunin/Chapter11/010.jpg',
                        'juujikaNoRokunin/Chapter11/011.jpg',
                        'juujikaNoRokunin/Chapter11/012.jpg',
                        'juujikaNoRokunin/Chapter11/013.jpg',
                        'juujikaNoRokunin/Chapter11/014.jpg',
                    ]
                },
                '12': {
                    title: 'Chapter 12',
                    images: [
                        'juujikaNoRokunin/Chapter12/002.jpg',
                        'juujikaNoRokunin/Chapter12/003.jpg',
                        'juujikaNoRokunin/Chapter12/004.jpg',
                        'juujikaNoRokunin/Chapter12/005.jpg',
                        'juujikaNoRokunin/Chapter12/006.jpg',
                        'juujikaNoRokunin/Chapter12/007.jpg',
                        'juujikaNoRokunin/Chapter12/008.jpg',
                        'juujikaNoRokunin/Chapter12/009.jpg',
                        'juujikaNoRokunin/Chapter12/010.jpg',
                        'juujikaNoRokunin/Chapter12/011.jpg',
                        'juujikaNoRokunin/Chapter12/012.jpg',
                        'juujikaNoRokunin/Chapter12/013.jpg',
                    ]
                },
                '13': {
                    title: 'Chapter 13',
                    images: [
                        'juujikaNoRokunin/Chapter13/003 (1).jpg',
                        'juujikaNoRokunin/Chapter13/004.jpg',
                        'juujikaNoRokunin/Chapter13/005.jpg',
                        'juujikaNoRokunin/Chapter13/006.jpg',
                        'juujikaNoRokunin/Chapter13/007.jpg',
                        'juujikaNoRokunin/Chapter13/008.jpg',
                        'juujikaNoRokunin/Chapter13/009.jpg',
                        'juujikaNoRokunin/Chapter13/010.jpg',
                        'juujikaNoRokunin/Chapter13/011.jpg',
                        'juujikaNoRokunin/Chapter13/012.jpg',
                        'juujikaNoRokunin/Chapter13/013.jpg',
                        'juujikaNoRokunin/Chapter13/014.jpg',
                    ]
                },
                '14': {
                    title: 'Chapter 14',
                    images: [
                        'juujikaNoRokunin/Chapter14/003.jpg',
                        'juujikaNoRokunin/Chapter14/004.jpg',
                        'juujikaNoRokunin/Chapter14/005.jpg',
                        'juujikaNoRokunin/Chapter14/006.jpg',
                        'juujikaNoRokunin/Chapter14/007.jpg',
                        'juujikaNoRokunin/Chapter14/008.jpg',
                        'juujikaNoRokunin/Chapter14/009.jpg',
                        'juujikaNoRokunin/Chapter14/010.jpg',
                        'juujikaNoRokunin/Chapter14/011.jpg',
                        'juujikaNoRokunin/Chapter14/012.jpg',
                        'juujikaNoRokunin/Chapter14/013.jpg',
                        'juujikaNoRokunin/Chapter14/014.jpg',
                    ]
                },
                '15': {
                    title: 'Chapter 15',
                    images: [
                        'juujikaNoRokunin/Chapter15/003 (1).jpg',
                        'juujikaNoRokunin/Chapter15/004.jpg',
                        'juujikaNoRokunin/Chapter15/005.jpg',
                        'juujikaNoRokunin/Chapter15/006.jpg',
                        'juujikaNoRokunin/Chapter15/007.jpg',
                        'juujikaNoRokunin/Chapter15/008.jpg',
                        'juujikaNoRokunin/Chapter15/009.jpg',
                        'juujikaNoRokunin/Chapter15/010.jpg',
                        'juujikaNoRokunin/Chapter15/011.jpg',
                        'juujikaNoRokunin/Chapter15/012.jpg',
                        'juujikaNoRokunin/Chapter15/013.jpg',
                        'juujikaNoRokunin/Chapter15/014.jpg',
                    ]
                },
                '16': {
                    title: 'Chapter 16',
                    images: [
                        'juujikaNoRokunin/Chapter16/003.jpg',
                        'juujikaNoRokunin/Chapter16/004.jpg',
                        'juujikaNoRokunin/Chapter16/005.jpg',
                        'juujikaNoRokunin/Chapter16/006.jpg',
                        'juujikaNoRokunin/Chapter16/007.jpg',
                        'juujikaNoRokunin/Chapter16/008.jpg',
                        'juujikaNoRokunin/Chapter16/009.jpg',
                        'juujikaNoRokunin/Chapter16/010.jpg',
                        'juujikaNoRokunin/Chapter16/011.jpg',
                        'juujikaNoRokunin/Chapter16/012.jpg',
                        'juujikaNoRokunin/Chapter16/013.jpg',
                        'juujikaNoRokunin/Chapter16/014.jpg',
                    ]
                },
                '17': {
                    title: 'Chapter 17',
                    images: [
                        'juujikaNoRokunin/Chapter17/004.jpg',
                        'juujikaNoRokunin/Chapter17/005.jpg',
                        'juujikaNoRokunin/Chapter17/006.jpg',
                        'juujikaNoRokunin/Chapter17/007.jpg',
                        'juujikaNoRokunin/Chapter17/008.jpg',
                        'juujikaNoRokunin/Chapter17/009.jpg',
                        'juujikaNoRokunin/Chapter17/010.jpg',
                        'juujikaNoRokunin/Chapter17/011.jpg',
                        'juujikaNoRokunin/Chapter17/012.jpg',
                        'juujikaNoRokunin/Chapter17/013.jpg',
                        'juujikaNoRokunin/Chapter17/014.jpg',
                        'juujikaNoRokunin/Chapter17/015.jpg',
                    ]
                },
                '18': {
                    title: 'Chapter 18',
                    images: [
                        'juujikaNoRokunin/Chapter18/003.jpg',
                        'juujikaNoRokunin/Chapter18/004.jpg',
                        'juujikaNoRokunin/Chapter18/005.jpg',
                        'juujikaNoRokunin/Chapter18/006.jpg',
                        'juujikaNoRokunin/Chapter18/007.jpg',
                        'juujikaNoRokunin/Chapter18/008.jpg',
                        'juujikaNoRokunin/Chapter18/009.jpg',
                        'juujikaNoRokunin/Chapter18/010.jpg',
                        'juujikaNoRokunin/Chapter18/011.jpg',
                        'juujikaNoRokunin/Chapter18/012.jpg',
                        'juujikaNoRokunin/Chapter18/013.jpg',
                        'juujikaNoRokunin/Chapter18/014.jpg',
                    ]
                },
                '19': {
                    title: 'Chapter 19',
                    images: [
                        'juujikaNoRokunin/Chapter19/image-01.jpg',
                        'juujikaNoRokunin/Chapter19/image-02.jpg',
                        'juujikaNoRokunin/Chapter19/image-03.jpg',
                        'juujikaNoRokunin/Chapter19/image-04.jpg',
                        'juujikaNoRokunin/Chapter19/image-05.jpg',
                        'juujikaNoRokunin/Chapter19/image-06.jpg',
                        'juujikaNoRokunin/Chapter19/image-07.jpg',
                        'juujikaNoRokunin/Chapter19/image-08.jpg',
                        'juujikaNoRokunin/Chapter19/image-09.jpg',
                        'juujikaNoRokunin/Chapter19/image-10.jpg',
                        'juujikaNoRokunin/Chapter19/image-11.jpg',
                        'juujikaNoRokunin/Chapter19/image-12.jpg',
                    ]
                },
                '20': {
                    title: 'Chapter 20',
                    images: [
                        'juujikaNoRokunin/Chapter20/image-01 (1).jpg',
                        'juujikaNoRokunin/Chapter20/image-02.jpg',
                        'juujikaNoRokunin/Chapter20/image-03.jpg',
                        'juujikaNoRokunin/Chapter20/image-04.jpg',
                        'juujikaNoRokunin/Chapter20/image-05.jpg',
                        'juujikaNoRokunin/Chapter20/image-06.jpg',
                        'juujikaNoRokunin/Chapter20/image-07.jpg',
                        'juujikaNoRokunin/Chapter20/image-08.jpg',
                        'juujikaNoRokunin/Chapter20/image-09.jpg',
                        'juujikaNoRokunin/Chapter20/image-10.jpg',
                        'juujikaNoRokunin/Chapter20/image-11.jpg',
                        'juujikaNoRokunin/Chapter20/image-12.jpg',
                    ]
                },
                '21': {
                    title: 'Chapter 21',
                    images: [
                        'juujikaNoRokunin/Chapter21/image-01.jpg',
                        'juujikaNoRokunin/Chapter21/image-02.jpg',
                        'juujikaNoRokunin/Chapter21/image-03.jpg',
                        'juujikaNoRokunin/Chapter21/image-04.jpg',
                        'juujikaNoRokunin/Chapter21/image-05.jpg',
                        'juujikaNoRokunin/Chapter21/image-06.jpg',
                        'juujikaNoRokunin/Chapter21/image-07.jpg',
                        'juujikaNoRokunin/Chapter21/image-08.jpg',
                        'juujikaNoRokunin/Chapter21/image-09.jpg',
                        'juujikaNoRokunin/Chapter21/image-10.jpg',
                        'juujikaNoRokunin/Chapter21/image-11.jpg',
                        'juujikaNoRokunin/Chapter21/image-12.jpg',
                    ]
                },
                '22': {
                    title: 'Chapter 22',
                    images: [
                        'juujikaNoRokunin/Chapter22/image-01 (1).jpg',
                        'juujikaNoRokunin/Chapter22/image-02.jpg',
                        'juujikaNoRokunin/Chapter22/image-03.jpg',
                        'juujikaNoRokunin/Chapter22/image-04.jpg',
                        'juujikaNoRokunin/Chapter22/image-05.jpg',
                        'juujikaNoRokunin/Chapter22/image-06.jpg',
                        'juujikaNoRokunin/Chapter22/image-07.jpg',
                        'juujikaNoRokunin/Chapter22/image-08.jpg',
                        'juujikaNoRokunin/Chapter22/image-09.jpg',
                        'juujikaNoRokunin/Chapter22/image-10.jpg',
                        'juujikaNoRokunin/Chapter22/image-11.jpg',
                        'juujikaNoRokunin/Chapter22/image-12.jpg',
                    ]
                },
                '23': {
                    title: 'Chapter 23',
                    images: [
                        'juujikaNoRokunin/Chapter23/image-01.jpg',
                        'juujikaNoRokunin/Chapter23/image-02.jpg',
                        'juujikaNoRokunin/Chapter23/image-03.jpg',
                        'juujikaNoRokunin/Chapter23/image-04.jpg',
                        'juujikaNoRokunin/Chapter23/image-05.jpg',
                        'juujikaNoRokunin/Chapter23/image-06.jpg',
                        'juujikaNoRokunin/Chapter23/image-07.jpg',
                        'juujikaNoRokunin/Chapter23/image-08.jpg',
                        'juujikaNoRokunin/Chapter23/image-09.jpg',
                        'juujikaNoRokunin/Chapter23/image-10.jpg',
                        'juujikaNoRokunin/Chapter23/image-11.jpg',
                        'juujikaNoRokunin/Chapter23/image-12.jpg',
                    ]
                },
                '24': {
                    title: 'Chapter 24',
                    images: [
                        'juujikaNoRokunin/Chapter24/image-01 (1).jpg',
                        'juujikaNoRokunin/Chapter24/image-02.jpg',
                        'juujikaNoRokunin/Chapter24/image-03.jpg',
                        'juujikaNoRokunin/Chapter24/image-04.jpg',
                        'juujikaNoRokunin/Chapter24/image-05.jpg',
                        'juujikaNoRokunin/Chapter24/image-06.jpg',
                        'juujikaNoRokunin/Chapter24/image-07.jpg',
                        'juujikaNoRokunin/Chapter24/image-08.jpg',
                        'juujikaNoRokunin/Chapter24/image-09.jpg',
                        'juujikaNoRokunin/Chapter24/image-10.jpg',
                        'juujikaNoRokunin/Chapter24/image-11.jpg',
                        'juujikaNoRokunin/Chapter24/image-12.jpg',
                    ]
                },
                '25': {
                    title: 'Chapter 25',
                    images: [
                        'juujikaNoRokunin/Chapter25/image-01.jpg',
                        'juujikaNoRokunin/Chapter25/image-02.jpg',
                        'juujikaNoRokunin/Chapter25/image-03.jpg',
                        'juujikaNoRokunin/Chapter25/image-04.jpg',
                        'juujikaNoRokunin/Chapter25/image-05.jpg',
                        'juujikaNoRokunin/Chapter25/image-06.jpg',
                        'juujikaNoRokunin/Chapter25/image-07.jpg',
                        'juujikaNoRokunin/Chapter25/image-08.jpg',
                        'juujikaNoRokunin/Chapter25/image-09.jpg',
                        'juujikaNoRokunin/Chapter25/image-10.jpg',
                        'juujikaNoRokunin/Chapter25/image-11.jpg',
                        'juujikaNoRokunin/Chapter25/image-12.jpg',
                    ]
                },
                '26': {
                    title: 'Chapter 26',
                    images: [
                        'juujikaNoRokunin/Chapter26/image-01 (1).jpg',
                        'juujikaNoRokunin/Chapter26/image-02.jpg',
                        'juujikaNoRokunin/Chapter26/image-03.jpg',
                        'juujikaNoRokunin/Chapter26/image-04.jpg',
                        'juujikaNoRokunin/Chapter26/image-05.jpg',
                        'juujikaNoRokunin/Chapter26/image-06.jpg',
                        'juujikaNoRokunin/Chapter26/image-07.jpg',
                        'juujikaNoRokunin/Chapter26/image-08.jpg',
                        'juujikaNoRokunin/Chapter26/image-09.jpg',
                        'juujikaNoRokunin/Chapter26/image-10.jpg',
                        'juujikaNoRokunin/Chapter26/image-11.jpg',
                        'juujikaNoRokunin/Chapter26/image-12.jpg',
                    ]
                },
                '27': {
                    title: 'Chapter 27',
                    images: [
                        'juujikaNoRokunin/Chapter27/image-01.jpg',
                        'juujikaNoRokunin/Chapter27/image-02.jpg',
                        'juujikaNoRokunin/Chapter27/image-03.jpg',
                        'juujikaNoRokunin/Chapter27/image-04.jpg',
                        'juujikaNoRokunin/Chapter27/image-05.jpg',
                        'juujikaNoRokunin/Chapter27/image-06.jpg',
                        'juujikaNoRokunin/Chapter27/image-07.jpg',
                        'juujikaNoRokunin/Chapter27/image-08.jpg',
                        'juujikaNoRokunin/Chapter27/image-09.jpg',
                        'juujikaNoRokunin/Chapter27/image-10.jpg',
                        'juujikaNoRokunin/Chapter27/image-11.jpg',
                        'juujikaNoRokunin/Chapter27/image-12.jpg',
                    ]
                },
                '28': {
                    title: 'Chapter 28',
                    images: [
                        'juujikaNoRokunin/Chapter28/image-01 (1).jpg',
                        'juujikaNoRokunin/Chapter28/image-02.jpg',
                        'juujikaNoRokunin/Chapter28/image-03.jpg',
                        'juujikaNoRokunin/Chapter28/image-04.jpg',
                        'juujikaNoRokunin/Chapter28/image-05.jpg',
                        'juujikaNoRokunin/Chapter28/image-06.jpg',
                        'juujikaNoRokunin/Chapter28/image-07.jpg',
                        'juujikaNoRokunin/Chapter28/image-08.jpg',
                        'juujikaNoRokunin/Chapter28/image-09.jpg',
                        'juujikaNoRokunin/Chapter28/image-10.jpg',
                        'juujikaNoRokunin/Chapter28/image-11.jpg',
                        'juujikaNoRokunin/Chapter28/image-12.jpg',
                    ]
                },
                '29': {
                    title: 'Chapter 29',
                    images: [
                        'juujikaNoRokunin/Chapter29/image-04 (1).jpg',
                        'juujikaNoRokunin/Chapter29/image-05.jpg',
                        'juujikaNoRokunin/Chapter29/image-06.jpg',
                        'juujikaNoRokunin/Chapter29/image-07.jpg',
                        'juujikaNoRokunin/Chapter29/image-08.jpg',
                        'juujikaNoRokunin/Chapter29/image-09.jpg',
                        'juujikaNoRokunin/Chapter29/image-10.jpg',
                        'juujikaNoRokunin/Chapter29/image-11.jpg',
                        'juujikaNoRokunin/Chapter29/image-12.jpg',
                        'juujikaNoRokunin/Chapter29/image-13.jpg',
                        'juujikaNoRokunin/Chapter29/image-14.jpg',
                        'juujikaNoRokunin/Chapter29/image-15.jpg',
                    ]
                },
                '30': {
                    title: 'Chapter 30',
                    images: [
                        'juujikaNoRokunin/Chapter30/image-03.jpg',
                        'juujikaNoRokunin/Chapter30/image-04.jpg',
                        'juujikaNoRokunin/Chapter30/image-05.jpg',
                        'juujikaNoRokunin/Chapter30/image-06.jpg',
                        'juujikaNoRokunin/Chapter30/image-07.jpg',
                        'juujikaNoRokunin/Chapter30/image-08.jpg',
                        'juujikaNoRokunin/Chapter30/image-09.jpg',
                        'juujikaNoRokunin/Chapter30/image-10.jpg',
                        'juujikaNoRokunin/Chapter30/image-11.jpg',
                        'juujikaNoRokunin/Chapter30/image-12.jpg',
                        'juujikaNoRokunin/Chapter30/image-13.jpg',
                        'juujikaNoRokunin/Chapter30/image-14.jpg',
                    ]
                },
            }
            
        },
        'kagura': {
            title: 'Kagura',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/kagura-ch1-1.jpg',
                        'pics/kagura-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/kagura-ch2-1.jpg',
                        'pics/kagura-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/kagura-ch3-1.jpg',
                        'pics/kagura-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'cipher': {
            title: 'Cipher',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/cipher-ch1-1.jpg',
                        'pics/cipher-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/cipher-ch2-1.jpg',
                        'pics/cipher-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/cipher-ch3-1.jpg',
                        'pics/cipher-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'bloods-of-the-tracks': {
            title: 'Bloods of the Tracks',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/bloods-of-the-tracks-ch1-1.jpg',
                        'pics/bloods-of-the-tracks-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/bloods-of-the-tracks-ch2-1.jpg',
                        'pics/bloods-of-the-tracks-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/bloods-of-the-tracks-ch3-1.jpg',
                        'pics/bloods-of-the-tracks-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'punpun': {
            title: 'Goodnight Punpun',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/punpun-ch1-1.jpg',
                        'pics/punpun-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/punpun-ch2-1.jpg',
                        'pics/punpun-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/punpun-ch3-1.jpg',
                        'pics/punpun-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'firepunch': {
            title: 'Fire Punch',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/firepunch-ch1-1.jpg',
                        'pics/firepunch-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/firepunch-ch2-1.jpg',
                        'pics/firepunch-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/firepunch-ch3-1.jpg',
                        'pics/firepunch-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'homunculus': {
            title: 'Homunculus',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/homunculus-ch1-1.jpg',
                        'pics/homunculus-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/homunculus-ch2-1.jpg',
                        'pics/homunculus-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/homunculus-ch3-1.jpg',
                        'pics/homunculus-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'pumpkin-night': {
            title: 'Pumpkin Night',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/pumpkin-night-ch1-1.jpg',
                        'pics/pumpkin-night-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/pumpkin-night-ch2-1.jpg',
                        'pics/pumpkin-night-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/pumpkin-night-ch3-1.jpg',
                        'pics/pumpkin-night-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'record-of-ragnarok': {
            title: 'Record of Ragnarok',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/record-of-ragnarok-ch1-1.jpg',
                        'pics/record-of-ragnarok-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/record-of-ragnarok-ch2-1.jpg',
                        'pics/record-of-ragnarok-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/record-of-ragnarok-ch3-1.jpg',
                        'pics/record-of-ragnarok-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'jjk': {
            title: 'Jujutsu Kaisen',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/jjk-ch1-1.jpg',
                        'pics/jjk-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/jjk-ch2-1.jpg',
                        'pics/jjk-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/jjk-ch3-1.jpg',
                        'pics/jjk-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        '20th-century-boys': {
            title: '20th Century Boys',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/20th-century-boys-ch1-1.jpg',
                        'pics/20th-century-boys-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/20th-century-boys-ch2-1.jpg',
                        'pics/20th-century-boys-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/20th-century-boys-ch3-1.jpg',
                        'pics/20th-century-boys-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'dandadan': {
            title: 'Dandadan',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/dandadan-ch1-1.jpg',
                        'pics/dandadan-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/dandadan-ch2-1.jpg',
                        'pics/dandadan-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/dandadan-ch3-1.jpg',
                        'pics/dandadan-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'vagabond': {
            title: 'Vagabond',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/vagabond-ch1-1.jpg',
                        'pics/vagabond-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/vagabond-ch2-1.jpg',
                        'pics/vagabond-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/vagabond-ch3-1.jpg',
                        'pics/vagabond-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'csm': {
            title: 'Chainsaw Man',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/csm-ch1-1.jpg',
                        'pics/csm-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/csm-ch2-1.jpg',
                        'pics/csm-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/csm-ch3-1.jpg',
                        'pics/csm-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'tomodachi-game': {
            title: 'Tomodachi Game',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/tomodachi-game-ch1-1.jpg',
                        'pics/tomodachi-game-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/tomodachi-game-ch2-1.jpg',
                        'pics/tomodachi-game-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/tomodachi-game-ch3-1.jpg',
                        'pics/tomodachi-game-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
        'tokyo-ghoul': {
            title: 'Tokyo Ghoul',
            chapters: {
                '1': {
                    title: 'Chapter 1',
                    images: [
                        'pics/tokyo-ghoul-ch1-1.jpg',
                        'pics/tokyo-ghoul-ch1-2.jpg'
                    ]
                },
                '2': {
                    title: 'Chapter 2',
                    images: [
                        'pics/tokyo-ghoul-ch2-1.jpg',
                        'pics/tokyo-ghoul-ch2-2.jpg'
                    ]
                },
                '3': {
                    title: 'Chapter 3',
                    images: [
                        'pics/tokyo-ghoul-ch3-1.jpg',
                        'pics/tokyo-ghoul-ch3-2.jpg'
                    ]
                }
                // Add more chapters as needed
            }
        },
    };

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const mangaId = urlParams.get('manga');
    const chapterId = urlParams.get('chapter');

    if (mangaId && chapterId && mangaChapters[mangaId] && mangaChapters[mangaId].chapters[chapterId]) {
        const manga = mangaChapters[mangaId];
        const chapter = manga.chapters[chapterId];

        document.getElementById('chapter-title').textContent = `${manga.title} - ${chapter.title}`;
        
        const chapterContent = document.getElementById('chapter-content');
        chapterContent.innerHTML = ''; // Clear existing content
        
        chapter.images.forEach(imageSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = `${manga.title} - ${chapter.title}`;
            imgElement.classList.add('chapter-image'); // Optional: Add a class for additional styling
            chapterContent.appendChild(imgElement);
        });
    } else {
        document.getElementById('chapter-title').textContent = 'Chapter Not Found';
        document.getElementById('chapter-content').textContent = 'The chapter you are looking for does not exist.';
    }
});
