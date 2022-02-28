const isProd = process.argv.includes('--production');
const isDev = !isProd;




export default {
    isProd: isProd,
    isDev: isDev,


    htmlmin:{
        collapseWhitespace: isProd
    },
    pugs:{
        pretty:isDev,
        
    },
    scss:{
       
    },
    webpack:{
        mode:isProd ? 'production':'development'
    },
    imagemin:{
        verbose:true
    },
    fonter:{
        formats:["ttf", 'woff', "eot", "svg"]
    }
}