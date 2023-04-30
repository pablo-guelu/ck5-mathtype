import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import MathType from '@wiris/mathtype-ckeditor5/src/plugin';

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [MathType],
        toolbar: {
            items: ['MathType', 'ChemType'],
        },
    })
    .catch(error => {
        console.error(error);
    });