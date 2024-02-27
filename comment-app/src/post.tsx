export class Posts {
  name: string;
  text: string;
  upvotes: number;

  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
    this.upvotes = 0;
  }

  upvote(b: boolean) {
    if (b) {
      this.upvotes++
    } else {
      this.upvotes = this.upvotes - 1
    }
  }

  render() {
    // Your component render logic here
    return (
      <div>
        <h1>{this.name}</h1>
        <p>{this.text}</p>
      </div>
    );
  }
}

export class Post extends Posts {
  comments: FirstReply[];
  
  constructor(name: string, text: string) {
    super(name, text);
    this.comments = []
  }
}

export class FirstReply extends Posts {
  comments: SecondReply[];
  
  constructor(name: string, text: string) {
    super(name, text);
    this.comments = []
  }
}

export class SecondReply extends Posts {

  constructor(name: string, text: string) {
    super(name, text);
  }
}


