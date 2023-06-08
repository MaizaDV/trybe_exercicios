interface User {
  id?: number;
  name: string;
  age: number;
}

class UserModel {
  constructor(
    private database: User[] = [],
    private lastId: 0 = 0,
  ){}

  create(user: User) {
    const newUser = { ...user, id: this.lastId++ }
    this.database.push(newUser);
    return newUser;
  }

  getAll(): User[] {
    return [...this.database];
  }
}

class UserService {
  constructor(protected userModel: UserModel) {
  }
  create(user: User): User {
    if(user.age > 200) {
      throw new Error('idade está um pouco avançada!');
    }
    return this.userModel.create(user);
  }

  getAll() {
    return this.userModel.getAll();
  }
}

const userModel = new UserModel();
const userService = new UserService(userModel);

const Capi = userService.create({
  name: 'Capi',
  age: 120,
});

const Andre = userService.create({
  name: 'Andre',
  age: 100,
});

console.log(userService.getAll());

