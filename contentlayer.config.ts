import {defineDocumentType, makeSource} from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    date: {type: 'date', required: true}
  }
}));

export const Case = defineDocumentType(() => ({
  name: 'Case',
  filePathPattern: `cases/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    slug: {type: 'string', required: true}
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Case]
});
