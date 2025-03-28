"latex-workshop.latex.tools": [
    {
        "name": "latexmk",
        "command": "latexmk",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-pdf",
            "-outdir=%OUTDIR%",
            "%DOC%"
        ],
        "env": {}
    },
    {
        "name": "xelatex",
        "command": "xelatex",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOC%"
        ],
        "env": {}
    },
    {
        "name": "pdflatex",
        "command": "pdflatex",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOCFILE%"
        ],
        "env": {}
    },
    {
        "name": "bibtex",
        "command": "bibtex",
        "args": [
            "%DOCFILE%"
        ],
        "env": {}
    },
    {
        "name": "makeglossaries",
        "command": "makeglossaries",
        "args": [
            "%DOCFILE%"
        ],
        "env": {}
    },
    {
        "name": "biber",
        "command": "biber",
        "args": ["--output-directory=%OUTDIR%", "%DOCFILE%"],
        "env": {}
    },
],
    "latex-workshop.latex.recipes": [
        {
            "name": "pdfLaTeX",
            "tools": [
                "pdflatex"
            ]
        },
        {
            "name": "latexmk 🔃",
            "tools": [
                "latexmk"
            ]
        },
        {
            "name": "xelatex",
            "tools": [
                "xelatex"
            ]
        },

        {
            "name": "pdflatex ➞ biber ➞ pdflatex`×2",
            "tools": [
                "pdflatex",
                "makeglossaries",
                "biber",
                "pdflatex",
                "pdflatex"
            ]
        },
        {
            "name": "xelatex ➞ bibtex ➞ xelatex`×2",
            "tools": [
                "xelatex",
                "bibtex",
                "xelatex",
                "xelatex"
            ]
        }
    ]

----



    "latex-workshop.latex.tools": [
        {
            "name": "pdflatex",
            "command": "pdflatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "main"
            ]
        },
        {
            "name": "makeindex-nomencl",
            "command": "makeindex",
            "args": [
                "main.nlo",
                "-s",
                "nomencl.ist",
                "-o",
                "main.nls"
            ]
        },
        {
            "name": "makeindex",
            "command": "makeindex",
            "args": [
                "main"
            ]
        },
        {
            "name": "biber",
            "command": "biber",
            "args": [
                "main"
            ]
        },
        {
            "name": "makeglossaries",
            "command": "makeglossaries",
            "args": [
                "main"
            ]
        }
    ],
        "latex-workshop.latex.recipes": [
            {
                "name": "Full Compilation",
                "tools": [
                    "pdflatex",
                    "makeindex-nomencl",
                    "makeindex",
                    "biber",
                    "makeglossaries",
                    "pdflatex",
                    "pdflatex"
                ]
            }
        ],