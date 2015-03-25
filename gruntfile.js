module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        haxe: {
            project: {
                hxml: "build.hxml -xml docs.xml --macro include('pixi')"
            }
        },

        exec: {
            //resourceloader: "browserify -r resource-loader > ./libs/resource-loader.dev.js && uglify -s ./libs/resource-loader.dev.js -o ./libs/resource-loader.min.js",
            //eventemitter3: "browserify -r eventemitter3 > ./libs/eventemitter3.dev.js && uglify -s ./libs/eventemitter3.dev.js -o ./libs/eventemitter3.min.js",
            docs: "haxelib run chxdoc -o ../adireddy.github.io/docs/haxe-pixi/v3 -f docs.xml " +
                " --showTodoTags=false " +
                " --deny=demos.*,samples.*,js.*,haxe.*,nape.*,zpp_nape.*,/ " +
                "--title='Externs of pixi.js for Haxe' " +
                "--subtitle='<a href='http://adireddy.github.io/haxe-pixi' target='_blank'>haxe-pixi</a>'",
            copy: "cp -R samples/_output/** ../adireddy.github.io/demos/haxe-pixi/v3/",
            copy: "cp -R ./libs/** ./samples/_output/libs/"
        },

        zip: {
            "pixi.zip": ["pixi/**", "haxelib.json"]
        }
    });

    grunt.loadNpmTasks("grunt-haxe");
    grunt.loadNpmTasks("grunt-zip");
    grunt.loadNpmTasks("grunt-exec");
    grunt.registerTask("default", ["haxe", "exec", "zip"]);
};