export default class VpbPost{
  constructor({name, path, type, settings,content}) {
    this.name = name; 
    this.path = path; 
    this.type = type;
    this.settings = settings;
    this.content = content; 
  }
}