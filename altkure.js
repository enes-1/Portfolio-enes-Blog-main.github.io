include: "https://kit.fontawesome.com/ee9e785690.js";
//{ label: '', url: '#', target: '_blank' },

$(document).ready(function () {

    var index = 0, entries = [
        [
            { label: 'Yılan Oyunu', url: 'snk.html', target: '_blank',  },
            { label: 'Hesap makine', url: '#', target: '_blank',  },
            { label: 'a Projesi', url: '#', target: '_blank' },
            { label: 'b Projesi', url: '#', target: '_blank' },
            { label: 'c Projesi', url: '#', target: '_blank' },
            { label: 'd Projesi', url: '#', target: '_blank' },
            { label: 'e Projesi', url: '#', target: '_blank' },
            { label: 'f Projesi', url: '#', target: '_blank' },
            { label: 'g Projesi', url: '#', target: '_blank' },
            { label: 'h Projesi', url: '#', target: '_blank' },
            { label: 'ğ Projesi', url: '#', target: '_blank' },


        ],
        [
            { label: 'Twitter', url: '#', target: '_blank' },
            { label: 'GitHub', url: 'https://github.com/enes-1', target: '_blank' },
            { label: 'Facebook', url: '#', target: '_blank' },
            { label: 'İnstegram', url: '#', target: '_blank' },
            { label: 'Redit', url: '#', target: '_blank' },
            { label: 'WhatsApp', url: '#', target: '_blank' },
            { label: 'LinkedIn', url: '#', target: '_blank' },
            { label: 'TikTok', url: '#', target: '_blank' },
            { label: 'Snapchat', url: '#', target: '_blank' },
            { label: 'E-Posta', url: '#', target: '_blank' },
            { label: 'Telegram', url: '#', target: '_blank' },
            { label: 'Discord', url: '#', target: '_blank' },
            { label: 'Spotify', url: '#', target: '_blank' },
            { label: 'CodePen', url: '#', target: '_blank' },
            { label: 'Skype', url: '#', target: '_blank' },


        ],

        [
            { label: 'Python', url: '#', target: '_blank' },
            { label: 'C', url: '#', target: '_blank' },
            { label: 'C#', url: '#', target: '_blank' },
            { label: 'C++', url: '#', target: '_blank' },
            { label: 'JAVA', url: '#', target: '_blank' },
            { label: 'Kotlin', url: '#', target: '_blank' },
            { label: 'JavaScript', url: '#', target: '_blank' },
            { label: 'React', url: '#', target: '_blank' },
            { label: 'Nodejs', url: '#', target: '_blank' },
            { label: 'Pascal', url: '#', target: '_blank' },
            { label: 'Asembly', url: '#', target: '_blank' },


        ]

    ];

    var settings = {
        entries: entries[index],
        width: 1296,
        height: 796,
        radius: '60%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#f5f8fd',
        opacityOver: 1.00,
        opacityOut: 0.2,
        opacitySpeed: 4,
        fov: 800,
        speed: 1.6,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '28',
        fontColor: ' #040b14',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10,
        animatingSpeed: 0.009, // next geçişi hızı

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#holder').svg3DTagCloud(settings);

    var svg3DTagCloud = $('#holder').data('plugin_SVG3DTagCloud');

    $('#next').click(function () {
        svg3DTagCloud.animOut(function () {
            index = index + 1 >= entries.length ? 0 : index + 1;
            svg3DTagCloud.setEntries(entries[index]);
            svg3DTagCloud.animIn();
        });
    });

});

