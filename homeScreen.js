
let quotes=[
    {
        "quote":"Always remember that you are absolutely unique. Just like everyone else.",
        "author":"-Margaret Mead"
    },
    {
        "quote":"The future belongs to those who believe in the beauty of their dreams.",
        "author":"-Eleanor Roosevelt"
    },
    {
        "quote":"You only live once, but if you do it right, once is enough.",
        "author":"-Mae West"
    },
    {
        "quote":" The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author":" -Nelson Mandela"
    },
    {
        "quote":"Love the life you live. Live the life you love.",
        "author":" -Bob Marley"
    },
    {
        "quote":"None is higher than the other unless he is higher in virtue.",
        "author":"- Prophet Muhammad (PBUH)"
    },
    {
        "quote":"Do what is right, not what is easy nor what is popular.",
        "author":"-Roy T. Bennett"
    },
    {
        "quote":"Start where you are. Use what you have. Do what you can.",
        "author":"-Arthur Ashe"
    },
    {
        "quote":"By changing nothing, nothing changes.",
        "author":"-Tony Robbins"
    },
    {
        "quote":"You can, you should, and if you’re brave enough to start, you will.",
        "author":"-Stephen King"
    },

]

let colors = ["green", "#303F9F","#FF5252", "maroon", " #FF5252", "grey","#0097A7","#FF9800","#009688","#FF4081"]

$('.quotebtn').click(() => {
    let text = quotes[Math.floor(Math.random() * quotes.length)] 
    const colorsIndex = colors[Math.floor(Math.random() * colors.length)]
     
    $('#quote').html(text.quote)
    $('.author').html(text.author)

    $('body').css("background-color", colorsIndex)
    $('.quotebtn').css("background-color", colorsIndex)
    $('.quote').css("color", colorsIndex)
    $('.author').css("color",colorsIndex)
})

$(function getTime() {
 
    let text = quotes[Math.floor(Math.random() * quotes.length)];
    
    $('#quote').html(text.quote)
    $('.author').html(text.author)

    let time = new Date()
    let h = time.getHours()
    
    if (h >= 12 && h < 17) {
        $(".time").html("Lets Start Our Afternoon with a new quote")
    } else if (h >= 17 && h < 19) {
        $(".time").html("Lets Start Our Evening with a new quote")
    } else if (h >= 19 && h <= 24) {
        $(".time").html("Lets Start Our Night with a new quote")
    } else {
        $(".time").html("Lets Start Our Morning with a new quote")
    }
})