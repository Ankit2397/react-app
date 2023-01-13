import React, { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop' // Crops image
import FilePondPluginImageTransform from 'filepond-plugin-image-transform' // Changes image 

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginImagePreview , FilePondPluginImageCrop,
    FilePondPluginImageTransform)
export default function FileSizeValidate() {
  const [files, initFiles] = useState([])
  return (
    <div className="w-[400px] text-center my-0 mx-auto">
      <h2 className="mb-4">File Upload Size Validation</h2>
      <FilePond
        files={files}
        allowMultiple
        allowImageCrop={true}
        allowImageTransform={true}
        imageCropAspectRatio={'1:1'}
        allowFileSizeValidation={true}
        maxFileSize={10000000 } // by default is 10kb
        labelMaxFileSizeExceeded={'File is too large'}
      />
    </div>
  )
}