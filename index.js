class App extends React.Component {
  componentDidMount () {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    dragula([left, right]);
  }


  render () {
    return (

      <div className="container">
        <div id="left" className="container">

          <h4>resources</h4>
          <Card title="definition: vector" body="a vector is an ordered list of numbers. if we have a collection of $n$ real numbers, ${x_{1}, x_{2}...x_{n}}$. this can be written in a single point in $\mathbb{R}^{n}$."/>

          <Card title="definition: matrix" body="a matrix is a rectangular array of numbers, written as $\begin{bmatrix}
A_{11} & ... & A_{1n}\\
A_{m1} & ... & A_{mn}
\end{bmatrix}$ where the dimensions are given by $m$ by $n$."/>


        <Card title="definition: unique solution" body="a system of $m$ equations and $n$ variables where $m \geq n$ and there are no more than $m-n$ zero rows after performing Gaussian elimination, the system has a unique solution."/>

        <Card title="definition: linear dependence" body="A set of vectors $\{v_{1},...,v_{n}\}$ is linearly dependent if there exist some set of scalars $\alpha_{1},...,\alpha_{n}$ such that $\alpha_{1}v_{1} + ... + \alpha_{n}v_{n} = \vec{0}$ and not all $\alpha_{i}$s are equal to zero. In other words, a set of vectors is linearly dependent if one of the vectors could be written as a linear combination of the rest of the vectors."/>

          <Card title="definition: linear independence" body="A set of vectors $\{v_{1},...,v_{n}\}$ is linearly independent if $\alpha_{1}v_{1} + ... + \alpha_{n}v_{n} = \vec{0}$ implies that all $\alpha_{i}$s are equal to zero."/>

          <Card title="theorem 3.1" body="if the system of linear equations $A\vec{x} = \vec{b}$ has an infinite number of solutions, then the columns of $A$ are linearly dependent."/>

          <Card title="theorem 3.2" body="if the columns of $A$ in the system of linear equations $A\vec{x} = \vec{b}$ are linearly dependent, then the system does not have a unique solution."/>

          <Card title="definition: span" body="the span of a set of vectors $\{v_{1},...,v_{n}\}$ is the set of all linear combinations of $\{v_{1},...,v_{n}\}$."/>

          <Card title="definition: inverse" body="a square matrix $A$ is said to be invertible if there exists a matrix $B$ such that $AB = BA = I$ where $I$ is the identity matrix. in this case, $B$ is the inverse of $A$, and is denoted by $A^{-1}$."/>

          <Card title="theorem 6.1" body="If $A$ is an invertible matrix, then its inverse must be unique."/>

          <Card title="theorem 6.2" body="if $QP = I$ and $RQ = I$, then $P=R$. the matrix $P$ can be thought of as the right inverse of $Q$ and matrix $R$ can be thought of as the left inverse."/>

          <Card title="theorem 6.3" body="if a matrix $A$ is invertible, there exists a unique solution to the equation $A\vec{x} = \vec{b}$ for all possible vectors $\vec{b}$."/>

          <Card title="theorem 6.4" body="if a matrix $A$ is invertible, its columns are linearly independent."/>

          <Card title="theorem 6.5" body="the following statements are all true for a square matrix $A$ with dimensions $n$ by $n$: $A$ is invertible, there exists a unique solution to the equation $A\vec{x} = \vec{b}$, $A$ has linearly independent columns, $A$ has a trivial nullspace, and $det(A) \neq 0$."/>

        <Card title="definition: vector space" body="a set of vectors and two operators that are closed under vector addition and scalar multiplication."/>

          <Card title="definition: basis" body="given a vector space $V$, a set of vectors $\{v_{1},...,v_{n}\}$ s the basis of that vector space if $\{v_{1},...,v_{n}\}$ are linearly independent and for any vector $\vec{v} \in V$ there exist scalars $\in R$ such that $\vec{v} = \alpha_{1}v_{1} + ... + \alpha_{n}v_{n}$."/>

          <Card title="definition: dimension" body="the dimension of a vector space is the number of basis vectors."/>

          <Card title="definition: subspace" body="a subspace $U$ consists of a subset of a set $V$ in the vector space $(V, F)$ that contains the zero vector $\vec{0}$, is closed under scalar addition, and is closed under scalar multiplication."/>

          <Card title="definition: column space" body="the column space of a matrix $A$ is the span, or all possible linear combinations, of its columns."/>

          <Card title="theorem 8.3: rank-nullity" body="given a matrix with $x$ rows and $y$ columns then $rank(M)+nullity(M)=y$, where the rank of the matrix is the maximum number of linearly independent column vectors in the matrix and the nullity is the dimension of its nullspace."/>

          <Card title="theorem 23.1: least squares" body="A vector $\vec{e}$ is orthogonal to every vector in the column space of $A$ if and only if it is orthogonal to each of the columns $\vec{a_{i}}$ that form the basis of its column space"/>

        </div>
        <div id="right" className="container">
          <h4>proof</h4>
        <div>

        </div>
        </div>
        </div>
    );
  }
}

class Card extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div className="card">
        <div className="card-header">
          <h3>{this.props.title}</h3>
        </div>
        <div className="card-body">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
 }


React.render(<App />, document.getElementById('container'));
