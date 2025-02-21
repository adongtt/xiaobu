interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'xiaobu Running Page',
  siteUrl: '',
  logo: 'https://dl.goeppgroup.com/assets/images/20250221133940.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: '',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
