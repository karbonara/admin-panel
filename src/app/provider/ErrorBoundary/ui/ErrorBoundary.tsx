import React, { Suspense } from 'react';
import { PageError } from 'widgets/PageError/index';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  //  Метод жизненного цикла, который позволяет компоненту отрендерить запасной UI в случае ошибки
  static getDerivedStateFromError(error: Error) {
    // Обновляем состояние, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  // Метод жизненного цикла, который позволяет компоненту отрендерить запасной UI в случае ошибки (прошлый метод) и отправить отчет об ошибке
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return children;
  }
}


export default ErrorBoundary;