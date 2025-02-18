import { type ReactElement } from 'react'

import { AuthLayout } from 'src/presentation/components'
import { Fgts } from 'src/presentation/pages'

export const makeFgts = () => <Fgts />

makeFgts.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>
