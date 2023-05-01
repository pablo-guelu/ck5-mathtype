
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import MathType from '@wiris/mathtype-ckeditor5/src/plugin';

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [
            Essentials, Paragraph, Bold, Italic, MathType
        ], 
        toolbar: {
            items: [
                'bold', 'italic', 'alignment', 'MathType', 'ChemType'
            ]
        }})
    .catch(error => {
        console.error(error);
    });